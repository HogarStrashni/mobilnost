import { IconProps } from "./props-interface";

const TwitterIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
      baseProfile="basic"
      className={className}
    >
      <linearGradient
        id="U8Yg0Q5gzpRbQDBSnSCfPa"
        x1="4.338"
        x2="38.984"
        y1="-10.056"
        y2="49.954"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4b4b4b" />
        <stop offset=".247" stopColor="#3e3e3e" />
        <stop offset=".686" stopColor="#2b2b2b" />
        <stop offset="1" stopColor="#252525" />
      </linearGradient>
      <path
        fill="url(#U8Yg0Q5gzpRbQDBSnSCfPa)"
        d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28	C42,40.209,40.209,42,38,42z"
      />
      <path
        fill="#fff"
        d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
      />
      <polygon
        fill="#fff"
        points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
      />
      <polygon
        fill="#fff"
        points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
      />
    </svg>
  );
};

export default TwitterIcon;