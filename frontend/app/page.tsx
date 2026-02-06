import Link from "next/link";

import Header from'./components/Header';
import Hero from './components/Hero';
import HowItWorksCard from './components/HowItWorksCard';
import CapabilitiesCard from './components/CapabilitiesCard';
import Footer from './components/Footer';


export default function Home() {

  const steps = [
    {
      title: "Share Ideas",
      emoji: "💡",
      color: "text-indigo-600",
      text: "Post your thoughts, proposals, or questions to the community."
    },
    {
      title: "Run Experiments",
      emoji: "🧪",
      color: "text-emerald-600",
      text: "Test your ideas with small, focused experiments."
    },
    {
      title: "Track Outcomes",
      emoji: "📊",
      color: "text-amber-600",
      text: "Record what happened and gather data from your experiments."
    },
    {
      title: "Reflect Together",
      emoji: "🧠",
      color: "text-rose-600",
      text: "Share insights and learn from both successes and surprises."
    }
  ];

  const features = [
    "Share ideas with a curious community",
    "Design and run small experiments",
    "Track and document your results",
    "Learn from others' experiences and insights"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-gray-900">

      {/* Header */}
<<<<<<< issue-1
      <header className="bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-indigo-600 mb-1">EchoRoom</h1>
            <p className="text-sm text-gray-600">
              Where Ideas Become Learning
            </p>
          </div>

          <span className="text-sm px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium">
            OSQ Project
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Turn Ideas into
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">
            {" "}Actionable Learning
          </span>
        </h2>

        <p className="text-base text-gray-700 max-w-xl leading-relaxed mb-6">
          EchoRoom is a collaborative space where you can share ideas,
          test them through small experiments, and reflect on the results
          with a supportive community.
        </p>

        <button
          disabled
          className="px-6 py-3 rounded-lg bg-indigo-600/20 text-indigo-700 cursor-not-allowed border border-indigo-300 text-base font-medium"
        >
          Start Exploring (Coming Soon)
        </button>
      </section>

      {/* How It Works */}
      <section className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <h3 className="text-3xl font-semibold mb-16 text-center">
            How EchoRoom Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border p-6 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{item.emoji}</div>

                <h4 className={`font-semibold text-lg mb-3 ${item.color}`}>
                  {item.title}
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h3 className="text-3xl font-semibold mb-12">
          What You Can Do on EchoRoom
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mb-8">
          {features.map((text) => (
            <div
              key={text}
              className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <span className="text-emerald-500 mt-0.5 text-lg flex-shrink-0">✔</span>
              <p className="text-base text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-8 leading-relaxed">
          🚧 We're building these features together during the Open Source Quest (OSQ) initiative.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>Built during Open Source Quest</span>
        </div>
      </footer>
=======

      <Header />


      {/* Hero */}
      <Hero />

      {/* How It Works */}
      <HowItWorksCard />


      {/* Capabilities */}
      <CapabilitiesCard/>
      

      {/* Footer */}
      <Footer/>
      
>>>>>>> main

    </main>
  );
}
