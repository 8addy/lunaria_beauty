import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCarousel from '../components/ProductCarousel'

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])

  // Elegant carousel images - models with beauty products
  const carouselImages = [
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&h=800&fit=crop'
  ]

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products')
        setFeaturedProducts(response.data.slice(0, 3))
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div>
      {/* Hero Carousel Section */}
      <ProductCarousel images={carouselImages} />

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-light text-lunaria-charcoal mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated collection of botanical beauty essentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="bg-lunaria-beige rounded-sm overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-display font-medium text-lunaria-charcoal mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
                  <p className="text-lg font-semibold text-lunaria-charcoal">
                    ${product.price}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Message Section */}
      <section className="py-20 bg-lunaria-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-light text-lunaria-charcoal mb-6">
            Pure. Natural. Beautiful.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Lunaria Beauty, we believe in the power of nature to enhance your
            natural radiance. Our products are crafted with the finest botanical
            ingredients, free from harsh chemicals, and designed to celebrate your
            unique beauty.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home

