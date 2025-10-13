import { TOMAN_SVG, TOMAN_WHITE_SVG } from "@/config/constants";
import clsx from "clsx";
import * as React from "react";

export interface IToman extends React.InputHTMLAttributes<HTMLInputElement> {
  is_white?: boolean | false;
}

const Toman = React.forwardRef<HTMLInputElement, IToman>(
  ({ className, is_white, type, ...props }, ref) => {
    return (
      <img
        src={is_white ? TOMAN_WHITE_SVG : TOMAN_SVG}
        alt="تومان"
        className={clsx("w-5 p-0 m-0 ", className)}
      />
    );
  }
);

export default Toman;
