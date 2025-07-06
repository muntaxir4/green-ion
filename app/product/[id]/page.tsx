import ProductDetail from "@/components/custom/products/ProductDetail";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return <ProductDetail productId={params.id} />;
}