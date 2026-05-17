"use client"
import { TbExposureMinus1, TbExposurePlus1 } from "react-icons/tb";
import { Button } from "../Shared/Buttons/Button"
import { Input } from "../Shared/Inputs/Input"

export function Menu() {
      return <div className="bg-menu w-2/4 h-full px-5">
            <h1 className="text-text-menu font-pixel text-4xl text-center">Slot Machine</h1>
            <div className="flex flex-col justify-center items-center w-full">
                  <Input Label="Value" ID={"Value"} type="text" />
                  <div className="flex flex-col justify-center items-center w-full mt-10">
                        <p className="text-text-menu font-pixel text-2xl">Slots</p>
                        <div className="flex flex-row justify-center items-center w-full gap-5 ">
                              <Button Icon={<TbExposureMinus1 className="w-full" />} className="w-30 h-full" />
                              <Button Icon={<TbExposurePlus1 className="w-full" />} className="w-30 h-full" />
                        </div>
                  </div>
            </div>
      </div>
}