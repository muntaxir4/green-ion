import { atom } from "recoil";

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
  image: string;
}

export interface Order {
  id: string;
  customerEmail: string;
  products: Array<{
    productId: string;
    name: string;
    quantity: number;
    priceAtTime: number;
    unit: string;
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

export const isLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
});

export const userEmail = atom({
  key: "userEmail",
  default: "",
});

export const cartItems = atom<CartItem[]>({
  key: "cartItems",
  default: [],
});

export const userOrders = atom<Order[]>({
  key: "userOrders",
  default: [
    {
      id: "ORD-1704067200-001",
      customerEmail: "",
      products: [
        {
          productId: "li-carbonate-1",
          name: "Lithium Carbonate (Battery Grade)",
          quantity: 10,
          priceAtTime: 24500,
          unit: "per metric ton"
        }
      ],
      totalAmount: 245000,
      status: "delivered",
      orderDate: "2024-01-15",
      estimatedDelivery: "2024-02-05",
      shippingAddress: {
        company: "Sample Manufacturing Co.",
        address: "Industrial Area, Sector 5",
        city: "Gurgaon",
        state: "Haryana",
        country: "India",
        pincode: "122001"
      },
      trackingNumber: "GI240115"
    },
    {
      id: "ORD-1704153600-002",
      customerEmail: "",
      products: [
        {
          productId: "li-hydroxide-1",
          name: "Lithium Hydroxide Monohydrate",
          quantity: 5,
          priceAtTime: 28000,
          unit: "per metric ton"
        },
        {
          productId: "mobile-battery",
          name: "Smartphone Battery (Li-Po)",
          quantity: 500,
          priceAtTime: 1200,
          unit: "per unit"
        }
      ],
      totalAmount: 740000,
      status: "in-transit",
      orderDate: "2024-01-22",
      estimatedDelivery: "2024-02-12",
      shippingAddress: {
        company: "Tech Solutions Pvt Ltd",
        address: "Electronics Hub, Phase 2",
        city: "Bangalore",
        state: "Karnataka",
        country: "India",
        pincode: "560001"
      },
      trackingNumber: "GI240122"
    },
    {
      id: "ORD-1704240000-003",
      customerEmail: "",
      products: [
        {
          productId: "ev-battery-pack",
          name: "EV Battery Pack (60kWh)",
          quantity: 2,
          priceAtTime: 850000,
          unit: "per pack"
        }
      ],
      totalAmount: 1700000,
      status: "processing",
      orderDate: "2024-01-28",
      estimatedDelivery: "2024-02-18",
      shippingAddress: {
        company: "Green Motors Ltd",
        address: "Auto Complex, NH-8",
        city: "Chennai",
        state: "Tamil Nadu",
        country: "India",
        pincode: "600001"
      },
      trackingNumber: "GI240128"
    }
  ],
});

export const isCheckingOut = atom({
  key: "isCheckingOut",
  default: false,
});
