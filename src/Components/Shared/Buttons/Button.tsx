"use client";

import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

export function Button({
  Label,
  Icon,
  className,
  ...Props
}: {
  Label?: string;
  Icon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-button cursor-pointer text-6xl text-button-text font-pixel shadow-lg shadow-button-shadow hover:bg-button-hover hover:shadow-button-hover transition-all ease-in ${className ? className : ""}`}
      {...Props}
    >
      {Icon ? Icon : Label}
    </button>
  );
}
