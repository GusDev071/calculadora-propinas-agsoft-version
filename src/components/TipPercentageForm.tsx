import type { ActionDispatch } from "react"
import type { OrderActions } from "../reducers/order-reducer"

const tipOptions = [
  { id: "tip-10", value: 0.1, label: "10%" },
  { id: "tip-20", value: 0.2, label: "20%" },
  { id: "tip-50", value: 0.5, label: "50%" },
]

type TipPercentageFormProps = {
  dispatch: ActionDispatch<[action: OrderActions]>
  tip: number
}

export default function TipPercentageForm({ dispatch, tip }: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="text-lg font-heading font-bold text-fg mb-4">Propina</h3>

      <div className="grid grid-cols-3 gap-3">
        {tipOptions.map((tipOption) => {
          const isSelected = tip === tipOption.value
          return (
            <label
              key={tipOption.id}
              className={`flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer select-none
                          transition-all duration-300 ease-out
                          ${isSelected
                            ? "border-primary bg-primary-light text-primary"
                            : "border-border bg-card text-fg-muted hover:border-primary/40 hover:bg-muted"
                          }
                        `}
            >
              <input
                id={tipOption.id}
                type="radio"
                name="tip"
                value={tipOption.value}
                className="sr-only"
                onChange={(e) =>
                  dispatch({ type: "add-tip", payload: { value: +e.target.value } })
                }
                checked={isSelected}
              />
              <span className={`font-heading font-bold text-xl ${isSelected ? "text-primary" : "text-fg"}`}>
                {tipOption.label}
              </span>
            </label>
          )
        })}
      </div>
    </div>
  )
}
