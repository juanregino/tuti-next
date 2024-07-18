


interface DetailItem {
  label: string;
  value: React.ReactNode;
}

interface CardDetailsProps {
  title: string;
  details: DetailItem[];
  actions?: React.ReactNode;
}

export const CardDetailsIm: React.FC<CardDetailsProps> = ({
  title,
  details,
  actions,
}) => {

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-96">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Detalles de la tienda {title}</h2>
      </div>
      <div>
        <h2 className="text-center text-xl font-bold">Ubicación</h2>
      </div>
      <div className="space-y-4">
        {details.map((detail, index) => (
          <div
            key={index}
            className={`flex justify-between items-center ${
              index !== details.length - 1 ? "border-b-2 border-gray-300" : ""
            }`}
          >
            <span className="font-medium">{detail.label}:</span>
            <div className="flex items-center">
              <span>{detail.value}</span>
            </div>
          </div>
        ))}
        {actions && (
          <div className="flex justify-between items-center">
            <span className="font-medium"></span>
            <div>{actions}</div>
          </div>
        )}
      </div>
    </div>
  );
};
