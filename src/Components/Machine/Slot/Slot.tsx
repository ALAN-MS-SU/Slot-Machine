"use client";
import { Slot } from "@/@Types/Machine/Slot/Slot";
import Block from "@/Assets/Images/Block.gif";
import Image from "next/image";
export function SlotRender({
  Value,
  Time = 0,
}: Pick<Partial<Slot>, "Value"> & { Time?: number }) {
  return (
    <div className="bg-bg border-5 border-solid border-border-slot min-w-50 w-50 h-50 max-h-50 flex justify-center items-center rounded-lg overflow-hidden relative">
      <Image
        loading="eager"
        style={{ animationDelay: `${Time}s` }}
        className={`${Value && "Exit"} absolute`}
        src={Block}
        alt="Block"
      />
      {Value && (
        <p
          style={{ animationDelay: `${Time}s` }}
          className="text-text-infs font-pixel text-3xl flex justify-center items-center w-full h-full Enter"
        >
          {Value.length > 10
            ? `${Value.slice(0, 9)}...`
            : Value}
        </p>
      )}
    </div>
  );
}
