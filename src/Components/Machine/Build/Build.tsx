import { Slot } from "@/@Types/Machine/Slot/Slot"
import { SlotRender } from "../Slot/Slot"
export async function Build() {
      const Items: Slot[] = [
            // { ID: 0, Value: "Verde" },
            // { ID: 1, Value: "Vermelho" },
            // { ID: 2, Value: "Azul" },
            // { ID: 3, Value: "Amarelo" },
            // { ID: 4, Value: "Roxo" },
            // { ID: 5, Value: "Laranja" },
            // { ID: 6, Value: "Rosa" },
            // { ID: 7, Value: "Ciano" },
            // { ID: 8, Value: "Branco" },
            // { ID: 9, Value: "Preto" }
      ];
      return <div className="bg-build p-10 w-full h-full border-10 border-solid border-border">
            <div className={`${Items.length > 5 ? "grid grid-cols-5 justify-items-center items-center" : "flex justify-center items-center"} w-full h-full gap-10`}>
                  {Items.length > 0 ?
                        Items.map(({ ID, Value }, Index) => {
                              return <SlotRender key={Index} Value={Value} ID={ID} />
                        }) : <SlotRender />}
            </div>
      </div>

}