import { useState } from "react";

interface Store {
  name: string;
  code: number;
  address: string;
  city: string;
  observation: string;
  priority: string;
  ruc: number;
  zoneId: number;
}

interface FormAddStoreProps {
  
  onSubmit: (store: Store) => void;
  zones: { id: number; name: string }[];
  handleClose: () => void;
}

export const FormAddStore: React.FC<FormAddStoreProps> = ({
  
  onSubmit,
  zones,
  handleClose,
}) => {
  const [store, setStore] = useState<Store>({
    name: "",
    code: 0,
    address: "",
    city: "",
    observation: "",
    priority: "",
    ruc: 0,
    zoneId: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setStore((prevStore) => ({
      ...prevStore,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(store);
    handleClose(); // Cerrar el modal después de enviar el store
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Agregar Tienda</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
              value={store.name}
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
              value={store.code}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Dirección
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={store.address}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              Ciudad
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={store.city}
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
              value={store.observation}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-700"
            >
              Prioridad
            </label>
            <input
              type="text"
              id="priority"
              name="priority"
              value={store.priority}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="ruc"
              className="block text-sm font-medium text-gray-700"
            >
              RUC
            </label>
            <input
              type="number"
              id="ruc"
              name="ruc"
              value={store.ruc}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="zoneId"
              className="block text-sm font-medium text-gray-700"
            >
              Zona
            </label>
            <select
              id="zoneId"
              name="zoneId"
              value={store.zoneId}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value={0}>Seleccione una zona</option>
              {zones.map((zone) => (
                <option key={zone.id} value={zone.id}>
                  {zone.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={handleClose}
            className="py-2 px-4 bg-gray-500 text-white rounded-md shadow-sm hover:bg-gray-600"
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


