"use client";
import { Slot } from "@/@Types/Machine/Slot/Slot";
import { SlotRender } from "../Slot/Slot";
import { Button } from "@/Components/Shared/Buttons/Button";
import { Dispatch, RefObject, SetStateAction, useRef } from "react";
import { Spin } from "@/Lib/Machine/Spin";
import { FaAngleLeft } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
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
  const Build = useRef<HTMLDivElement>(null);
  const Open = useRef<HTMLButtonElement>(null);
  return (
    <>
      <div
        className={`@container/build bg-build lg:relative fixed lg:max-w-3/5 xl:max-w-2/3 w-full h-screen overflow-x-hidden border-10 border-b-0 border-solid border-border lg:transition-none lg:duration-0 transition-all ease-in duration-400 lg:translate-x-0 translate-x-full`}
        ref={Build}
      >
        <div
          className={`overflow-y-scroll w-full h-[calc(100%-(var(--spacing)*20))]`}
        >
          <div
            className={`${SlotsNum.length > 4 ? "grid @5xl/build:grid-cols-4  @3xl/build:grid-cols-3  @xl/build:grid-cols-2 justify-items-center" : "flex justify-center @6xl/build:gap-x-20 @5xl/build:gap-x-15 flex-wrap"}  w-full h-full gap-15 items-center overflow-x-hidden p-5`}
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
        <Button
          className="lg:hidden block absolute w-9 h-9 right-0 top-0 p-0 text-close hover:text-close-bg bg-close-bg rounded-full hover:bg-close shadow-none transition-all ease-in"
          onClick={(e) => {
            if (!Build.current || !Open.current) return;
            Open.current.classList.toggle("right-0");
            Open.current.classList.toggle("right-full");
            Build.current.classList.toggle("translate-x-full");
          }}
          Icon={<IoMdCloseCircle className="text-4xl" />}
        />
      </div>
      <Button
        className="lg:hidden block fixed right-0 md:h-40 sm:h-30 h-20 rounded-l-2xl transition-all ease-in duration-400 "
        onClick={() => {
          if (!Build.current || !Open.current) return;
          Open.current.classList.toggle("right-0");
          Open.current.classList.toggle("right-full");
          Build.current.classList.toggle("translate-x-full");
        }}
        ref={Open}
        Icon={<FaAngleLeft />}
      />
    </>
  );
}
