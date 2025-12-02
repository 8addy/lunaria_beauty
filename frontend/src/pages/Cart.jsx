import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    clearCart,
  } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-display font-light text-lunaria-charcoal mb-6">
              Your Cart
            </h1>
            <p className="text-gray-600 mb-8">Your cart is empty.</p>
            <Link to="/products" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-display font-light text-lunaria-charcoal">
            Your Cart
          </h1>
          <button
            onClick={clearCart}
            className="text-gray-600 hover:text-lunaria-charcoal text-sm underline"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-lunaria-beige rounded-sm p-6 flex flex-col sm:flex-row gap-4"
              >
                {/* Product Image */}
                <Link
                  to={`/product/${item.id}`}
                  className="flex-shrink-0 w-full sm:w-32 h-32 bg-lunaria-beige rounded-sm overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Link>

                {/* Product Details */}
                <div className="flex-grow flex flex-col sm:flex-row justify-between">
                  <div className="flex-grow mb-4 sm:mb-0">
                    <Link
                      to={`/product/${item.id}`}
                      className="text-xl font-display font-medium text-lunaria-charcoal mb-2 hover:opacity-70"
                    >
                      {item.name}
                    </Link>
                    <p className="text-gray-600 text-sm mb-2">{item.size}</p>
                    <p className="text-lg font-semibold text-lunaria-charcoal">
                      ${item.price}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-lunaria-beige rounded-sm">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-2 text-lunaria-charcoal hover:bg-lunaria-beige transition-colors"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="px-4 py-2 text-lunaria-charcoal min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-2 text-lunaria-charcoal hover:bg-lunaria-beige transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-semibold text-lunaria-charcoal">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors ml-2"
                      aria-label="Remove item"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-lunaria-beige rounded-sm p-6 sticky top-24">
              <h2 className="text-2xl font-display font-medium text-lunaria-charcoal mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="text-sm">Calculated at checkout</span>
                </div>
                <div className="border-t border-gray-300 pt-4 flex justify-between text-lg font-semibold text-lunaria-charcoal">
                  <span>Total</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
              </div>

              <button className="btn-primary w-full mb-4">
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="block text-center text-lunaria-charcoal hover:opacity-70 transition-opacity"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

