
import { TableDrivers } from "@/src/components/drivers/table-drivers.component";
import { Timer } from "@/src/components/drivers/timer.component";


export const metadata = {
 title: 'Conductores-Despacho',
 description: 'Conductores-Despacho',

};

export default function DriversPage() {
 
  return (
    <div >
      <div className="flex  flex-wrap justify-between items-center mb-4 px-10 pt-5">
        <h1 className="text-3xl font-bold mb-2">Despachos</h1>
       <Timer />
      </div>

      <div className=" overflow-x-auto shadow-md sm:rounded-lg">
        <TableDrivers />
      </div>
    </div>
  );
}
