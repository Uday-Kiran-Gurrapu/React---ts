type CounterProps = {
  onIncrease: () => void;
  onDecrease: () => void;
  count: number;
};

function Counter({ onIncrease, onDecrease, count }: CounterProps) {
  return (
    <div className="inline-flex flex-col items-center gap-4 p-6 bg-gray-800 border border-gray-700 rounded-xl">
      <h2 className="text-2xl font-bold text-indigo-400">
        {count === 0 ? "Count is Zero" : `Count: ${count}`}
      </h2>
      <div className="flex gap-3">
        <button
          onClick={onIncrease}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
        >
          Increase
        </button>
        <button
          onClick={() => count > 0 && onDecrease()}
          disabled={count === 0}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default Counter;
