"use client";
import { Slot } from "@/@Types/Machine/Slot/Slot";
import { Build } from "@/Components/Machine/Build/Build";
import { Menu } from "@/Components/Menu/Menu";
import { useRef, useState } from "react";
export default function Page() {
  const [Slots, SetSlots] = useState<number>(1);
  const [Items, SetItems] = useState<Slot[]>([]);
  const [Sort, SetSort] = useState<Slot[]>([]);
  const Repeat = useRef<boolean>(false);
  return (
    <div className="w-screen h-screen flex items-center">
      <Menu
        Repeat={Repeat}
        Sort={Sort}
        Items={Items}
        Slots={Slots}
        SetSlots={SetSlots}
        SetItems={SetItems}
      />
      <Build
        Repeat={Repeat}
        Sort={Sort}
        SetSort={SetSort}
        Slots={Slots}
        Items={Items}
      />
    </div>
  );
}
