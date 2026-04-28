import { useState } from "react";
import { useCounter } from "../context/CounterContext";

const STEPS = [1, 5, 10];

function Home() {
  const { count, increment, decrement, reset } = useCounter();
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Home</h2>
        <p className="text-gray-400 mt-1">A simple counter to get you started.</p>
      </div>

      <div className="inline-flex flex-col items-center gap-5 p-6 bg-gray-800 border border-gray-700 rounded-xl">
        <p className="text-4xl font-bold text-indigo-400">{count}</p>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Step:</span>
          {STEPS.map((s) => (
            <button
              key={s}
              onClick={() => setStep(s)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                step === s
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => increment(step)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            +{step}
          </button>
          <button
            onClick={() => decrement(step)}
            disabled={count === 0}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            -{step}
          </button>
          <button
            onClick={reset}
            disabled={count === 0}
            className="px-4 py-2 bg-red-700 hover:bg-red-600 text-white rounded-lg font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
