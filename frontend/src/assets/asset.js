/**
 * Asset.js - Medical Delivery Product Assets
 * Imports all images from assets directory and exports product data
 */

// Import all images from assets directory using ES6 module syntax
import andMachines from "./and-machines-aEwgvCxW674-unsplash.jpg";
import andriiLeonov from "./andrii-leonov-LuH7CGBqRhw-unsplash.jpg";
import avinashKumar from "./avinash-kumar-K1T4pKWpr8k-unsplash.jpg";
import batchWisconsin1 from "./batch-by-wisconsin-hemp-scientific-eJPvAjTqU3E-unsplash.jpg";
import batchWisconsin2 from "./batch-by-wisconsin-hemp-scientific-i5V-eslFXS4-unsplash.jpg";
import batchWisconsin3 from "./batch-by-wisconsin-hemp-scientific-meFBqAS1OPY-unsplash.jpg";
import danielDan1 from "./daniel-dan-B0rSoJt1KkM-unsplash.jpg";
import danielDan2 from "./daniel-dan-bIX1al7pjf4-unsplash.jpg";
import danielDan3 from "./daniel-dan-i5CCbf_0vbw-unsplash.jpg";
import danielDan4 from "./daniel-dan-I35HYJogbms-unsplash.jpg";
import danielDan5 from "./daniel-dan-lvi5tyITD14-unsplash.jpg";
import daniloAlvesd from "./danilo-alvesd-a7OdG45prSM-unsplash.jpg";
import jiriSuchy from "./jiri-suchy-nvmVK78tE5I-unsplash.jpg";
import littlePlant from "./little-plant-ykX3Wb8y4XI-unsplash.jpg";
import medicineCapsules from "./medicine-capsules-global-health-with-geometric-pattern-digital-remix.jpg";
import pietrozj from "./pexels-pietrozj-360622.jpg";
import supliful1 from "./supliful-supplements-on-demand-CHJWE6pHc9E-unsplash.jpg";
import supliful2 from "./supliful-supplements-on-demand-saiTWnxaYAc-unsplash.jpg";
import towfiquBarbhuiya from "./towfiqu-barbhuiya-w8p9cQDLX7I-unsplash.jpg";

// Export image URLs for use in products
export const imageAssets = {
  andMachines,
  andriiLeonov,
  avinashKumar,
  batchWisconsin1,
  batchWisconsin2,
  batchWisconsin3,
  danielDan1,
  danielDan2,
  danielDan3,
  danielDan4,
  danielDan5,
  daniloAlvesd,
  jiriSuchy,
  littlePlant,
  medicineCapsules,
  pietrozj,
  supliful1,
  supliful2,
  towfiquBarbhuiya,
};

// Current date for product entries
const currentDate = new Date().toISOString();

// Product array with all required properties
export const products = [
  {
    _id: "prod_001",
    name: "Premium Vitamin D3 Supplements",
    description:
      "High-potency vitamin D3 capsules for bone health and immune support. Contains 5000 IU per serving.",
    price: 24.99,
    images: [daniloAlvesd, supliful1],
    category: "Vitamins",
    subCategory: "Vitamin D",
    gender: "unisex",
    ageCategory: "adults",
    sizes: ["60 capsules", "120 capsules", "180 capsules"],
    date: currentDate,
    bestSeller: true,
  },
  {
    _id: "prod_002",
    name: "Organic Hemp Extract Oil",
    description:
      "Premium full-spectrum hemp extract for stress relief and relaxation. Third-party lab tested.",
    price: 49.99,
    images: [batchWisconsin1, batchWisconsin2, batchWisconsin3],
    category: "Supplements",
    subCategory: "Hemp Oil",
    gender: "unisex",
    ageCategory: "adults",
    sizes: ["30ml", "60ml", "100ml"],
    date: currentDate,
    bestSeller: true,
  },
  {
    _id: "prod_003",
    name: "Immune Boost Complex",
    description:
      "Powerful immune support formula with zinc, vitamin C, and elderberry extract.",
    price: 29.99,
    images: [avinashKumar, medicineCapsules],
    category: "Immune Support",
    subCategory: "Multi-Vitamin",
    gender: "unisex",
    ageCategory: "adults",
    sizes: ["30 tablets", "60 tablets", "90 tablets"],
    date: currentDate,
    bestSeller: true,
  },
  {
    _id: "prod_004",
    name: "Probiotic Digestive Health",
    description:
      "Advanced probiotic blend with 50 billion CFU for gut health and digestion support.",
    price: 34.99,
    images: [littlePlant, towfiquBarbhuiya],
    category: "Digestive Health",
    subCategory: "Probiotics",
    gender: "unisex",
    ageCategory: "adults",
    sizes: ["30 capsules", "60 capsules", "90 capsules"],
    date: currentDate,
    bestSeller: false,
  },
  {
    _id: "prod_005",
    name: "Magnesium Glycinate",
    description:
      "Highly absorbable magnesium supplement for sleep, relaxation, and muscle recovery.",
    price: 19.99,
    images: [danielDan1, danielDan2],
    category: "Minerals",
    subCategory: "Magnesium",
    gender: "unisex",
    ageCategory: "adults",
    sizes: ["60 capsules", "120 capsules"],
    date: currentDate,
    bestSeller: false,
  },
  {
    _id: "prod_006",
    name: "Omega-3 Fish Oil",
    description:
      "Pure fish oil with EPA and DHA for heart health and brain function support.",
    price: 27.99,
    images: [supliful2, andMachines],
    category: "Heart Health",
    subCategory: "Omega-3",
    gender: "unisex",
    ageCategory: "older",
    sizes: ["60 softgels", "120 softgels", "180 softgels"],
    date: currentDate,
    bestSeller: true,
  },
  {
    _id: "prod_007",
    name: "B-Complex Vitamins",
    description:
      "Complete B-vitamin complex for energy metabolism and nervous system support.",
    price: 22.99,
    images: [andriiLeonov, jiriSuchy],
    category: "Vitamins",
    subCategory: "Vitamin B",
    gender: "unisex",
    ageCategory: "adults",
    sizes: ["60 tablets", "120 tablets"],
    date: currentDate,
    bestSeller: false,
  },
  {
    _id: "prod_008",
    name: "Turmeric Curcumin Complex",
    description:
      "Anti-inflammatory turmeric formula with black pepper extract for enhanced absorption.",
    price: 26.99,
    images: [danielDan3, danielDan4, danielDan5],
    category: "Anti-Inflammatory",
    subCategory: "Herbal",
    gender: "unisex",
    ageCategory: "adults",
    sizes: ["60 capsules", "120 capsules"],
    date: currentDate,
    bestSeller: false,
  },
  {
    _id: "prod_009",
    name: "Zinc Picolinate",
    description:
      "Highly bioavailable zinc supplement for immune function and skin health.",
    price: 15.99,
    images: [pietrozj],
    category: "Minerals",
    subCategory: "Zinc",
    gender: "unisex",
    ageCategory: "adults",
    sizes: ["30 tablets", "60 tablets", "90 tablets"],
    date: currentDate,
    bestSeller: false,
  },
  {
    _id: "prod_010",
    name: "Ashwagandha Root Extract",
    description:
      "Adaptogenic herb for stress management, energy, and overall wellness.",
    price: 21.99,
    images: [batchWisconsin1, supliful1],
    category: "Herbal Supplements",
    subCategory: "Adaptogens",
    gender: "unisex",
    ageCategory: "adults",
    sizes: ["60 capsules", "90 capsules", "120 capsules"],
    date: currentDate,
    bestSeller: true,
  },
  {
    _id: "prod_011",
    name: "Coenzyme Q10 (CoQ10)",
    description:
      "Essential coenzyme for heart health and cellular energy production.",
    price: 32.99,
    images: [towfiquBarbhuiya, andMachines],
    category: "Heart Health",
    subCategory: "Antioxidants",
    gender: "unisex",
    ageCategory: "older",
    sizes: ["30 capsules", "60 capsules", "90 capsules"],
    date: currentDate,
    bestSeller: false,
  },
  {
    _id: "prod_012",
    name: "Multivitamin Daily Complex",
    description:
      "Complete daily multivitamin for men and women with essential nutrients.",
    price: 39.99,
    images: [medicineCapsules, avinashKumar],
    category: "Vitamins",
    subCategory: "Multi-Vitamin",
    gender: "unisex",
    ageCategory: "adults",
    sizes: ["30 tablets", "60 tablets", "90 tablets"],
    date: currentDate,
    bestSeller: true,
  },
];

// Export categories for filtering
export const categories = [
  "Vitamins",
  "Supplements",
  "Immune Support",
  "Digestive Health",
  "Minerals",
  "Heart Health",
  "Anti-Inflammatory",
  "Herbal Supplements",
];

// Export sub-categories for filtering
export const subCategories = [
  "Vitamin D",
  "Hemp Oil",
  "Multi-Vitamin",
  "Probiotics",
  "Magnesium",
  "Omega-3",
  "Vitamin B",
  "Herbal",
  "Zinc",
  "Adaptogens",
  "Antioxidants",
];

// Default export for convenient importing
export default products;
