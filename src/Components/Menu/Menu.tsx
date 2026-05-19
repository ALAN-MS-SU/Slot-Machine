"use client";
import { TbExposureMinus1, TbExposurePlus1 } from "react-icons/tb";
import { Button } from "../Shared/Buttons/Button";
import { Input } from "../Shared/Inputs/Input";
import { Slot } from "@/@Types/Machine/Slot/Slot";
import { Dispatch, RefObject, SetStateAction } from "react";
import { FaTrash } from "react-icons/fa";
export function Menu({
  Repeat,
  Items,
  Slots,
  SetItems,
  SetSlots,
  Sort,
}: {
  Repeat: RefObject<boolean>;
  Items: Slot[];
  Slots: number;
  SetSlots: Dispatch<SetStateAction<number>>;
  SetItems: Dispatch<SetStateAction<Slot[]>>;
  Sort: Slot[];
}) {
  return (
    <div className="bg-menu w-full lg:max-w-2/5 xl:max-w-1/3 h-full flex flex-col justify-between items-center">
      <h1 className="text-text-menu font-pixel text-4xl text-center">
        Slot Machine
      </h1>
      {Sort.length < 1 && (
        <div className="flex flex-col justify-center items-center w-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const Value = String(new FormData(e.currentTarget).get("Value"));
              if (Value == "") return;
              document.querySelector<HTMLInputElement>("#Value")!.value = "";
              SetItems([{ ID: Items.length, Value }, ...Items]);
            }}
          >
            <Input Label="Value" ID={"Value"} type="text" />
          </form>
          <div className="flex flex-col justify-center items-center w-full mt-0 md:mt-10">
            <p className="text-text-menu font-pixel text-2xl">Slots</p>
            <div className="flex flex-row justify-center items-center w-full gap-5 ">
              <Button
                onClick={() => {
                  if (Slots > 1) {
                    SetSlots(Slots - 1);
                  }
                }}
                Icon={<TbExposureMinus1 className="w-full" />}
                className="md:w-30 sm:w-25 w-20 h-full"
              />
              <Button
                onClick={() => SetSlots(Slots + 1)}
                Icon={<TbExposurePlus1 className="w-full" />}
                className="md:w-30 sm:w-25 w-20 h-full"
              />
            </div>
            <Input
              ID="Repeat"
              type="checkbox"
              defaultChecked={Repeat.current}
              Label="Repeat"
              onChange={() => {
                Repeat.current = Repeat.current ? false : true;
              }}
            />
          </div>
        </div>
      )}
      <div
        className={`bg-bg ${Sort.length < 1 ? "h-80" : "h-200"} w-full overflow-scroll`}
      >
        <h2 className="text-text-infs font-pixel text-4xl text-center border-b-4 border-solid border-text-infs">
          Values
        </h2>
        <div
          className={`${Items.length > 6 ? "grid sm:grid-cols-2 grid-cols-1" : "flex flex-col"}`}
        >
          {Items.map((Item, Index) => {
            return (
              <div
                key={Index}
                className="relative border-text-infs border-t-0 overflow-hidden"
              >
                <p className="text-text-infs font-pixel md:text-3xl lg:text-lg xl:text-xl text-xl text-center border-4 border-solid p-1">
                  {Item.Value.length > 12 ? `${Item.Value.slice(0,11)}...` : Item.Value }
                </p>
                <Button
                  className="absolute w-9 h-9 top-1 right-1 p-0 text-close hover:text-button bg-transparent rounded-full hover:bg-transparent shadow-none transition-all ease-in"
                  onClick={() => {
                    SetItems(Items.filter((FItem) => FItem.ID != Item.ID));
                  }}
                  Icon={<FaTrash className=" text-2xl" />}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
