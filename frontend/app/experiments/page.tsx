export default function Experiments(){
    return (
        <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
            <header>
                <div>
                    <p className="text-xl font-bold text-indigo-600">
                        EXPERIMENTS
                    </p>
                </div>
            </header>
            <br />
            <p className="text-black-600">
                Experiments help you learn fast by testing assumptions and improving ideas with real results.
            </p>
            <br />
            <p className="text-black-700 text-lg">
                Transform your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500 font-semibold">
                {" "}ideas
                </span>{" "}
                into structured, time-bound trials to test assumptions and learn quickly.
            </p>
            <br />
            <div className="space-y-3">
        <h2 className="text-2xl font-bold text-indigo-600">
          Experiment Tracking
        </h2>
        <br />
        <p className="text-black-600">
          Track each experiment from start to finish with clear goals,
          timelines, and measurable checkpoints.
        </p>
      </div>
        </div>
    );
}