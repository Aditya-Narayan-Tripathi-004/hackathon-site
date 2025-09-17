export default function Home() {
  return (
    <div className="text-center p-10">
      {/* Hero Banner */}
      <section className="p-10 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-2xl shadow-lg animate-pulse">
        <h2 className="text-5xl font-extrabold mb-4 animate-bounce">
          Welcome to Hackathon!
        </h2>
        <p className="mb-6 text-xl animate-fadeIn">
          This is your demo site. Coming Soon 🚀
        </p>
        <button className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:scale-105 transform transition">
          Get Started
        </button>
      </section>
    </div>
  );
}
