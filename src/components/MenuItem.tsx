import type { MenuItem } from "../types"
import type { ActionDispatch } from "react"
import type { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
    item: MenuItem,
    dispatch: ActionDispatch<[action: OrderActions]>
}

export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
    <div>
      <button
        className="border-2 border-teal-400 w-full hover:bg-teal-100 p-5 rounded-lg flex items-center justify-between"
        onClick={()=> dispatch({type: 'add-item', payload:{item}})}
      >
        <p>{item.name}</p> 
        <p className="font-black">${item.price}</p> 
      </button>
    </div>
  )
}
