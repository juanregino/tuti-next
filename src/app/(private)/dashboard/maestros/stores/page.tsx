import { TableStores } from "@/src/components/maestros/stores/table-stores.component";

export default function StoresPage() {
  return (
    <div>
      <h1 className="font-semibold text-2xl text-center my-4">
        Tiendas
      </h1>
      <TableStores />
    </div>
  );
}