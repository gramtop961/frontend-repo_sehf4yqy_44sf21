import React from 'react';

export default function Cart({ items, onRemove, onClose }) {
  const total = items.reduce((sum, i) => sum + i.price, 0)
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="hidden flex-1 bg-black/40 md:block" onClick={onClose} />
      <div className="ml-auto flex h-full w-full max-w-md flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-zinc-200 p-4">
          <h3 className="text-lg font-semibold text-zinc-900">Your cart</h3>
          <button onClick={onClose} className="text-sm text-zinc-600 hover:text-zinc-900">Close</button>
        </div>
        <div className="flex-1 divide-y divide-zinc-200 overflow-y-auto">
          {items.length === 0 ? (
            <div className="p-6 text-sm text-zinc-600">Your cart is empty.</div>
          ) : (
            items.map((i) => (
              <div key={i.id + Math.random()} className="flex items-center justify-between p-4">
                <div>
                  <p className="text-sm font-medium text-zinc-900">{i.name}</p>
                  <p className="text-xs text-zinc-500">${i.price}</p>
                </div>
                <button onClick={() => onRemove(i)} className="text-xs text-red-600 hover:underline">Remove</button>
              </div>
            ))
          )}
        </div>
        <div className="border-t border-zinc-200 p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-zinc-600">Subtotal</span>
            <span className="font-semibold text-zinc-900">${total.toFixed(2)}</span>
          </div>
          <button className="mt-4 w-full rounded-full bg-cobalt-600 py-3 text-white transition hover:bg-cobalt-700">Checkout</button>
          <p className="mt-2 text-center text-xs text-zinc-500">Secure checkout coming soon.</p>
        </div>
      </div>
    </div>
  )
}
