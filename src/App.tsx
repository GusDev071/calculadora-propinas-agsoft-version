import { useReducer } from "react"
import Header from "./components/Header"
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import Toast from "./components/Toast"
import { menuItems } from "./data/db"
import { initialState, orderReducer } from "./reducers/order-reducer"

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto w-full py-8 sm:py-12 px-3 sm:px-4 md:px-8 grid md:grid-cols-5 gap-6 md:gap-8">
        <section className="md:col-span-3 animate-fade-in">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-fg">Menu</h2>
              <p className="text-xs sm:text-sm text-fg-muted font-body mt-0.5">
                {menuItems.length} platillos disponibles
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {menuItems.map((item, i) => (
              <div
                key={item.id}
                className="animate-slide-up"
                style={{
                  animationDelay: `${Math.min(i * 60, 300)}ms`,
                  animationFillMode: "backwards",
                }}
              >
                <MenuItem item={item} dispatch={dispatch} />
              </div>
            ))}
          </div>
        </section>

        <section className="md:col-span-2 animate-scale-in">
          <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 shadow-sm md:sticky md:top-8">
            <div className="flex items-center justify-between mb-5 sm:mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-fg">Mi Orden</h2>
                <p className="text-xs sm:text-sm text-fg-muted font-body mt-0.5">
                  {state.order.length > 0
                    ? `${state.order.length} platillo(s)`
                    : "Tu orden esta vacia"}
                </p>
              </div>
              {state.order.length > 0 && (
                <span className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-primary-light text-primary font-heading font-bold text-lg">
                  {state.order.reduce((t, i) => t + i.quantity, 0)}
                </span>
              )}
            </div>

            {state.order.length > 0 ? (
              <div className="space-y-6">
                <OrderContents order={state.order} dispatch={dispatch} />
                <TipPercentageForm dispatch={dispatch} tip={state.tip} />
                <OrderTotals order={state.order} tip={state.tip} dispatch={dispatch} />
              </div>
            ) : (
              <div className="text-center py-12 sm:py-16">
                <div className="animate-float inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-fg-muted/20"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z" />
                    <line x1="6" x2="6" y1="1" y2="4" />
                    <line x1="10" x2="10" y1="1" y2="4" />
                    <line x1="14" x2="14" y1="1" y2="4" />
                  </svg>
                </div>
                <p className="text-fg-muted font-body text-base sm:text-lg mt-4">
                  No hay nada en tu orden aun
                </p>
                <p className="text-fg-muted/50 font-body text-xs sm:text-sm mt-1">
                  Selecciona platillos del menu para comenzar
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Toast />
    </div>
  )
}

export default App
