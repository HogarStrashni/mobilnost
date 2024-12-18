import { IconProps } from "./props-interface";

const TwitterIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="72"
      height="65"
      viewBox="0 0 72 65"
      fill="none"
      stroke="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.6891 0H0L26.9014 35.3477L1.72089 65H13.355L32.3999 42.5731L49.3109 64.794H72L44.317 28.4191L44.366 28.4818L68.2015 0.412927H56.5674L38.8667 21.2573L22.6891 0ZM12.524 6.19052H19.5874L59.476 58.603H52.4126L12.524 6.19052Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TwitterIcon;
