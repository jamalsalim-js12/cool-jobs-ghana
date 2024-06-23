import Logo from "../Logo";
import InstagramLogo from "/instagram.svg";
import FacebookLogo from "/facebook.svg";
import TwitterLogo from "/twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-custom-deep-green h-60 flex justify-around items-center pr-[10%]">
      {/* Logo */}
      <div className="flex flex-col gap-6">
        <Logo type="footer" />
        <p className="text-sm text-custom-light-gray">
          Copyright CoolJob Ghana
        </p>
      </div>

      {/* Socials */}
      <div className="flex flex-col gap-6">
        <h3 className="text-custom-light-gray text-xl font-semibold">
          Connect with us
        </h3>
        <div className="flex gap-8">
          <img src={InstagramLogo} alt="instagram logo" />
          <img src={FacebookLogo} alt="facebook logo" />
          <img src={TwitterLogo} alt="twitter logo" />
        </div>
      </div>

      {/* Terms and conditions */}
      <div className="flex flex-col gap-4">
        <p className="text-custom-light-gray text-sm font-normal">
          Work with us
        </p>
        <p className="text-custom-light-gray text-sm font-normal">
          Terms and Conditions
        </p>
        <p className="text-custom-light-gray text-sm font-normal">
          Privacy and Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
