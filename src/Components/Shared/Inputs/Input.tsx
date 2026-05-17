"use client"
import { InputHTMLAttributes } from "react";

export function Input({ ID, Label, className, ...Props }: { ID: string, Label: string } & Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "name">) {

      return <div className="flex justify-center items-center gap-5">
            <label htmlFor={ID} className="text-text-menu font-pixel text-2xl">{Label}</label>
            <input id={ID} name={ID} className={`bg-input text-text-input text-center outline-none p-1 shadow-lg shadow-input-shadow text-lg ${className ? className : ""}`} {...Props} />
      </div>
}