"use client"
import { Slot } from "@/@Types/Machine/Slot/Slot"
import Block from "@/Assets/Images/Block.gif"
import Image from "next/image"
export function SlotRender({ID,Value}:Partial<Slot>) {
      
      return <div className="bg-bg border-5 border-solid border-border-slot min-w-60 min-h-60 max-w-80 max-h-80 flex justify-center items-center rounded-lg">
            <span className="text-6xl"><Image src={Block} alt="" /></span>
      </div>
}