import { ButtonHTMLAttributes, useContext } from "react";
import SvgLogoGuidedao from "./assets/logo.icon";
import { ThemeContext } from "@/pages/_app";

interface Props {
  title: string;
}

export const Header = (props: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`flex items-center justify-between h-[60px] lg:h-[68px] ${
          theme === "light" && "bg-black"
        }`}
      >
        <div className="flex items-end">
          <div className="pr-6">
            <SvgLogoGuidedao />
          </div>
          <div className="hidden lg:block text-[15px] relative top-[1px] leading-[20px] border-l border-solid border-day-150 uppercase pl-6">
            {props.title}
          </div>
        </div>
      </div>
    </>
  );
};
