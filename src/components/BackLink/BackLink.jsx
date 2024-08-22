import { PiArrowLeft } from "react-icons/pi";
import { Link } from "react-router-dom";
import css from "./BackLink.module.css";

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={css.link}>
      <PiArrowLeft size="20" />
      {children}
    </Link>
  );
};
