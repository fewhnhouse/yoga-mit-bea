interface LotusIconProps {
  className?: string;
}

export default function LotusIcon({ className = "w-8 h-8" }: LotusIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer left petal */}
      <path
        d="M10 58C10 58 18 38 32 32C32 32 28 52 22 62C16 72 10 58 10 58Z"
        fill="currentColor"
        fillOpacity="0.35"
      />
      
      {/* Outer right petal */}
      <path
        d="M90 58C90 58 82 38 68 32C68 32 72 52 78 62C84 72 90 58 90 58Z"
        fill="currentColor"
        fillOpacity="0.35"
      />

      {/* Middle left petal */}
      <path
        d="M22 52C22 52 32 28 50 22C50 22 38 48 32 60C26 72 22 52 22 52Z"
        fill="currentColor"
        fillOpacity="0.5"
      />
      
      {/* Middle right petal */}
      <path
        d="M78 52C78 52 68 28 50 22C50 22 62 48 68 60C74 72 78 52 78 52Z"
        fill="currentColor"
        fillOpacity="0.5"
      />

      {/* Inner left petal */}
      <path
        d="M35 48C35 48 42 24 50 15C50 15 46 42 42 55C38 68 35 48 35 48Z"
        fill="currentColor"
        fillOpacity="0.7"
      />
      
      {/* Inner right petal */}
      <path
        d="M65 48C65 48 58 24 50 15C50 15 54 42 58 55C62 68 65 48 65 48Z"
        fill="currentColor"
        fillOpacity="0.7"
      />

      {/* Center petal */}
      <path
        d="M50 12C50 12 44 32 44 45C44 58 50 68 50 68C50 68 56 58 56 45C56 32 50 12 50 12Z"
        fill="currentColor"
        fillOpacity="0.9"
      />

      {/* Base/water suggestion */}
      <ellipse
        cx="50"
        cy="75"
        rx="28"
        ry="6"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
  );
}

