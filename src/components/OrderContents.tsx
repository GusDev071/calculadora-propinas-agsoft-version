import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import type { ActionDispatch } from "react"
import type { OrderActions } from "../reducers/order-reducer"

type OrderContentsProps = {
  order: OrderItem[]
  dispatch: ActionDispatch<[action: OrderActions]>
}

export default function OrderContents({ order, dispatch }: OrderContentsProps) {
  return (
    <div>
      <h3 className="text-lg font-heading font-bold text-fg mb-4">Consumo</h3>
      <div className="divide-y divide-border">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-start py-4 gap-4 first:pt-0"
          >
            <div className="flex-1 min-w-0">
              <p className="text-fg font-body font-medium leading-snug truncate">
                {item.name}
              </p>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-sm text-fg-muted font-body">
                  {formatCurrency(item.price)} c/u
                </span>
                <span className="inline-flex items-center justify-center bg-muted text-fg font-body font-semibold text-xs px-2 py-0.5 rounded-full">
                  x{item.quantity}
                </span>
                <span className="text-sm font-body font-semibold text-primary">
                  {formatCurrency(item.price * item.quantity)}
                </span>
              </div>
            </div>

            <button
              className="shrink-0 h-8 w-8 rounded-full flex items-center justify-center
                         bg-muted text-fg-muted
                         cursor-pointer select-none
                         transition-all duration-300 ease-out
                         hover:bg-destructive hover:text-white
                         focus-visible:outline-2 focus-visible:outline-destructive focus-visible:outline-offset-2
                         active:scale-90"
              onClick={() =>
                dispatch({ type: "remove-item", payload: { id: item.id } })
              }
              aria-label={`Eliminar ${item.name}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
