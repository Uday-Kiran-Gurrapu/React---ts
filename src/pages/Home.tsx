import { useCounter } from "../context/CounterContext";

function Home() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Home</h2>
        <p className="text-gray-400 mt-1">A simple counter to get you started.</p>
      </div>

      <div className="inline-flex flex-col items-center gap-4 p-6 bg-gray-800 border border-gray-700 rounded-xl">
        <p className="text-4xl font-bold text-indigo-400">{count}</p>
        <div className="flex gap-3">
          <button
            onClick={increment}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            Increase
          </button>
          <button
            onClick={decrement}
            disabled={count === 0}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
