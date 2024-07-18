const columns = [
  { field: "name", headerName: "Conductor" },
  { field: "number_plate", headerName: "N° Placa" },
  { field: "route", headerName: "Ruta" },
  { field: "quantity", headerName: "Cantidad de Pallets" },
  { field: "space", headerName: "Anden" },
  { field: "channel", headerName: "Canal" },
]
const rows = [
  {
    id: 1,
    name: "Jacinto Perez",
    number_plate: "EZI 93B",
    route: "Ruta de ecuador",
    quantity: 29,
    space: "Anden 5",
    channel: "Canal 1",
  },
  {
    id: 2,
    name: "Francisco Perez",
    number_plate: "IJI 93B",
    route: "Norte",
    quantity: 34,
    space: "Anden 5",
    channel: "Canal 1",
  },
  {
    id: 3,
    name: "Pedro Perez",
    number_plate: "AVD 345",
    route: "Sur",
    quantity: 99,
    space: "Anden 5",
    channel: "Canal 1",
  },
];

export const TableDrivers = () => {
  return (
    <table className="w-full text-sm text-left rtl:text-right  dark:text-slate-950">
      <thead className="text-lg  text-center uppercase bg-blue-950 text-white dark:text-gray-300">
        <tr>
          {columns.map((column, index) => (
            <th key={index} scope="col" className="px-6 py-3 ">
              {column.headerName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 [&_tr:nth-child(odd)]:bg-gray-100 [&_tr:nth-child(even)]:bg-gray-400 text-center">
        {rows.map((row, index) => (
          <tr
            key={index}
           
          >
            <th
              scope="row"
                         >
              {row.name}
            </th>
            <td className="px-6 py-4">{row.number_plate}</td>
            <td className="px-6 py-4">{row.route}</td>
            <td className="px-6 py-4">{row.quantity}</td>
            <td className="px-6 py-4 ">{row.space}</td>

            <td className="px-6 py-4">{row.channel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
