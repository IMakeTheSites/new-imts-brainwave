import { Link } from "react-router-dom";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, to, onClick, children, px, white, ...rest }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const content = (
    <>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </>
  );

  // `to` = page inside this site (client-side navigation), `href` = anything else
  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
};

export default Button;
