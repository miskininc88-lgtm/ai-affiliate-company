export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">
          <h1 className="text-2xl font-bold mb-8">
            AI Affiliate Company
          </h1>

          <nav className="space-y-4">
            <div>📊 Dashboard</div>
            <div>📦 Products</div>
            <div>🕷️ Scraper</div>
            <div>🎨 Creative</div>
            <div>📈 Analytics</div>
            <div>⚙️ Settings</div>
          </nav>
        </aside>

        {/* Content */}
        <section className="flex-1 p-10">
          <h2 className="text-4xl font-bold">
            Dashboard
          </h2>

          <p className="text-gray-500 mt-2">
            Welcome to AI Affiliate Company
          </p>

          <div className="grid grid-cols-4 gap-6 mt-10">

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold">Products</h3>
              <p className="text-4xl mt-3">0</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold">Scraper</h3>
              <p className="text-green-600 text-2xl mt-3">
                Idle
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold">Creative</h3>
              <p className="text-yellow-600 text-2xl mt-3">
                Waiting
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold">Supabase</h3>
              <p className="text-red-600 text-2xl mt-3">
                Offline
              </p>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}