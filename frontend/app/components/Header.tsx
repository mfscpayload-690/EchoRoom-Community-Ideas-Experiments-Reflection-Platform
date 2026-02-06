export default function Header() {
  return (
    /*<header className="bg-white border-b p-4">
      <h1 className="text-lg font-semibold">Dashboard</h1>
    </header>*/

    <header className="bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-indigo-600">EchoRoom</h1>
            <p className="text-sm text-gray-600">
              Ideas • Experiments • Reflection
            </p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
            OSQ Project
          </span>
        </div>
      </header>
  );
}
