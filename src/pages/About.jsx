export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl text-center bg-white p-10 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to <span className="text-indigo-600">NovaStack</span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          NovaStack is built to empower developers, innovators, and creators.
          Whether you're crafting your next big idea or scaling an existing
          product, NovaStack delivers a seamless and powerful development
          ecosystem.
          <br />
          <br />
          Our mission is simple: <strong>build tools that make building easier</strong>.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 bg-indigo-50 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <h3 className="font-semibold text-indigo-700 text-xl">Fast</h3>
            <p className="text-gray-600 mt-1 text-sm">
              Optimized workflows for rapid development.
            </p>
          </div>

          <div className="p-5 bg-indigo-50 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <h3 className="font-semibold text-indigo-700 text-xl">Modern</h3>
            <p className="text-gray-600 mt-1 text-sm">
              Built with today’s best tools and standards.
            </p>
          </div>

          <div className="p-5 bg-indigo-50 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <h3 className="font-semibold text-indigo-700 text-xl">Reliable</h3>
            <p className="text-gray-600 mt-1 text-sm">
              Robust systems you can count on every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
