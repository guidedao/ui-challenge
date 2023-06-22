import SvgNightTheme from "./assets/night-theme.icon";
import SvgLightTheme from "./assets/light-theme.icon";

export const Footer = () => {
  return (
    <div className="h-[60px] ">
      <div className="mt-20 pt-10 pb-10 text-day-350 border-t border-solid border-day-350 flex items-start justify-between">
        <div>©2023 BALAJI WAS RIGHT</div>
        <div className="flex items-center">
          <div className="pr-4">
            <SvgLightTheme />
          </div>
          <div className="pl-4 border-l border-solid border-day-350">
            <SvgNightTheme />
          </div>
        </div>
      </div>
    </div>
  );
};
