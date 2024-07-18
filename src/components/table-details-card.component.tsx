interface Props {
  th: string[];
  data: React.ReactNode[][];
}

export const TableDetailsCard: React.FC<Props> = ({ th, data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-900 border-x border-gray-900">
      <thead className="bg-blue-950 text-white">
        <tr>
          {th.map((header, index) => (
            <th
              key={index}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider border-r border-gray-900"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 [&_tr:nth-child(odd)]:bg-gray-100 [&_tr:nth-child(even)]:bg-gray-400">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="px-6 py-4 whitespace-nowrap">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
