import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../context/CartContext'

const Products = () => {
  const { addToCart } = useCart()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [addedItems, setAddedItems] = useState({})

  const getAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return null
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0)
    return (sum / reviews.length).toFixed(1)
  }

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-3 h-3 ${
              star <= fullStars
                ? 'text-yellow-400 fill-current'
                : star === fullStars + 1 && hasHalfStar
                ? 'text-yellow-400 fill-current opacity-50'
                : 'text-gray-300'
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products')
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading products...</p>
      </div>
    )
  }

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-display font-light text-lunaria-charcoal mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our collection of botanical beauty essentials, crafted with
            care and natural ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Link to={`/product/${product.id}`}>
                <div className="bg-lunaria-beige">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </Link>
              <div className="p-6">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-2xl font-display font-medium text-lunaria-charcoal mb-2 hover:opacity-70">
                    {product.name}
                  </h3>
                </Link>
                {product.reviews && product.reviews.length > 0 && (
                  <div className="flex items-center gap-2 mb-2">
                    <StarRating rating={parseFloat(getAverageRating(product.reviews))} />
                    <span className="text-sm text-gray-600">
                      {getAverageRating(product.reviews)} ({product.reviews.length})
                    </span>
                  </div>
                )}
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-4">
                  <p className="text-2xl font-semibold text-lunaria-charcoal">
                    ${product.price}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      addToCart(product)
                      setAddedItems({ ...addedItems, [product.id]: true })
                      setTimeout(() => {
                        setAddedItems({ ...addedItems, [product.id]: false })
                      }, 2000)
                    }}
                    className="btn-primary flex-1 text-sm px-4 py-2"
                  >
                    {addedItems[product.id] ? 'Added!' : 'Add to Cart'}
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn-secondary text-sm px-4 py-2"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products

