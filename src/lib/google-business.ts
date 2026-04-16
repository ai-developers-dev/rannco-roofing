const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN || "";
const GOOGLE_BUSINESS_ACCOUNT_ID = process.env.GOOGLE_BUSINESS_ACCOUNT_ID || "";
const GOOGLE_BUSINESS_LOCATION_ID = process.env.GOOGLE_BUSINESS_LOCATION_ID || "";

export function isGoogleConfigured(): boolean {
  return !!(
    GOOGLE_CLIENT_ID &&
    GOOGLE_CLIENT_SECRET &&
    GOOGLE_REFRESH_TOKEN &&
    GOOGLE_BUSINESS_ACCOUNT_ID &&
    GOOGLE_BUSINESS_LOCATION_ID
  );
}

async function getAccessToken(): Promise<string> {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      refresh_token: GOOGLE_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Failed to get Google access token: ${err}`);
  }

  const data = await res.json();
  return data.access_token;
}

export async function postImageToGoogle(imageUrl: string): Promise<{ success: boolean; error?: string }> {
  if (!isGoogleConfigured()) {
    return { success: false, error: "Google Business Profile is not configured" };
  }

  try {
    const accessToken = await getAccessToken();

    // Create a media item on the Google Business Profile location
    const res = await fetch(
      `https://mybusiness.googleapis.com/v4/accounts/${GOOGLE_BUSINESS_ACCOUNT_ID}/locations/${GOOGLE_BUSINESS_LOCATION_ID}/media`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mediaFormat: "PHOTO",
          locationAssociation: {
            category: "ADDITIONAL",
          },
          sourceUrl: imageUrl,
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      return { success: false, error: `Google API error: ${err}` };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}
