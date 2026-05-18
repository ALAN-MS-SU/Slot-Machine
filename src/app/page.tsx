"use client"
import { Slot } from "@/@Types/Machine/Slot/Slot";
import { Build } from "@/Components/Machine/Build/Build";
import { Menu } from "@/Components/Menu/Menu";
import { useState } from "react";
export default function Page() {
  const [Slots,SetSlots] = useState<number>(1)
  const [Items,SetItems] = useState<Slot[]>([])
  return (
    <div className="w-screen h-screen flex items-center">
      <Menu  Items={Items} Slots={Slots} SetSlots={SetSlots} SetItems={SetItems} />
      <Build Slots={Slots} Items={Items} />
    </div>
  );
}
