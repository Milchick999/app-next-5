'use client'

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <p className="text-gray-800 mb-4">
        Error
      </p>

      <button onClick={reset} className="text-sm font-medium text-green-500">
        Try again
      </button>
    </div>
  );
}