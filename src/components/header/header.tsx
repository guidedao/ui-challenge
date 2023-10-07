import SvgLogoGuidedao from "./assets/logo.icon";
import { useTheme } from "next-themes";

interface Props {
  title: string;
}

export const Header = (props: Props) => {
  const { theme } = useTheme();

  return (
    <>
      <div className="flex items-center justify-between h-[60px] lg:h-[68px]">
        <div className="flex items-end">
          <div className="pr-6">
            <SvgLogoGuidedao
              className="pt-1"
              fill={theme === "light" ? "#302A2A" : "#FFFFFF"}
            />
          </div>
          <div className="hidden lg:block text-[15px] text-00 relative top-[1px] leading-[20px] border-l border-solid border-150 uppercase pl-6">
            {props.title}
          </div>
        </div>
      </div>
    </>
  );
};
