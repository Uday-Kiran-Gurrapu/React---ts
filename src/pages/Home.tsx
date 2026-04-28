import { useState } from "react";
import { useCounter } from "../context/CounterContext";
import { Link } from "react-router-dom";

const STEPS = [1, 5, 10];

function Home() {
  const { count, increment, decrement, reset } = useCounter();
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-8">

      {/* Hero */}
      <div className="p-8 bg-gradient-to-br from-indigo-900/40 to-gray-800 border border-indigo-800/40 rounded-2xl">
        <h2 className="text-3xl font-bold text-white">Welcome back 👋</h2>
        <p className="text-gray-400 mt-2 max-w-lg">
          This is your React + TypeScript app. Explore the pages below or interact with the counter.
        </p>
        <div className="flex gap-3 mt-5">
          <Link
            to="/users"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Browse Users
          </Link>
          <Link
            to="/profile"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg text-sm font-medium transition-colors"
          >
            Edit Profile
          </Link>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-5 bg-gray-800 border border-gray-700 rounded-xl text-center">
          <p className="text-3xl font-bold text-indigo-400">{count}</p>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Current Count</p>
        </div>
        <div className="p-5 bg-gray-800 border border-gray-700 rounded-xl text-center">
          <p className="text-3xl font-bold text-indigo-400">{step}</p>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Step Size</p>
        </div>
        <div className="p-5 bg-gray-800 border border-gray-700 rounded-xl text-center">
          <p className="text-3xl font-bold text-indigo-400">{count > 0 ? "+" : "—"}</p>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Status</p>
        </div>
      </div>

      {/* Counter card */}
      <div className="flex flex-col items-center gap-5 p-8 bg-gray-800 border border-gray-700 rounded-2xl">
        <p className="text-sm text-gray-500 uppercase tracking-widest">Counter</p>
        <p className="text-7xl font-bold text-indigo-400 tabular-nums">{count}</p>

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
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            +{step}
          </button>
          <button
            onClick={() => decrement(step)}
            disabled={count === 0}
            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            -{step}
          </button>
          <button
            onClick={reset}
            disabled={count === 0}
            className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded-lg font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Reset
          </button>
        </div>
      </div>

    </div>
  );
}

export default Home;
