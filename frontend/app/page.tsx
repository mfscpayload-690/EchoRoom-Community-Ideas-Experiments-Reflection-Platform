"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [backendStatus, setBackendStatus] = useState("Checking backend...");


  useEffect(() => {
  setMounted(true);

  // Theme logic
  const saved = localStorage.getItem("color-theme");
  if (
    saved === "dark" ||
    (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    setDark(true);
  } else {
    document.documentElement.classList.remove("dark");
    setDark(false);
  }

  // Backend connectivity test
  fetch("http://localhost:5000/health")
    .then(res => res.json())
    .then(data => {
      setBackendStatus("✅ Backend Connected: " + data.message);
    })
    .catch(err => {
      setBackendStatus("❌ Backend Not Connected");
      console.error(err);
    });

}, []);


  const toggleTheme = () => {
    const newDark = !dark;
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
    setDark(newDark);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-800/80 backdrop-blur border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">EchoRoom</div>

          <div className="hidden md:flex gap-8 text-slate-700 dark:text-slate-300">
            <Link href="/ideas" className="hover:text-blue-600 cursor-pointer">Ideas</Link>
            <Link href="/experiments" className="hover:text-blue-600 cursor-pointer">Experiments</Link>
            <Link href="/reflection" className="hover:text-blue-600 cursor-pointer">Reflection</Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-xl hover:scale-110 transition"
              aria-label="Toggle theme"
            >
              {mounted ? (dark ? "☀️" : "🌙") : "🌙"}
            </button>

            <Link href="/community" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow inline-block">
              Join Community
            </Link>
          </div>
        </div>
      </nav>

{/* HERO */}
<section className="max-w-4xl mx-auto text-center px-6 pt-24 pb-16">
  <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white leading-tight">
    Turn Ideas into
    <span className="block text-blue-600 mt-2">Actionable Learning</span>
  </h1>
  <p className="mt-4 text-sm text-green-600 dark:text-green-400">
    {backendStatus}
  </p>
  <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
    EchoRoom helps communities transform ideas into experiments, insights, and meaningful learning — collaboratively and transparently.
  </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/ideas" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg transition hover:-translate-y-1 inline-block">
            Start Exploring →
          </Link>
          <Link href="/about" className="border border-slate-300 dark:border-slate-600 px-8 py-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-white inline-block">
            Learn More
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard emoji="💡" title="Share Ideas" desc="Post and discuss ideas openly with your community to spark innovation." />
          <FeatureCard emoji="🧪" title="Run Experiments" desc="Validate ideas through focused real-world experiments and tests." />
          <FeatureCard emoji="📊" title="Track Outcomes" desc="Capture results and build collective knowledge from detailed outcomes." />
          <FeatureCard emoji="🧠" title="Reflect & Learn" desc="Improve continuously through shared insights and reflection." />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white">Start building and learning together</h2>
          <p className="text-blue-100 mt-4">Join EchoRoom and turn your ideas into meaningful experiments today. No credit card required.</p>
          <Link href="/community" className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100 inline-block">
            Get Started
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-slate-500">© 2026 EchoRoom — Built during Open Source Quest</p>
          <div className="flex gap-6 text-sm text-slate-500 mt-4 md:mt-0">
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/community" className="hover:text-blue-600">Community</Link>
            <Link href="https://github.com/R3ACTR/EchoRoom-Community-Ideas-Experiments-Reflection-Platform" className="hover:text-blue-600">GitHub</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition">
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="font-semibold text-lg text-slate-800 dark:text-white">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{desc}</p>
    </div>
  );
}
