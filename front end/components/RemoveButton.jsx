'use client';

export default function RemoveButton({ onRemove }) {
  return (
    <button 
      onClick={onRemove}
      className="mt-2 text-sm text-red-500 hover:text-red-700"
    >
      Remove
    </button>
  );
}