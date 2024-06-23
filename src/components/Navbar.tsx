import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import CalendarIcon from "/calendar.svg";
import EstimateIcon from "/estimate.svg";

const Navbar = () => {
  return (
    <nav className="w-full h-[72px] border border-black flex items-center justify-between px-[5%]">
      <Link to="/">
        <Logo type="header" />
      </Link>
      <ul className="flex gap-6 text-custom-light-green text-sm">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "relative group text-custom-light-green"
              : "relative group"
          }>
          <li className="nav-item">
            About us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-custom-light-green transition-all duration-500 group-hover:w-full group-[&.text-custom-light-green]:w-full"></span>
          </li>
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "relative group text-custom-light-green"
              : "relative group"
          }>
          <li className="nav-item">
            Services
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-custom-light-green transition-all duration-500 group-hover:w-full group-[&.text-custom-light-green]:w-full"></span>
          </li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "relative group text-custom-light-green"
              : "relative group"
          }>
          <li className="nav-item">
            Contact us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-custom-light-green transition-all duration-500 group-hover:w-full group-[&.text-custom-light-green]:w-full"></span>
          </li>
        </NavLink>
        <NavLink
          to="/join"
          className={({ isActive }) =>
            isActive
              ? "relative group text-custom-light-green"
              : "relative group"
          }>
          <li className="nav-item">
            Join us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-custom-light-green transition-all duration-500 group-hover:w-full group-[&.text-custom-light-green]:w-full"></span>
          </li>
        </NavLink>
        <NavLink
          to="/request-appointment"
          className={({ isActive }) =>
            isActive
              ? "relative group text-custom-light-green"
              : "relative group"
          }>
          <li className="flex gap-2 nav-item">
            <img src={CalendarIcon} alt="" />
            Request appointment
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-custom-light-green transition-all duration-500 group-hover:w-full group-[&.text-custom-light-green]:w-full"></span>
          </li>
        </NavLink>
        <NavLink
          to="/get-estimate"
          className={({ isActive }) =>
            isActive
              ? "relative group text-custom-light-green"
              : "relative group"
          }>
          <li className="flex gap-2 nav-item">
            <img src={EstimateIcon} alt="" />
            Get an estimate
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-custom-light-green transition-all duration-500 group-hover:w-full group-[&.text-custom-light-green]:w-full"></span>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
