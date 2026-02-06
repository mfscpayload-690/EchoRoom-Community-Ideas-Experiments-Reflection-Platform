export default function Hero(){
    return  (
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold mb-6 leading-tight">
          Turn Ideas into
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">
            {" "}Learning
          </span>
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl">
          EchoRoom is a community platform where ideas are not just discussed,
          but tested through small experiments and reflected upon openly.
        </p>

        {/* Placeholder CTA */}
        <button
          disabled
          className="mt-8 px-6 py-3 rounded-lg bg-indigo-600/20 text-indigo-700 cursor-not-allowed border border-indigo-300"
        >
          Start Exploring (Coming Soon)
        </button>
      </section>
    );
}