import productsData from './products.json'

// Export products as a default export
export default productsData

// Helper functions
export const getProductById = (id) => {
  return productsData.find(product => product.id === parseInt(id))
}

export const getAllProducts = () => {
  return productsData
}

export const getFeaturedProducts = (count = 3) => {
  return productsData.slice(0, count)
}

