# Product Dashboard

A modern, responsive product management dashboard built with React, TailwindCSS, and shadcn/ui. This application demonstrates CRUD operations using the DummyJSON API with React Query for efficient data management.

## Features

- **Responsive Dashboard Layout**: Clean sidebar navigation and header design
- **Product Management**: Full CRUD operations (Create, Read, Update, Delete)
- **Advanced Filtering**: Search by name and filter by category
- **Pagination**: Navigate through large product datasets efficiently  
- **Loading States**: Skeleton loaders and proper error handling
- **Modern UI**: Built with shadcn/ui components and TailwindCSS
- **Data Caching**: React Query integration for optimized performance

## Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **TanStack Query (React Query)** - Data fetching and state management
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation
- **Lucide React** - Icon library
- **Vite** - Fast build tool and development server

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd product-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## API Integration

This dashboard uses the [DummyJSON Products API](https://dummyjson.com/docs/products) which provides:

- **GET** `/products` - Fetch paginated products list
- **GET** `/products/search` - Search products by name
- **GET** `/products/categories` - Get available categories
- **POST** `/products/add` - Add new product (simulated)
- **PUT** `/products/{id}` - Update existing product (simulated)
- **DELETE** `/products/{id}` - Delete product (simulated)

The API includes artificial delays to demonstrate proper loading states and uses simulated CRUD operations that don't persist data on the server.

## Project Structure

```
src/
├── components/
│   ├── layout/           # Layout components (Header, Sidebar, Layout)
│   ├── products/         # Product-related components
│   └── ui/              # shadcn/ui components
├── hooks/               # Custom React hooks
├── services/            # API service functions
├── types/               # TypeScript type definitions
└── lib/                 # Utility functions
```

## Key Features Implementation

### Data Management
- React Query for caching, background updates, and optimistic updates
- Automatic refetching after mutations
- Loading and error states with user-friendly messages

### User Experience
- Responsive design that works on mobile, tablet, and desktop
- Skeleton loading states for smooth user experience
- Toast notifications for user feedback
- Confirmation dialogs for destructive actions

### Form Handling
- React Hook Form with Zod validation
- Dynamic form fields based on available categories
- Real-time validation with helpful error messages

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).