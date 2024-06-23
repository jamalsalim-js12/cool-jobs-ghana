import Logo from "./Logo";
import CalendarIcon from "/calendar.svg";
import EstimateIcon from "/estimate.svg";

const Navbar = () => {
  return (
    <nav className="w-full h-[72px] border border-black flex items-center justify-between px-[5%]">
      <Logo type="header" />
      <ul className="flex gap-6 text-custom-light-green text-sm">
        <li>About us</li>
        <li>Services</li>
        <li>Contact us</li>
        <li>Join us</li>
        <li className="flex gap-2">
          <img src={CalendarIcon} alt="" />
          Request appointment
        </li>
        <li className="flex gap-2">
          <img src={EstimateIcon} alt="" />
          Get an estimate
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
