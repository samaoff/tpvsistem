
export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-700">Bienvenido al Dashboard</h1>
      <div className="grid gap-6 mt-6 md:grid-cols-3">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Usuarios Activos</h3>
          <p className="text-2xl font-bold mt-2">1,256</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Ventas</h3>
          <p className="text-2xl font-bold mt-2">$12,345</p>
        </div>
        <div className="bg-purple-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Proyectos</h3>
          <p className="text-2xl font-bold mt-2">42</p>
        </div>

        
      </div>
    </div>
  );
}
