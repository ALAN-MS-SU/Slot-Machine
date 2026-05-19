import { Slot } from "@/@Types/Machine/Slot/Slot";

export function Spin({
  Items,
  Slots,
  Repeat,
}: {
  Items: Slot[];
  Slots: number;
  Repeat: boolean;
}): Slot[] {
  const Data: Slot[] = [];
  if (!Repeat) {
    for (let i = 0; i + 1 <= Slots; i++) {
      const Random = Math.floor(Math.random() * Items.length);
      Data[i] = Items[Random];
      Items = Items.filter((Item) => Item.ID !== Items[Random].ID);
    }
    return Data;
  }
  for (let i = 0; i + 1 <= Slots; i++) {
    const Random = Math.floor(Math.random() * Items.length);
    Data[i] = Items[Random];
  }
  return Data;
}
