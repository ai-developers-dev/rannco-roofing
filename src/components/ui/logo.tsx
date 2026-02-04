interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 240 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Three roof peaks */}
      <g fill="#F4581F">
        {/* Left roof peak */}
        <path d="M35 52 L55 24 L75 52 L68 52 L55 34 L42 52 Z" />

        {/* Center roof peak (tallest) with chimney */}
        <path d="M65 52 L100 5 L135 52 L125 52 L100 20 L75 52 Z" />
        {/* Chimney */}
        <rect x="112" y="12" width="10" height="18" />

        {/* Right roof peak */}
        <path d="M125 52 L145 24 L165 52 L158 52 L145 34 L132 52 Z" />

        {/* Small accent lines on roofs */}
        <path d="M58 44 L55 40 L52 44" strokeWidth="2" stroke="#F4581F" fill="none" />
        <path d="M148 44 L145 40 L142 44" strokeWidth="2" stroke="#F4581F" fill="none" />
      </g>

      {/* RANNCO text - black blocky font */}
      <text
        x="100"
        y="72"
        textAnchor="middle"
        fontFamily="'Arial Black', 'Helvetica Bold', sans-serif"
        fontWeight="900"
        fontSize="22"
        letterSpacing="3"
        fill="#1A1A1A"
      >
        RANNCO
      </text>

      {/* ROOFING text - orange */}
      <text
        x="100"
        y="90"
        textAnchor="middle"
        fontFamily="'Arial Black', 'Helvetica Bold', sans-serif"
        fontWeight="900"
        fontSize="13"
        letterSpacing="5"
        fill="#F4581F"
      >
        ROOFING
      </text>
    </svg>
  );
}
