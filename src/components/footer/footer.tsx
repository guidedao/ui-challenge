import SvgNightTheme from "./assets/night-theme.icon";
import SvgLightTheme from "./assets/light-theme.icon";
import { useTheme } from "next-themes";

export const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-[60px] ">
      <div className="mt-20 pt-10 pb-10 text-350 border-t border-solid border-350 flex items-start justify-between">
        <div>©2023 BALAJI WAS RIGHT</div>
        <div className="flex items-center">
          <div
            onClick={() => setTheme("light")}
            className="pr-4 cursor-pointer"
          >
            <SvgLightTheme fill={theme === "light" ? "#302A2A" : "#FFFFFF"} />
          </div>
          <div
            onClick={() => setTheme("dark")}
            className="pl-4 border-l border-solid border-350 cursor-pointer"
          >
            <SvgNightTheme fill={theme === "light" ? "#302A2A" : "#FFFFFF"} />
          </div>
        </div>
      </div>
    </div>
  );
};
