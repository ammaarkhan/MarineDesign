import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  type?: "button" | "submit" | "link";
  className?: string;
  children: React.ReactNode;
  href?: string;
}

const buttonStyle =
  "px-6 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-all shadow-lg hover:shadow-sm";

const Button = ({ type, className, children, href }: ButtonProps) => {
  switch (type) {
    case "link":
      return (
        <Link to={href || "#"} className={`${buttonStyle} ${className}`}>
          {children}
        </Link>
      );
    case "submit":
      return (
        <button type="submit" className={`${buttonStyle} ${className}`}>
          {children}
        </button>
      );

    default:
      return (
        <button className={`${buttonStyle} ${className}`}>{children}</button>
      );
  }
};

export default Button;
