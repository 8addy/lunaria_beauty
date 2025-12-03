# Lunaria Beauty - Static E-commerce Template

A fully functional, elegant static e-commerce template for a fictional cosmetics brand built with React and Vite.

## 🎨 Features

- **Modern Design**: Clean, luxury aesthetic with soft neutral colors
- **Responsive Layout**: Mobile-first design that works on all devices
- **Product Catalog**: Browse and view detailed product information with reviews
- **Shopping Cart**: Full cart functionality with localStorage persistence
- **Contact Form**: Client-side contact form
- **Static Site**: Fully static - no backend required, perfect for GitHub Pages deployment
- **Fast Performance**: Built with Vite for optimal development and build performance

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- React Router
- TailwindCSS
- Local data (no API calls needed)

## 📁 Project Structure

```
ecom/
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProductCarousel.jsx
│   │   │   └── Reviews.jsx
│   │   ├── context/           # React Context
│   │   │   └── CartContext.jsx
│   │   ├── data/              # Product data
│   │   │   ├── products.json
│   │   │   └── products.js
│   │   ├── pages/             # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Cart.jsx
│   │   ├── App.jsx            # Main app component
│   │   ├── main.jsx           # Entry point
│   │   └── index.css          # Global styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation & Running

#### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:3000`

## 📄 Available Pages

- **Home** (`/`) - Hero carousel, featured products, testimonials, and more
- **Products** (`/products`) - Full product catalog with ratings
- **Product Detail** (`/product/:id`) - Individual product details with reviews
- **About** (`/about`) - Brand story and philosophy
- **Contact** (`/contact`) - Contact form
- **Cart** (`/cart`) - Shopping cart with checkout summary

## 🚢 Building for Production

### Build

```bash
cd frontend
npm run build
```

The build output will be in the `dist/` folder.

### Deploy to GitHub Pages

The project is configured for GitHub Pages deployment:

```bash
cd frontend
npm run deploy
```

This will:
1. Build the project with the correct base path
2. Create a 404.html file for client-side routing
3. Deploy to the `gh-pages` branch

Your site will be available at: `https://[your-username].github.io/lunaria_beauty/`

**Note:** Make sure to update the `base` path in `vite.config.js` to match your repository name if different.

## 🎨 Design System

### Colors
- **Lunaria Beige**: `#F5F1EB`
- **Lunaria Rose**: `#F4E6E6`
- **Lunaria Charcoal**: `#2C2C2C`
- **Lunaria Cream**: `#FAF8F5`

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Inter (body text)

## 📝 Features Details

### Shopping Cart
- Add/remove items
- Update quantities
- Persistent cart (localStorage)
- Cart icon with item count in navbar

### Product Reviews
- Star ratings
- Customer reviews with verified badges
- Average rating display
- Review count on product cards

### Static Data
- All product data is stored locally in `src/data/products.json`
- No API calls required
- Perfect for static hosting

## 🔮 Future Enhancements

Here are some suggested improvements for production:

1. **Payment Integration**: Integrate Stripe or PayPal for checkout
2. **Form Service**: Use Formspree or similar for contact form submissions
3. **Search & Filters**: Add product search and filtering capabilities
4. **User Accounts**: Add user authentication and order history
5. **Database**: If needed, integrate with a headless CMS or database
6. **SEO**: Add meta tags, Open Graph, and structured data
7. **Analytics**: Add Google Analytics or similar tracking

## 📝 Notes

- Product images are currently using Unsplash placeholder URLs. Replace these with actual product images in production.
- The contact form is client-side only. For production, integrate with a form service like Formspree.
- The cart is stored in localStorage. For production, consider syncing with a backend or user account.

## 📄 License

This is a template project. Feel free to use and modify as needed.

---

Built with ❤️ for Lunaria Beauty
