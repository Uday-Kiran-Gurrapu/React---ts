import { useToast } from "../context/ToastContext";

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2" aria-live="polite">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-xl text-sm font-medium min-w-64 max-w-sm toast-slide-in ${
            toast.type === "success"
              ? "bg-green-800 border border-green-600 text-green-100"
              : toast.type === "error"
              ? "bg-red-800 border border-red-600 text-red-100"
              : "bg-gray-800 border border-gray-600 text-gray-100"
          }`}
        >
          <span className="text-base">
            {toast.type === "success" ? "✓" : toast.type === "error" ? "✕" : "ℹ"}
          </span>
          <span className="flex-1">{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            aria-label="Dismiss"
            className="opacity-60 hover:opacity-100 transition-opacity text-base leading-none"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
