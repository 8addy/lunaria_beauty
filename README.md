# Lunaria Beauty - E-commerce Template

A fully functional, elegant e-commerce template for a fictional cosmetics brand built with React, Node.js, and Express.

## 🎨 Features

- **Modern Design**: Clean, luxury aesthetic with soft neutral colors
- **Responsive Layout**: Mobile-first design that works on all devices
- **Product Catalog**: Browse and view detailed product information
- **Contact Form**: Functional contact form with backend integration
- **Fast Performance**: Built with Vite for optimal development and build performance

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- React Router
- TailwindCSS
- Axios

### Backend
- Node.js
- Express
- CORS

## 📁 Project Structure

```
ecom/
├── backend/
│   ├── data/
│   │   └── products.json      # Mock product data
│   ├── server.js              # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/             # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
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

#### 1. Backend Setup

```bash
cd backend
npm install
npm start
```

The backend server will run on `http://localhost:5001`

**Note:** The backend is also deployed at `https://lunaria-beauty.onrender.com`. 

#### 2. Frontend Setup

Open a new terminal window:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:3000`

##### API Configuration

The frontend automatically detects the environment:

- **Local Development**: Uses `http://localhost:5001` (your local backend)
- **Production Build**: Automatically uses `https://lunaria-beauty.onrender.com` (deployed backend)

You can override this by setting the `VITE_API_BASE_URL` environment variable:

```bash
# Create .env file in frontend directory (optional - only if you want to override)
cd frontend
echo "VITE_API_BASE_URL=http://localhost:5001" > .env
```

For GitHub Pages deployment, the production build will automatically use the deployed backend URL.

### Development Mode

For backend development with auto-reload, use:

```bash
cd backend
npm run dev
```

(Requires nodemon to be installed globally or as a dev dependency)

## 📄 Available Pages

- **Home** (`/`) - Hero section and featured products
- **Products** (`/products`) - Full product catalog
- **Product Detail** (`/product/:id`) - Individual product details
- **About** (`/about`) - Brand story and philosophy
- **Contact** (`/contact`) - Contact form

## 🔌 API Endpoints

### GET `/api/products`
Returns all products

**Response:**
```json
[
  {
    "id": 1,
    "name": "Luminizing Serum",
    "price": 39,
    "description": "...",
    "fullDescription": "...",
    "image": "...",
    "ingredients": "...",
    "size": "30ml"
  }
]
```

### GET `/api/products/:id`
Returns a single product by ID

### POST `/api/contact`
Submit contact form

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for contacting us!"
}
```

## 🎨 Design System

### Colors
- **Lunaria Beige**: `#F5F1EB`
- **Lunaria Rose**: `#F4E6E6`
- **Lunaria Charcoal**: `#2C2C2C`
- **Lunaria Cream**: `#FAF8F5`

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Inter (body text)

## 🚢 Building for Production

### Frontend
```bash
cd frontend
npm run build
```

The build output will be in the `dist/` folder.

### Backend
The backend is ready for production. You may want to:
- Add environment variables for configuration
- Set up proper logging
- Add database integration
- Implement authentication if needed

## 🔮 Future Enhancements

1. **User Authentication**: Add user accounts and order history
2. **Payment Integration**: Integrate Stripe or PayPal
3. **Database**: Replace JSON files with a proper database (MongoDB, PostgreSQL)
4. **Image Upload**: Add functionality to upload product images
5. **Search & Filters**: Add product search and filtering capabilities
6. **Reviews**: Allow customers to leave product reviews
7. **Email Service**: Integrate email service for contact form submissions
8. **SEO**: Add meta tags, Open Graph, and structured data
9. **Analytics**: Add Google Analytics or similar tracking
