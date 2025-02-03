'use client';

export default function CheckoutButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Proceed to Checkout
    </button>
  );
}