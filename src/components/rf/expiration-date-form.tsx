import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface expirationDateProps {
  productLocationId: string;
}

const ExpirationDateForm = ({ productLocationId }: expirationDateProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [daysSinceManufacture, setDaysSinceManufacture] = useState(0);
  const [remainingDays, setRemainingDays] = useState(0);
  const [isButtonDisable, setIsButtonDisable] = useState(false);
  const [usefulLifeDays, setUsefulLifeDays] = useState(0);
  const [lifePercentage, setLifePercentage] = useState(0);
  const expirationDateRef = useRef<HTMLInputElement>(null);
  const manufactureDateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkExpirationDate = () => {
      if (expirationDateRef.current && expirationDateRef.current.value) {
        setIsButtonDisable(true);
      } else {
        setIsButtonDisable(false);
      }
    };

    const currentRef = expirationDateRef.current;
    const currentManufactureRef = manufactureDateRef.current;
    if (currentRef && currentManufactureRef) {
      currentRef.addEventListener("input", checkExpirationDate);
      currentManufactureRef.addEventListener("input", checkExpirationDate);
    }

    return () => {
      if (currentRef && currentManufactureRef) {
        currentManufactureRef.removeEventListener("input", checkExpirationDate);
        currentRef.removeEventListener("input", checkExpirationDate);
      }
    };
  }, []);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData(e.currentTarget);
    const expirationDate = new Date(formData.get("expirationDate") as string);

    const manufactureDate = new Date(formData.get("manufactureDate") as string);
    const today = new Date();

    // Calcular los días transcurridos desde la fabricación hasta hoy
    const daysSinceManufacture = Math.floor(
      (today.getTime() - manufactureDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    setDaysSinceManufacture(daysSinceManufacture);

    // Calcular los días restantes de consumo
    const remainingDays = Math.floor(
      (expirationDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
    setRemainingDays(remainingDays);

    // Calcular los días útiles
    const usefulLifeDays = Math.floor(
      (expirationDate.getTime() - manufactureDate.getTime()) /
        (1000 * 60 * 60 * 24)
    );
    setUsefulLifeDays(usefulLifeDays);

    // Calcular la vida útil en porcentaje
    let lifePercentage: number;
    if (usefulLifeDays < 30) {
      lifePercentage = 94;
    } else if (usefulLifeDays >= 30 && usefulLifeDays <= 39) {
      lifePercentage = 90;
    } else if (usefulLifeDays >= 40 && usefulLifeDays <= 44) {
      lifePercentage = 80;
    } else if (usefulLifeDays >= 45 && usefulLifeDays <= 119) {
      lifePercentage = 70;
    } else if (usefulLifeDays >= 120 && usefulLifeDays <= 179) {
      lifePercentage = 60;
    } else {
      lifePercentage = 50;
    }
    setLifePercentage(lifePercentage);

    const data = {
      expirationDate: expirationDate.toISOString().split("T")[0],
      manufactureDate: manufactureDate.toISOString().split("T")[0],
      usefulLife: usefulLifeDays,
      receptionPercentage: lifePercentage,
      warehouseLocationId: productLocationId,
    };
    console.log(data);
    try {
      setIsSubmitting(true);
      const res = await fetch("/api/products/locations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }

      const result = await res.json();

      toast.success("Fecha de vencimiento guardada", {
        duration: 5000,
        position: "top-center",
      });

      if (lifePercentage >= 70) {
        toast.success(
          `Se puede recibir el producto. Vida útil de ${lifePercentage}%`,
          {
            duration: 4000,
            position: "top-center",
          }
        );
      } else {
        toast.error(
          `No se puede recibir el producto. Vida útil de ${lifePercentage}%`,
          {
            duration: 4000,
            position: "top-center",
          }
        );
      }
    } catch (error: any) {
      toast.error(
        `Error al guardar la fecha de vencimiento: ${error.message}`,
        {
          duration: 4000,
          position: "top-center",
        }
      );
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 12000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mb-10 items-center w-[100%]"
    >
      <Toaster />
      <table className="table-auto mb-2 text-left w-[100%]">
        <tbody>
          <tr className={isSubmitting ? "hidden" : "text-left"}>
            <td className="align-top pe-5 text-right font-semibold">
              Elaboración:
            </td>
            <td className="w-full">
              <input
                type="date"
                name="manufactureDate"
                ref={manufactureDateRef}
                className={
                  isSubmitting
                    ? "w-full rounded dark:text-white text-left dark:bg-slate-600"
                    : "w-full rounded bg-slate-200 dark:text-slate-900 font-medium text-center"
                }
                readOnly={isSubmitting}
                style={{ pointerEvents: isSubmitting ? "none" : "auto" }}
                required
              />
            </td>
          </tr>
          <tr className="text-left">
            <td className="align-top pe-5 text-right font-semibold">
              Vencimiento:
            </td>
            <td className="w-full">
              <input
                type="date"
                name="expirationDate"
                ref={expirationDateRef}
                className={
                  isSubmitting
                    ? "w-full rounded dark:text-white text-left dark:bg-transparent bg-transparent"
                    : "w-full rounded bg-slate-200 dark:text-slate-900 font-medium text-center"
                }
                readOnly={isSubmitting}
                style={{ pointerEvents: isSubmitting ? "none" : "auto" }}
                required
              />
            </td>
          </tr>
          <tr className={isSubmitting ? "text-left" : "hidden"}>
            <td className="align-top pe-5 text-right font-semibold">
              Vida útil:
            </td>
            <td className="w-full">{usefulLifeDays} días</td>
          </tr>
          <tr className={isSubmitting ? "text-left" : "hidden"}>
            <td className="align-top pe-5 text-right font-semibold">
              Recepción:
            </td>
            <td className="w-full">{lifePercentage}%</td>
          </tr>
        </tbody>
      </table>
      {isButtonDisable && (
        <button
          type="submit"
          disabled={isSubmitting}
          className={
            isSubmitting
              ? "w-40 bg-slate-200 text-slate-500 dark:text-slate-200 dark:bg-slate-600 font-medium py-2 px-4 rounded hidden"
              : "bg-primary-100 hover:bg-secundary-100 hover:text-black shadow-lg border border-white hover:border-black shadow-black text-white font-bold py-2 px-4 rounded"
          }
        >
          Guardar
        </button>
      )}
    </form>
  );
};

export default ExpirationDateForm;
