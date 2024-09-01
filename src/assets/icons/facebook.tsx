import { IconProps } from "./props-interface";

const FacebookIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="45"
      height="74"
      viewBox="0 0 45 74"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      className={className}
    >
      <path d="M26.645 42.6953V72H13.1834V42.6953H2V30.8129H13.1834V26.4896C13.1834 10.4393 19.8883 2 34.0747 2C38.4238 2 39.5111 2.69896 41.8928 3.26849V15.0215C39.2263 14.5555 38.4756 14.2966 35.7056 14.2966C32.4179 14.2966 30.6575 15.2286 29.0525 17.0666C27.4475 18.9046 26.645 22.0888 26.645 26.645V30.8388H41.8928L37.8025 42.7212H26.645V42.6953Z" />
    </svg>
  );
};

export default FacebookIcon;