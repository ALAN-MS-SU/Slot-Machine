"use client"
import { Slot } from "@/@Types/Machine/Slot/Slot"
import Block from "@/Assets/Images/Block.gif"
import Image from "next/image"
export function SlotRender({ID,Value}:Partial<Slot>) {
      
      return <div className="bg-bg border-5 border-solid border-border-slot w-50 h-50 flex justify-center items-center rounded-lg">
            <Image loading="eager" src={Block} alt="" />
      </div>
}