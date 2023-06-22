import { ElementProps } from "@/types/common";

const SvgLightTheme = (props: ElementProps) => (
  <svg
    width={20}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 .001h2v4H9v-4ZM7 5.001h6v1h1v1h1v6h-1v1h-1v1H7v-1H6v-1H5v-6h1v-1h1v-1ZM11 16.001H9v4h2v-4ZM4 9.001v2H0v-2h4ZM20 11.001v-2h-4v2h4ZM18 2.001v2h-2v-2h2ZM18 18.001v-2h-2v2h2ZM4 16.001v2H2v-2h2ZM4 4.001v-2H2v2h2Z"
      fill="#302A2A"
    />
  </svg>
);
export default SvgLightTheme;
