import { useState } from 'react'

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

const Reviews = ({ reviews = [] }) => {
  const [showAll, setShowAll] = useState(false)
  const displayedReviews = showAll ? reviews : reviews.slice(0, 3)

  if (!reviews || reviews.length === 0) {
    return (
      <section className="mt-16 pt-12 border-t border-lunaria-beige">
        <h2 className="text-3xl font-display font-light text-lunaria-charcoal mb-8">
          Customer Reviews
        </h2>
        <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
      </section>
    )
  }

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <section className="mt-16 pt-12 border-t border-lunaria-beige">
      <div className="mb-8">
        <h2 className="text-3xl font-display font-light text-lunaria-charcoal mb-4">
          Customer Reviews
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <StarRating rating={Math.round(averageRating)} />
            <span className="text-lg font-semibold text-lunaria-charcoal ml-2">
              {averageRating.toFixed(1)}
            </span>
          </div>
          <span className="text-gray-600">
            ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {displayedReviews.map((review, index) => (
          <div
            key={index}
            className="bg-lunaria-beige rounded-sm p-6 border border-lunaria-beige"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-lunaria-charcoal text-white flex items-center justify-center font-semibold">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-lunaria-charcoal">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.date}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
            </div>
            <p className="text-gray-700 mt-3 leading-relaxed">{review.comment}</p>
            {review.verified && (
              <span className="inline-block mt-3 text-xs text-green-600 font-medium">
                ✓ Verified Purchase
              </span>
            )}
          </div>
        ))}
      </div>

      {reviews.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 text-lunaria-charcoal hover:opacity-70 transition-opacity font-medium"
        >
          {showAll ? 'Show Less' : `View All ${reviews.length} Reviews`}
        </button>
      )}
    </section>
  )
}

export default Reviews

