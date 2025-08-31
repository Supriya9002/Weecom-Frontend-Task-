import { ProductsTable } from './ProductsTable';

export const ProductsDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Products</h1>
        <p className="text-gray-600">Manage your product catalog and inventory</p>
      </div>
      
      <ProductsTable />
    </div>
  );
};