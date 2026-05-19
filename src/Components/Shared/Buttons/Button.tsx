"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react";
import { IconType } from "react-icons";

export function Button({
  Label,
  Icon,
  className,
  ...Props
}: {
  Label?: string;
  Icon?: React.ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      className={`bg-button cursor-pointer md:text-6xl text-5xl text-button-text font-pixel shadow-lg shadow-button-shadow hover:bg-button-hover hover:shadow-button-hover transition-all ease-in ${className ? className : ""}`}
      {...Props}
    >
      {Icon ? Icon : Label}
    </button>
  );
}
