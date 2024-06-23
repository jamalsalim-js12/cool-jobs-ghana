import HeaderLogo from "/public/header-logo.svg";
import FooterLogo from "/public/footer-logo.svg";

type TLogoIconProps = {
  type: "header" | "footer";
};
const Logo = ({ type }: TLogoIconProps) => {
  return (
    <div className="flex h-fit w-fit justify-center items-center">
      {type === "header" ? (
        <img src={HeaderLogo} alt="" />
      ) : (
        <img src={FooterLogo} alt="" />
      )}
    </div>
  );
};

export default Logo;
