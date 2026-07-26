import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import type { ActionDispatch } from "react"
import type { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    dispatch: ActionDispatch<[action: OrderActions]>
}

export default function OrderTotals({order, tip, dispatch}: OrderTotalsProps) {

    const subtotalAmount = useMemo(() =>
        order.reduce((total, item)=>total + (item.price * item.quantity), 0)
    , [order])

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip,order])

    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount])

  return (
   <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina:</h2>
            <p>Subtotal a pagar:
                <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
            </p>
            <p>Propina: {''}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>
            <p>Total a pagar: {''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>
        </div>

        <button 
        className="bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded-lg w-full mt-5 disabled:opacity-50"
        disabled={totalAmount === 0}
        onClick={() => dispatch({type:'place-order'})}
        >
            Guardar orden
        </button>
   </>
  )
}
