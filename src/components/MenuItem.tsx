import { useState } from "react"
import type { MenuItem } from "../types"
import type { ActionDispatch } from "react"
import type { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
  item: MenuItem
  dispatch: ActionDispatch<[action: OrderActions]>
}

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <button
      className="group w-full rounded-2xl border border-border bg-card overflow-hidden
                 cursor-pointer select-none text-left
                 transition-all duration-350 ease-out
                 hover:border-primary hover:shadow-lg hover:-translate-y-1
                 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2
                 active:scale-[0.97]"
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
      <div className="aspect-[4/3] bg-muted overflow-hidden">
        {!imgError && item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            className="h-full w-full object-cover transition-transform duration-500 ease-out
                       group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-fg-muted/25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z" />
              <line x1="6" x2="6" y1="1" y2="4" />
              <line x1="10" x2="10" y1="1" y2="4" />
              <line x1="14" x2="14" y1="1" y2="4" />
            </svg>
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4">
        <p className="text-fg font-body font-medium text-sm sm:text-base leading-snug line-clamp-2 min-h-[2.5rem]">
          {item.name}
        </p>
        <p className="mt-2 font-heading font-bold text-lg sm:text-xl text-primary">
          ${item.price}
        </p>
      </div>
    </button>
  )
}
