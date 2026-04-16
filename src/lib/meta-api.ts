const META_PAGE_ACCESS_TOKEN = process.env.META_PAGE_ACCESS_TOKEN || "";
const META_PAGE_ID = process.env.META_PAGE_ID || "";

export function isMetaConfigured(): boolean {
  return !!(META_PAGE_ACCESS_TOKEN && META_PAGE_ID);
}

export async function postImageToMeta(imageUrl: string): Promise<{ success: boolean; error?: string }> {
  if (!isMetaConfigured()) {
    return { success: false, error: "Meta/Facebook is not configured" };
  }

  try {
    // Post photo to Facebook Page
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${META_PAGE_ID}/photos`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: imageUrl,
          published: true,
          access_token: META_PAGE_ACCESS_TOKEN,
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      return { success: false, error: `Meta API error: ${err}` };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}
