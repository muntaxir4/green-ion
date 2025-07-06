export interface Product {
  id: string;
  name: string;
  category: 'battery' | 'raw-lithium' | 'processed';
  description: string;
  image: string;
  specifications: Record<string, string>;
  pricePerUnit: number;
  unit: string;
  minOrder: number;
  availability: 'in-stock' | 'limited' | 'pre-order';
  origin: string;
  purity?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "li-carbonate-1",
    name: "Lithium Carbonate (Battery Grade)",
    category: "processed",
    description: "High-purity lithium carbonate extracted from Kashmir's mineral-rich deposits. Perfect for EV battery manufacturing.",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg",
    specifications: {
      "Purity": "99.5%",
      "Particle Size": "10-50 μm",
      "Moisture": "< 0.5%",
      "Iron Content": "< 10 ppm"
    },
    pricePerUnit: 24500,
    unit: "per metric ton",
    minOrder: 5,
    availability: "in-stock",
    origin: "Kashmir, India",
    purity: "99.5%"
  },
  {
    id: "li-hydroxide-1",
    name: "Lithium Hydroxide Monohydrate",
    category: "processed",
    description: "Premium grade lithium hydroxide for high-performance battery cathodes. Sustainably extracted and processed.",
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",
    specifications: {
      "Purity": "99.8%",
      "Li2O Content": "≥ 56.5%",
      "Sulfate": "< 0.01%",
      "Chloride": "< 0.003%"
    },
    pricePerUnit: 28000,
    unit: "per metric ton",
    minOrder: 3,
    availability: "in-stock",
    origin: "Kashmir, India",
    purity: "99.8%"
  },
  {
    id: "ev-battery-pack",
    name: "EV Battery Pack (60kWh)",
    category: "battery",
    description: "Complete lithium-ion battery pack for electric vehicles. Built with our premium Kashmir lithium.",
    image: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg",
    specifications: {
      "Capacity": "60 kWh",
      "Voltage": "400V",
      "Cells": "192 cells",
      "Weight": "385 kg",
      "Cycle Life": "3000+ cycles"
    },
    pricePerUnit: 850000,
    unit: "per pack",
    minOrder: 1,
    availability: "pre-order",
    origin: "Manufactured in India"
  },
  {
    id: "mobile-battery",
    name: "Smartphone Battery (Li-Po)",
    category: "battery",
    description: "High-density lithium polymer batteries for mobile devices. Long-lasting and fast-charging.",
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
    specifications: {
      "Capacity": "4000-5000 mAh",
      "Voltage": "3.7V",
      "Cycle Life": "800+ cycles",
      "Fast Charging": "Yes"
    },
    pricePerUnit: 1200,
    unit: "per unit",
    minOrder: 100,
    availability: "in-stock",
    origin: "Manufactured in India"
  },
  {
    id: "raw-lithium-ore",
    name: "Raw Lithium Ore (Spodumene)",
    category: "raw-lithium",
    description: "Unprocessed lithium ore directly from our Kashmir mines. High lithium content spodumene concentrate.",
    image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg",
    specifications: {
      "Li2O Content": "6-7%",
      "Moisture": "< 10%",
      "Particle Size": "0-50mm",
      "Iron Content": "< 1%"
    },
    pricePerUnit: 1200,
    unit: "per metric ton",
    minOrder: 50,
    availability: "in-stock",
    origin: "Kashmir, India"
  },
  {
    id: "industrial-battery",
    name: "Industrial Energy Storage Battery",
    category: "battery",
    description: "Large-scale lithium battery systems for grid storage and industrial applications.",
    image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
    specifications: {
      "Capacity": "1 MWh",
      "Voltage": "1000V",
      "Efficiency": "95%+",
      "Lifespan": "20+ years"
    },
    pricePerUnit: 45000000,
    unit: "per system",
    minOrder: 1,
    availability: "pre-order",
    origin: "Manufactured in India"
  }
];

export const getProductsByCategory = (category?: string) => {
  if (!category) return PRODUCTS;
  return PRODUCTS.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return PRODUCTS.find(product => product.id === id);
};