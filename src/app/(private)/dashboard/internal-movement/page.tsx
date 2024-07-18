import { TableInternalMovement } from "@/src/components/internal-movement/table-internal-movement.component";


export default function InternalMovementPage() {
  return (
    <div>
      <h1 className="font-semibold text-2xl text-center my-4">
        Movimiento Interno
      </h1>
     <TableInternalMovement />
    </div>
  );
}