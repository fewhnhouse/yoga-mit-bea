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
      {/* Center petal */}
      <path
        d="M50 10C50 10 50 30 50 45C50 60 50 80 50 80C50 80 35 65 35 50C35 35 50 10 50 10Z"
        fill="currentColor"
        fillOpacity="0.9"
      />
      <path
        d="M50 10C50 10 50 30 50 45C50 60 50 80 50 80C50 80 65 65 65 50C65 35 50 10 50 10Z"
        fill="currentColor"
        fillOpacity="0.7"
      />

      {/* Left petals */}
      <path
        d="M25 50C25 50 35 35 50 35C50 35 35 55 30 65C25 75 25 50 25 50Z"
        fill="currentColor"
        fillOpacity="0.6"
      />
      <path
        d="M15 55C15 55 30 45 45 50C45 50 25 65 20 72C15 79 15 55 15 55Z"
        fill="currentColor"
        fillOpacity="0.4"
      />

      {/* Right petals */}
      <path
        d="M75 50C75 50 65 35 50 35C50 35 65 55 70 65C75 75 75 50 75 50Z"
        fill="currentColor"
        fillOpacity="0.6"
      />
      <path
        d="M85 55C85 55 70 45 55 50C55 50 75 65 80 72C85 79 85 55 85 55Z"
        fill="currentColor"
        fillOpacity="0.4"
      />

      {/* Base */}
      <ellipse
        cx="50"
        cy="82"
        rx="20"
        ry="5"
        fill="currentColor"
        fillOpacity="0.3"
      />
    </svg>
  );
}

