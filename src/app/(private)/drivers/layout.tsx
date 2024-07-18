
export default function DriversLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen dark:bg-gray-800 dark:text-white">
      {children}
    </div>
  );
}