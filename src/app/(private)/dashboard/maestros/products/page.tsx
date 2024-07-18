import { TableProducts } from "@/src/components/maestros/products/table-products.component";

export default function ProductsPage() {
  return (
    <div>
      <h1 className="font-semibold text-2xl text-center my-4">
        Productos
      </h1>
      
      <TableProducts />
    </div>
  );
}