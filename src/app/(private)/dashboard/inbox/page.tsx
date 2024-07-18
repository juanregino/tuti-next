 import { TableInbox } from "@/src/components/inbox/table-inbox.component";

export default function DataTable() {
  return (
    <div className="h-4/5 w-full">
      <h1 className="font-semibold w-full text-center my-4">
        Resumen de productos escaneados
      </h1>

      <TableInbox />
    </div>
  );
}
