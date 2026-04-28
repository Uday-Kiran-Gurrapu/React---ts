import React, { createContext, useContext, useState } from "react";

type CounterContextType = {
  count: number;
  increment: (step: number) => void;
  decrement: (step: number) => void;
  reset: () => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  const increment = (step: number) => setCount((c) => c + step);
  const decrement = (step: number) => setCount((c) => Math.max(0, c - step));
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error("useCounter must be used within a CounterProvider");
  return ctx;
}
