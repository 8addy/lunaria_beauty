import { Link } from 'react-router-dom'
import { useState } from 'react'
import { getFeaturedProducts } from '../data/products'
import ProductCarousel from '../components/ProductCarousel'

const Home = () => {
  const [featuredProducts] = useState(getFeaturedProducts(3))

  // Elegant carousel images - models with beauty products
  const carouselImages = [
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&h=800&fit=crop'
  ]

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
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
            {featuredProducts.map((product) => {
              const averageRating =
                product.reviews && product.reviews.length > 0
                  ? (
                      product.reviews.reduce((sum, r) => sum + r.rating, 0) /
                      product.reviews.length
                    ).toFixed(1)
                  : null

              return (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="bg-lunaria-beige rounded-sm overflow-hidden mb-4 relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-xl font-display font-medium text-lunaria-charcoal mb-2 transition-colors duration-300 group-hover:text-lunaria-charcoal/80">
                      {product.name}
                    </h3>
                    {averageRating && (
                      <div className="flex items-center gap-2 mb-2">
                        <StarRating rating={Math.round(parseFloat(averageRating))} />
                        <span className="text-sm text-gray-600">
                          {averageRating} ({product.reviews.length})
                        </span>
                      </div>
                    )}
                    <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
                    <p className="text-lg font-semibold text-lunaria-charcoal transition-colors duration-300 group-hover:text-lunaria-charcoal/90">
                      ${product.price}
                    </p>
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-light text-lunaria-charcoal mb-4">
              Why Choose Lunaria
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference of pure, botanical beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lunaria-beige rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-lunaria-charcoal"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium text-lunaria-charcoal mb-3">
                100% Natural
              </h3>
              <p className="text-gray-600">
                All our products are made with pure botanical ingredients, free from harsh chemicals and synthetic additives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lunaria-beige rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-lunaria-charcoal"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium text-lunaria-charcoal mb-3">
                Cruelty-Free
              </h3>
              <p className="text-gray-600">
                We are committed to ethical beauty practices. All our products are never tested on animals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lunaria-beige rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-lunaria-charcoal"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium text-lunaria-charcoal mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Each product is carefully crafted with the finest ingredients to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-lunaria-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-light text-lunaria-charcoal mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Lunaria Beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-sm p-6">
              <StarRating rating={5} />
              <p className="text-gray-700 mt-4 mb-4 italic">
                "The Luminizing Serum has transformed my skin! I've never received so many compliments. My skin looks radiant and feels amazing."
              </p>
              <p className="font-semibold text-lunaria-charcoal">- Sarah M.</p>
            </div>

            <div className="bg-white rounded-sm p-6">
              <StarRating rating={5} />
              <p className="text-gray-700 mt-4 mb-4 italic">
                "Lunaria Beauty products are simply the best. All natural, effective, and they make my skin glow. I'm a customer for life!"
              </p>
              <p className="font-semibold text-lunaria-charcoal">- Emma L.</p>
            </div>

            <div className="bg-white rounded-sm p-6">
              <StarRating rating={5} />
              <p className="text-gray-700 mt-4 mb-4 italic">
                "I love that these products are clean, natural, and actually work. The Velvet Skin Cream is now my daily essential."
              </p>
              <p className="font-semibold text-lunaria-charcoal">- Sophia C.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-light text-lunaria-charcoal mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collections designed for your beauty needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link
              to="/products"
              className="group relative overflow-hidden rounded-sm bg-lunaria-beige h-64 flex items-center justify-center"
            >
              <div className="text-center z-10">
                <h3 className="text-2xl font-display font-medium text-lunaria-charcoal mb-2">
                  Skincare
                </h3>
                <p className="text-gray-600">Serums, Creams & More</p>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </Link>

            <Link
              to="/products"
              className="group relative overflow-hidden rounded-sm bg-lunaria-beige h-64 flex items-center justify-center"
            >
              <div className="text-center z-10">
                <h3 className="text-2xl font-display font-medium text-lunaria-charcoal mb-2">
                  Face Care
                </h3>
                <p className="text-gray-600">Cleansers & Toners</p>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </Link>

            <Link
              to="/products"
              className="group relative overflow-hidden rounded-sm bg-lunaria-beige h-64 flex items-center justify-center"
            >
              <div className="text-center z-10">
                <h3 className="text-2xl font-display font-medium text-lunaria-charcoal mb-2">
                  Treatments
                </h3>
                <p className="text-gray-600">Masks & Serums</p>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </Link>

            <Link
              to="/products"
              className="group relative overflow-hidden rounded-sm bg-lunaria-beige h-64 flex items-center justify-center"
            >
              <div className="text-center z-10">
                <h3 className="text-2xl font-display font-medium text-lunaria-charcoal mb-2">
                  Lip Care
                </h3>
                <p className="text-gray-600">Tints & Balms</p>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-lunaria-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-light mb-4">
            Join Our Beauty Community
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Subscribe to receive exclusive offers, beauty tips, and updates on new products.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-sm text-lunaria-charcoal focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="btn-primary bg-white text-lunaria-charcoal hover:bg-white/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Brand Message Section */}
      <section className="py-20 bg-lunaria-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-light text-lunaria-charcoal mb-6">
            Pure. Natural. Beautiful.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Lunaria Beauty, we believe in the power of nature to enhance your
            natural radiance. Our products are crafted with the finest botanical
            ingredients, free from harsh chemicals, and designed to celebrate your
            unique beauty.
          </p>
          <Link to="/about" className="btn-secondary">
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

