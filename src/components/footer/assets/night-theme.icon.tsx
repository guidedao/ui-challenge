import { ElementProps } from "@/types/common";

const SvgNightTheme = (props: ElementProps) => (
  <svg
    width={15}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 .001H6v1H4v1H2v1H1v2H0v6h1v2h1v1h2v1h2v1h4v-1h2v-1h2v-1h1v-2h-2v1h-3v-1H8v-1H7v-4h1v-1h2v-1h3v1h2v-2h-1v-1h-2v-1h-2v-1Z"
      fill="#302A2A"
      fillOpacity={0.15}
    />
  </svg>
);
export default SvgNightTheme;
