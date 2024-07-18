import { useState } from "react";

interface Product {
  name: string;
  code: number;
  ean: number;
  uxc: string;
  cxp: string;
  observation: string;
  productType: number;
  unitOfMeasure: number;
}



export const FormAddProduct = ({handleClose}: {handleClose: () => void}) => {
  const [product, setProduct] = useState<Product>({
    name: "",
    code: 0,
    ean: 0,
    uxc: "",
    cxp: "",
    observation: "",
    productType: 0,
    unitOfMeasure: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  console.log(product)

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Agregar Producto</h2>
      <form  className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-700"
            >
              Código
            </label>
            <input
              type="number"
              id="code"
              name="code"
              value={product.code}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="ean"
              className="block text-sm font-medium text-gray-700"
            >
              EAN
            </label>
            <input
              type="number"
              id="ean"
              name="ean"
              value={product.ean}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="uxc"
              className="block text-sm font-medium text-gray-700"
            >
              UXC
            </label>
            <input
              type="text"
              id="uxc"
              name="uxc"
              value={product.uxc}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="cxp"
              className="block text-sm font-medium text-gray-700"
            >
              CXP
            </label>
            <input
              type="text"
              id="cxp"
              name="cxp"
              value={product.cxp}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="observation"
              className="block text-sm font-medium text-gray-700"
            >
              Observación
            </label>
            <input
              type="text"
              id="observation"
              name="observation"
              value={product.observation}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="productType"
              className="block text-sm font-medium text-gray-700"
            >
              Tipo de Producto
            </label>
            <select
              id="productType"
              name="productType"
              value={product.productType}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value={0}>Seleccione un tipo de producto</option>
              <option value={1}>Tipo 1</option>
              <option value={2}>Tipo 2</option>
              {/* Más opciones según sea necesario */}
            </select>
          </div>
          <div>
            <label
              htmlFor="unitOfMeasure"
              className="block text-sm font-medium text-gray-700"
            >
              Unidad de Medida
            </label>
            <select
              id="unitOfMeasure"
              name="unitOfMeasure"
              value={product.unitOfMeasure}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value={0}>Seleccione una unidad de medida</option>
              <option value={1}>Unidad 1</option>
              <option value={2}>Unidad 2</option>
              {/* Más opciones según sea necesario */}
            </select>
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={handleClose}
            className="py-2 px-4 bg-gray-500 text-white rounded-md shadow-sm hover:bg-gray-600 font-medium"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="py-2 px-4 bg-primary-100 text-white rounded-md shadow-sm hover:bg-secundary-100 hover:text-black font-medium"
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};


