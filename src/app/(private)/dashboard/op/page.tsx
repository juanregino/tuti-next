
import { DragAndDrop } from "@/src/components/op/drag-and-drop.component";
import { TableOp } from "@/src/components/op/table-op.component";

export default function OrderProductsPage() {
  return( 
  <div className="h-4/5 w-full">
      <h1 className="font-semibold w-full text-center my-4">Ordenes de Pedidos</h1>
       <DragAndDrop />
        <TableOp />

    </div>
  );
}