"use client";
import { Slot } from "@/@Types/Machine/Slot/Slot";
import { SlotRender } from "../Slot/Slot";
import { Button } from "@/Components/Shared/Buttons/Button";
import { Dispatch, RefObject, SetStateAction, useState } from "react";
import { Spin } from "@/Lib/Machine/Spin";
export function Build({
  Repeat,
  Items,
  Slots,
  Sort,
  SetSort,
}: {
  Repeat: RefObject<boolean>;
  Items: Slot[];
  Slots: number;
  Sort: Slot[];
  SetSort: Dispatch<SetStateAction<Slot[]>>;
}) {
  const SlotsNum = Array.from({ length: Slots }, (Num, Index) => Index);
  return (
    <div
      className={`bg-build relative max-w-300 w-full h-screen overflow-x-hidden border-10 border-b-0 border-solid border-border`}
    >
      <div
        className={`overflow-y-scroll w-full h-[calc(100%-(var(--spacing)*20))]`}
      >
        <div
          className={`${SlotsNum.length > 4 ? "grid grid-cols-4 justify-items-center items-center" : "flex justify-center items-center gap-x-20"} w-full h-full p-10 gap-15 overflow-x-hidden`}
        >
          {Sort.length > 0
            ? Sort.map((Item, Index) => {
                return (
                  <SlotRender
                    Time={0.5 * Index}
                    Value={Item ? Item.Value : "Empty"}
                    key={Index}
                  />
                );
              })
            : SlotsNum.map((Num, Index) => {
                return <SlotRender key={Index} />;
              })}
        </div>
      </div>{" "}
      {Sort.length > 0 ? (
        <Button
          onClick={() => {
            SetSort([]);
          }}
          Label="Reset"
          className={`w-full h-20 absolute left-0 bottom-0 bg-spin hover:bg-spin-hover text-text-menu shadow-spin hover:shadow-spin-hover`}
        />
      ) : (
        <Button
          onClick={() => {
            SetSort(Spin({ Items, Slots, Repeat: Repeat.current }));
            return;
          }}
          Label="Spin"
          className={`w-full h-20 absolute left-0 bottom-0 bg-spin hover:bg-spin-hover text-text-menu shadow-spin hover:shadow-spin-hover`}
        />
      )}
    </div>
  );
}
