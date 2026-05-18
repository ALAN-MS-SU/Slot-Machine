"use client"
import { TbExposureMinus1, TbExposurePlus1 } from "react-icons/tb";
import { Button } from "../Shared/Buttons/Button"
import { Input } from "../Shared/Inputs/Input"
import { Slot } from "@/@Types/Machine/Slot/Slot";
import { Dispatch, SetStateAction } from "react";


export function Menu({ Items, Slots, SetItems, SetSlots }: {
      Items: Slot[], Slots: number, SetSlots: Dispatch<SetStateAction<number>>,
      SetItems: Dispatch<SetStateAction<Slot[]>>
}) {

      return <div className="bg-menu w-2/4 h-full flex flex-col justify-between items-center">
            <h1 className="text-text-menu font-pixel text-4xl text-center">Slot Machine</h1>
            <div className="flex flex-col justify-center items-center w-full">
                  <form onSubmit={(e) => {
                        e.preventDefault()
                        const Value = String(new FormData(e.currentTarget).get("Value"))
                        SetItems([{ ID: Items.length, Value }, ...Items])
                  }}>
                        <Input Label="Value" ID={"Value"} type="text" />
                  </form>
                  <div className="flex flex-col justify-center items-center w-full mt-10">
                        <p className="text-text-menu font-pixel text-2xl">Slots</p>
                        <div className="flex flex-row justify-center items-center w-full gap-5 ">
                              <Button onClick={() => { if (Slots > 1) { SetSlots(Slots - 1) } }} Icon={<TbExposureMinus1 className="w-full" />} className="w-30 h-full" />
                              <Button onClick={() => SetSlots(Slots + 1)} Icon={<TbExposurePlus1 className="w-full" />} className="w-30 h-full" />
                        </div>
                  </div>
            </div>
            <div className="bg-bg h-80 w-full overflow-scroll">
                  <h2 className="text-text-infs font-pixel text-4xl text-center border-b-4 border-solid border-text-infs">Values</h2>
                  <div className={`${Items.length > 6 ? "grid grid-cols-2" : "flex flex-col"}`}>{Items.map((Item, Index) => {
                        return <div key={Index} className="relative">
                              <p className="text-text-infs font-pixel text-3xl text-center border-4 border-solid border-text-infs border-t-0 p-1 overflow-hidden">{Item.Value}</p>
                        </div>
                  })}</div>
            </div>
      </div>
}