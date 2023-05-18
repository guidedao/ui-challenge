import SvgLogoGuidedao from "./assets/logo.icon";

export const Header = () => {
  return (
    <>
      <div className="flex items-end">
        <div className="pr-6">
          <SvgLogoGuidedao />
        </div>
        <div className="hidden lg:block text-[15px] leading-[20px] border-l border-solid border-day-150 uppercase pl-6">
          Sandbox
        </div>
      </div>
    </>
  );
};
