import React from "react";
import { Link } from "react-router-dom";

enum ButtonType {
  Button = "button",
  Submit = "submit",
  Link = "link",
}

interface ButtonProps {
  type?: ButtonType;
  className?: string;
  children: React.ReactNode;
  href?: string;
}

const Button = ({ type, className, children, href }: ButtonProps) => {
  const buttonStyle =
    "px-6 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-all shadow-lg hover:shadow-sm";
  switch (type) {
    case ButtonType.Link:
      return (
        <Link to={href || "#"} className={`${buttonStyle} ${className}`}>
          {children}
        </Link>
      );
    case ButtonType.Submit:
      return (
        <button type="submit" className={`${buttonStyle} ${className}`}>
          {children}
        </button>
      );

    case ButtonType.Button:
      return (
        <button className={`${buttonStyle} ${className}`}>{children}</button>
      );
    default:
      return (
        <button className={`${buttonStyle} ${className}`}>{children}</button>
      );
  }
};

export default Button;
