import { Slot } from "@/@Types/Machine/Slot/Slot"
import { SlotRender } from "../Slot/Slot"
import { Button } from "@/Components/Shared/Buttons/Button"
export function Build({ Items, Slots }: { Items: Slot[], Slots: number }) {
      const Sort: number[] = []
      for (let i = 1; i <= Slots; i++) {
            Sort[i - 1] = i
      }
      return <div className={`bg-build relative max-w-300 w-full h-screen overflow-hidden border-10 border-b-0 border-solid border-border  `}>
            <div className={`overflow-y-scroll w-full h-[calc(100%-(var(--spacing)*20))]`}>
                  <div className={`${Sort.length > 4 ? "grid grid-cols-4 justify-items-center items-center gap-15" : "flex justify-between items-center"} w-full h-full p-10`}>
                        {
                              Sort.map((Item, Index) => {
                                    return <SlotRender key={Index} />
                              })}
                  </div>
            </div> <Button Label="Spin" className={`w-full h-20 absolute left-0 bottom-0 bg-red-700 hover:bg-red-600 text-text-menu shadow-red-700 hover:shadow-red-600`} />
      </div>

}