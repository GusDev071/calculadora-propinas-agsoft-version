import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { showToast } from "../hooks/useToast"
import type { ActionDispatch } from "react"
import type { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
  order: OrderItem[]
  tip: number
  dispatch: ActionDispatch<[action: OrderActions]>
}

export default function OrderTotals({ order, tip, dispatch }: OrderTotalsProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  )

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [subtotalAmount, tipAmount]
  )

  const handlePlaceOrder = () => {
    showToast("Orden guardada exitosamente")
    dispatch({ type: "place-order" })
  }

  return (
    <div>
      <div className="bg-muted rounded-xl p-4 sm:p-5 space-y-3">
        <h3 className="font-heading font-bold text-lg text-fg mb-1">
          Totales
        </h3>

        <div className="flex justify-between items-center">
          <span className="text-fg-muted font-body text-sm sm:text-base">Subtotal</span>
          <span className="font-body font-semibold text-fg text-sm sm:text-base">
            {formatCurrency(subtotalAmount)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-fg-muted font-body text-sm sm:text-base">Propina</span>
          <span className="font-body font-semibold text-success text-sm sm:text-base">
            {formatCurrency(tipAmount)}
          </span>
        </div>

        <div className="border-t border-border pt-3 flex justify-between items-center">
          <span className="font-heading font-bold text-fg">Total a pagar</span>
          <span className="font-heading font-bold text-xl sm:text-2xl text-primary">
            {formatCurrency(totalAmount)}
          </span>
        </div>
      </div>

      <button
        className="w-full mt-5 py-3.5 px-6 rounded-xl
                   bg-primary text-white font-body font-semibold text-base
                   cursor-pointer select-none
                   transition-all duration-300 ease-out
                   hover:bg-primary-hover hover:shadow-md
                   focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2
                   active:scale-[0.98]
                   disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:shadow-none
                   disabled:active:scale-100"
        disabled={totalAmount === 0}
        onClick={handlePlaceOrder}
      >
        Guardar orden
      </button>
    </div>
  )
}
