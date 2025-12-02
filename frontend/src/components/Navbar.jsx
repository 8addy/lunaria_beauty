import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { getCartItemCount } = useCart()
  const cartItemCount = getCartItemCount()

  return (
    <nav className="bg-white border-b border-lunaria-beige sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-display font-semibold text-lunaria-charcoal">
              Lunaria Beauty
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-lunaria-charcoal hover:text-opacity-70 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-lunaria-charcoal hover:text-opacity-70 transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-lunaria-charcoal hover:text-opacity-70 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-lunaria-charcoal hover:text-opacity-70 transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="relative text-lunaria-charcoal hover:text-opacity-70 transition-colors font-medium"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-lunaria-charcoal text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-lunaria-charcoal"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link
              to="/"
              className="block text-lunaria-charcoal hover:text-opacity-70 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block text-lunaria-charcoal hover:text-opacity-70 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="block text-lunaria-charcoal hover:text-opacity-70 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-lunaria-charcoal hover:text-opacity-70 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="flex items-center gap-2 text-lunaria-charcoal hover:text-opacity-70 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
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
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Cart
              {cartItemCount > 0 && (
                <span className="bg-lunaria-charcoal text-white text-xs rounded-full px-2 py-0.5">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

