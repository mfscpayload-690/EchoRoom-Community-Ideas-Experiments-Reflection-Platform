"use client";

import { useEffect, useState } from "react";
import { BookOpen, MessageSquare } from "lucide-react";
import { PageLayout } from "../community/PageLayout";

interface Reflection {
  id?: number;
  title: string;
  outcome: string;
  learning: string;
  author: string;
  date: string;
}

const outcomeColors: Record<string, string> = {
  Success: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
  Mixed: "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30",
  Failed: "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30",
};

export default function ReflectionPage() {

  const [reflections, setReflections] = useState<Reflection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("http://localhost:5000/reflections")
      .then(res => res.json())
      .then(data => {

        if (data.success) {
          setReflections(data.data || data.reflections || []);
        }

        setLoading(false);

      })
      .catch(err => {

        console.error(err);
        setLoading(false);

      });

  }, []);

  return (
    <PageLayout>
      <main>
        <div className="container py-16">
          <div className="max-w-3xl mx-auto">

            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-8 w-8 text-purple-500 dark:text-purple-400" />
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Reflection
              </h1>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
              Reflection is where learning becomes meaningful.
            </p>


            {loading && (
              <p className="text-gray-500">Loading reflections...</p>
            )}


            <div className="space-y-6">

              {reflections.map((ref, i) => (

                <div key={i}
                  className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6">

                  <div className="flex items-start justify-between mb-3">

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {ref.title}
                    </h3>

                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${outcomeColors[ref.outcome] || ""}`}>
                      {ref.outcome}
                    </span>

                  </div>


                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg p-4 mb-4">

                    <div className="flex items-start gap-2">

                      <MessageSquare className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />

                      <p className="text-sm italic">
                        "{ref.learning}"
                      </p>

                    </div>

                  </div>


                  <div className="flex justify-between text-xs text-gray-500">

                    <span>By {ref.author}</span>
                    <span>{ref.date}</span>

                  </div>

                </div>

              ))}

            </div>

          </div>
        </div>
      </main>
    </PageLayout>
  );

}
