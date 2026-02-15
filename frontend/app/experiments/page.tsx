"use client";

import { useState, useEffect } from "react";
import { PageLayout } from "../community/PageLayout";

export default function ExperimentsPage() {
  async function createExperiment() {

  const res = await fetch("http://localhost:5000/experiments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New Experiment",
      description: "Created from frontend",
      status: "active",
    }),
  });

  const data = await res.json();

  if (data.success) {
    setExperiments([...experiments, data.data]);
  }

}


  // Sample experiment data
  const [experiments, setExperiments] = useState<any[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("http://localhost:5000/experiments")
    .then((res) => res.json())
    .then((data) => {
  setExperiments(data.data);
  setLoading(false);
})

    .catch((err) => {
      console.error("Failed to fetch experiments:", err);
      setLoading(false);
    });
}, []);



  // Status color
  const getStatusTextColor = (status: string) => {
    if (status === "Completed") return "text-green-600 dark:text-green-400";
    if (status === "In Progress") return "text-blue-600 dark:text-blue-400";
    return "text-gray-600 dark:text-gray-400";
  };

  // Progress bar color
  const getProgressColor = (status: string) => {
    if (status === "Completed") return "bg-green-500";
    if (status === "In Progress") return "bg-blue-500";
    return "bg-gray-400";
  };


  return (
    <PageLayout>

      <div className="section">

        {/* Header */}
        <div className="mb-8">

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Experiments
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Track and manage experiments to test ideas and learn quickly.
          </p>

        </div>


        {/* Empty State */}
        {/* Loading State */}
{loading ? (

  <div className="card text-center py-16">
    <p className="text-gray-600 dark:text-gray-300">
      Loading experiments...
    </p>
  </div>

) : experiments.length === 0 ? (


          <div className="card text-center py-16">

            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              No experiments yet
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Start your first experiment to test and validate ideas.
            </p>

            <button
  className="btn-primary"
  onClick={createExperiment}
>
  Create Experiment
</button>


          </div>

        ) : (

          /* Experiments Grid */
          <div className="grid gap-6 md:grid-cols-2">

            {experiments.map((exp, index) => (

              <div key={index} className="card">

                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {exp.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>


                {/* Status */}
                <div className="flex justify-between items-center mb-2">

                  <span className={`text-sm font-medium ${getStatusTextColor(exp.status)}`}>
                    Status: {exp.status}
                  </span>

                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.progress}%
                  </span>

                </div>


                {/* Progress bar */}
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">

                  <div
                    className={`h-2 rounded-full ${getProgressColor(exp.status)}`}
                    style={{ width: `${exp.progress}%` }}
                  />

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </PageLayout>
  );
}
