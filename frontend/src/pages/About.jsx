const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-light text-lunaria-charcoal mb-6">
            Our Story
          </h1>
          <div className="w-24 h-1 bg-lunaria-rose mx-auto"></div>
        </div>

        {/* Story Content */}
        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <p>
            Lunaria Beauty was born from a simple belief: that beauty should be
            pure, natural, and accessible. Founded in 2020, we set out to create
            a cosmetics brand that celebrates your natural radiance while
            respecting both your skin and the planet.
          </p>

          <p>
            Our name, Lunaria, is inspired by the moonflower—a delicate bloom
            that opens its petals under the moonlight, symbolizing the gentle,
            transformative power of nature. Just like this flower, we believe
            that true beauty reveals itself when we embrace what's natural.
          </p>

          <h2 className="text-3xl font-display font-light text-lunaria-charcoal mt-12 mb-6">
            Our Philosophy
          </h2>

          <p>
            At Lunaria Beauty, we are committed to clean beauty. Every product
            in our collection is carefully formulated with pure botanical
            ingredients, free from harsh chemicals, parabens, and synthetic
            fragrances. We believe that what you put on your skin matters, and
            that's why we source only the finest natural ingredients from
            trusted suppliers.
          </p>

          <h2 className="text-3xl font-display font-light text-lunaria-charcoal mt-12 mb-6">
            Nature & Purity
          </h2>

          <p>
            Nature has provided us with everything we need to enhance our
            natural beauty. From hydrating botanical extracts to nourishing
            plant oils, our formulations harness the power of nature to deliver
            results you can see and feel. We're dedicated to creating products
            that not only make you look beautiful but also make you feel good
            about what you're using.
          </p>

          <p>
            Our commitment extends beyond our products. We're continuously
            working towards more sustainable packaging, ethical sourcing, and
            practices that honor both people and the planet. Because beauty
            shouldn't come at the cost of our environment.
          </p>

          <div className="mt-16 p-8 bg-lunaria-beige rounded-sm text-center">
            <p className="text-xl font-display font-light text-lunaria-charcoal italic">
              "Enhancing natural beauty with pure botanical ingredients."
            </p>
            <p className="text-gray-600 mt-4">— The Lunaria Beauty Promise</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

