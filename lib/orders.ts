export interface Order {
  id: string;
  customerEmail: string;
  products: Array<{
    productId: string;
    quantity: number;
    priceAtTime: number;
  }>;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'in-transit' | 'delivered' | 'cancelled';
  orderDate: string;
  estimatedDelivery: string;
  shippingAddress: {
    company: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
  trackingNumber?: string;
}

export const DEMO_ORDERS: Order[] = [
  {
    id: "ORD-2024-001",
    customerEmail: "demo@gmail.com",
    products: [
      { productId: "li-carbonate-1", quantity: 10, priceAtTime: 24500 },
      { productId: "ev-battery-pack", quantity: 2, priceAtTime: 850000 }
    ],
    totalAmount: 1945000,
    status: "delivered",
    orderDate: "2024-01-15",
    estimatedDelivery: "2024-02-15",
    trackingNumber: "GI2024001",
    shippingAddress: {
      company: "Tesla Manufacturing",
      address: "Gigafactory 1, Electric Avenue",
      city: "Sparks",
      state: "Nevada",
      country: "USA",
      pincode: "89434"
    }
  },
  {
    id: "ORD-2024-002",
    customerEmail: "demo@gmail.com",
    products: [
      { productId: "li-hydroxide-1", quantity: 5, priceAtTime: 28000 }
    ],
    totalAmount: 140000,
    status: "in-transit",
    orderDate: "2024-01-20",
    estimatedDelivery: "2024-02-20",
    trackingNumber: "GI2024002",
    shippingAddress: {
      company: "Samsung SDI",
      address: "Battery Complex, Tech Park",
      city: "Seoul",
      state: "Seoul",
      country: "South Korea",
      pincode: "06292"
    }
  },
  {
    id: "ORD-2024-003",
    customerEmail: "demo@gmail.com",
    products: [
      { productId: "mobile-battery", quantity: 1000, priceAtTime: 1200 }
    ],
    totalAmount: 1200000,
    status: "processing",
    orderDate: "2024-01-25",
    estimatedDelivery: "2024-02-25",
    trackingNumber: "GI2024003",
    shippingAddress: {
      company: "Apple Inc.",
      address: "1 Apple Park Way",
      city: "Cupertino",
      state: "California",
      country: "USA",
      pincode: "95014"
    }
  }
];

export const getOrdersByEmail = (email: string) => {
  return DEMO_ORDERS.filter(order => order.customerEmail === email);
};

export const getOrderById = (id: string) => {
  return DEMO_ORDERS.find(order => order.id === id);
};