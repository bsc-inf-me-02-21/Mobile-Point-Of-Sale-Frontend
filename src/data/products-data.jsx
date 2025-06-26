/*
export const ProductCategories = [
  { id: 1, category: "Food & Groceries" },
  { id: 2, category: "Beverages" },
  { id: 3, category: "Household & General Merchandise" },
  { id: 4, category: "Personal Care" },
  { id: 5, category: "Other/Miscellaneous" }
];


*/

// src/data/products-data.jsx
const Products = [
  {
    id: 1,
    name: "Coca-Cola",
    price: 1.99,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Lays Chips",
    price: 2.49,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Whole Milk",
    price: 3.29,
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Mineral Water",
    price: 1.29,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1544003484-3cd181d17917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "Chocolate Bar",
    price: 1.79,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1575377427642-087cf684f29d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    name: "Greek Yogurt",
    price: 2.99,
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 7,
    name: "Orange Juice",
    price: 3.49,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 8,
    name: "Granola Bars",
    price: 4.29,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1581093458791-8a4d1c3e1d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  }
];

export default Products;


/*

 const Products = [
  {
    id: 1,
    name: "Coca-Cola (300ml)",
    barcode: '22883300',
    price: 1000, // MWK
    cost: 700, // MWK
    category: "Drinks",
    general_category: "Beverages",
    per: "unit",
    product_image: '',
    expiry_date: '2025-12-31',
    stock_quantity: 70
  },
  {
    id: 2,
    name: "Sunseed Cooking Oil (2L)",
    barcode: '50012345',
    price: 6500,
    cost: 5000,
    category: "Cooking Essentials",
    general_category: "Food & Groceries",
    per: "bottle",
    product_image: '',
    expiry_date: '2026-06-15',
    stock_quantity: 45
  },
  {
    id: 3,
    name: "Malawi Gin (750ml)",
    barcode: '60098765',
    price: 15000,
    cost: 12000,
    category: "Alcohol",
    general_category: "Beverages",
    per: "bottle",
    product_image: '',
    expiry_date: '2030-01-01',
    stock_quantity: 20
  },
  {
    id: 4,
    name: "Cereal (500g)",
    barcode: '78901234',
    price: 4500,
    cost: 3200,
    category: "Breakfast",
    general_category: "Food & Groceries",
    per: "packet",
    product_image: '',
    expiry_date: '2025-11-20',
    stock_quantity: 30
  },
  {
    id: 5,
    name: "Fama Margarine (500g)",
    barcode: '99887766',
    price: 2800,
    cost: 2000,
    category: "Dairy & Spreads",
    general_category: "Food & Groceries",
    per: "tub",
    product_image: '',
    expiry_date: '2025-10-01',
    stock_quantity: 55
  },
  {
    id: 6,
    name: "Salt (500g)",
    barcode: '11223344',
    price: 800,
    cost: 550,
    category: "Spices & Condiments",
    general_category: "Food & Groceries",
    per: "packet",
    product_image: '',
    expiry_date: '2028-05-01',
    stock_quantity: 120
  },
  {
    id: 7,
    name: "Malawian Green Tea (25 bags)",
    barcode: '66554433',
    price: 2000,
    cost: 1500,
    category: "Drinks",
    general_category: "Beverages",
    per: "box",
    product_image: '',
    expiry_date: '2026-03-10',
    stock_quantity: 40
  },
  {
    id: 8,
    name: "Nali Sauce (Hot) (125ml)",
    barcode: '10203040',
    price: 1500,
    cost: 1000,
    category: "Spices & Condiments",
    general_category: "Food & Groceries",
    per: "bottle",
    product_image: '',
    expiry_date: '2027-08-01',
    stock_quantity: 60
  },
  {
    id: 9,
    name: "Chikuni (Maize Flour) (10kg)",
    barcode: '98765432',
    price: 12000,
    cost: 9500,
    category: "Staples",
    general_category: "Food & Groceries",
    per: "bag",
    product_image: '',
    expiry_date: '2026-01-01',
    stock_quantity: 25
  },
  {
    id: 10,
    name: "Rice (2kg)",
    barcode: '13579246',
    price: 5500,
    cost: 4000,
    category: "Staples",
    general_category: "Food & Groceries",
    per: "bag",
    product_image: '',
    expiry_date: '2027-02-01',
    stock_quantity: 35
  },
  {
    id: 11,
    name: "Washing Soap Bar (Sunlight)",
    barcode: '80070060',
    price: 900,
    cost: 600,
    category: "Household Cleaning",
    general_category: "Household & General Merchandise",
    per: "bar",
    product_image: '',
    expiry_date: '2028-12-31',
    stock_quantity: 80
  },
  {
    id: 12,
    name: "Sugar (1kg)",
    barcode: '44556677',
    price: 3800,
    cost: 2900,
    category: "Baking & Sweeteners",
    general_category: "Food & Groceries",
    per: "packet",
    product_image: '',
    expiry_date: '2027-07-01',
    stock_quantity: 65
  },
  {
    id: 13,
    name: "Bread (White Slice)",
    barcode: '22334455',
    price: 2500,
    cost: 1800,
    category: "Bakery",
    general_category: "Food & Groceries",
    per: "loaf",
    product_image: '',
    expiry_date: '2025-06-28', // Short shelf life
    stock_quantity: 50
  },
  {
    id: 14,
    name: "Matches (Box)",
    barcode: '77889900',
    price: 200,
    cost: 150,
    category: "Household Essentials",
    general_category: "Household & General Merchandise",
    per: "box",
    product_image: '',
    expiry_date: '2030-01-01',
    stock_quantity: 200
  },
  {
    id: 15,
    name: "Tomatoes",
    barcode: 'FRESHPROD01',
    price: 2000,
    cost: 1200,
    category: "Fresh Produce",
    general_category: "Food & Groceries",
    per: "kg",
    product_image: '',
    expiry_date: '2025-07-05',
    stock_quantity: 15
  },
  {
    id: 16,
    name: "Onions",
    barcode: 'FRESHPROD02',
    price: 1500,
    cost: 900,
    category: "Fresh Produce",
    general_category: "Food & Groceries",
    per: "kg",
    product_image: '',
    expiry_date: '2025-07-10',
    stock_quantity: 20
  },
  {
    id: 17,
    name: "Potatoes",
    barcode: 'FRESHPROD03',
    price: 2500,
    cost: 1800,
    category: "Fresh Produce",
    general_category: "Food & Groceries",
    per: "kg",
    product_image: '',
    expiry_date: '2025-07-15',
    stock_quantity: 25
  },
  {
    id: 18,
    name: "Eggs",
    barcode: 'DAIRY001',
    price: 350,
    cost: 250,
    category: "Dairy & Fresh",
    general_category: "Food & Groceries",
    per: "unit",
    product_image: '',
    expiry_date: '2025-07-10',
    stock_quantity: 100
  },
  {
    id: 19,
    name: "Bottled Water (500ml)",
    barcode: '90010020',
    price: 500,
    cost: 350,
    category: "Drinks",
    general_category: "Beverages",
    per: "unit",
    product_image: '',
    expiry_date: '2026-10-01',
    stock_quantity: 90
  },
  {
    id: 20,
    name: "Biscuits (Assorted) (200g)",
    barcode: '33221100',
    price: 1800,
    cost: 1300,
    category: "Snacks",
    general_category: "Food & Groceries",
    per: "packet",
    product_image: '',
    expiry_date: '2025-09-01',
    stock_quantity: 50
  },
  {
    id: 21,
    name: "Peanut Butter (500g)",
    barcode: '40506070',
    price: 4000,
    cost: 3000,
    category: "Spreads",
    general_category: "Food & Groceries",
    per: "jar",
    product_image: '',
    expiry_date: '2026-04-01',
    stock_quantity: 35
  },
  {
    id: 22,
    name: "Instant Noodles (Pack)",
    barcode: '88776655',
    price: 700,
    cost: 500,
    category: "Convenience Food",
    general_category: "Food & Groceries",
    per: "packet",
    product_image: '',
    expiry_date: '2025-11-01',
    stock_quantity: 80
  },
  {
    id: 23,
    name: "Toothpaste (Colgate) (100ml)",
    barcode: '11122233',
    price: 2500,
    cost: 1800,
    category: "Personal Care",
    general_category: "Personal Care",
    per: "tube",
    product_image: '',
    expiry_date: '2027-01-01',
    stock_quantity: 40
  },
  {
    id: 24,
    name: "Bar Soap (bathing)",
    barcode: '44455566',
    price: 1200,
    cost: 800,
    category: "Personal Care",
    general_category: "Personal Care",
    per: "bar",
    product_image: '',
    expiry_date: '2028-09-01',
    stock_quantity: 75
  },
  {
    id: 25,
    name: "Unga wa Mchele (Rice Flour) (1kg)",
    barcode: '77788899',
    price: 3000,
    cost: 2200,
    category: "Flours",
    general_category: "Food & Groceries",
    per: "packet",
    product_image: '',
    expiry_date: '2026-05-01',
    stock_quantity: 30
  },
  {
    id: 26,
    name: "Candles (Paraffin, Pack of 4)",
    barcode: '00112233',
    price: 1000,
    cost: 700,
    category: "Household Essentials",
    general_category: "Household & General Merchandise",
    per: "pack",
    product_image: '',
    expiry_date: '', // No specific expiry for candles
    stock_quantity: 60
  },
  {
    id: 27,
    name: "Torch Batteries (AA, Pack of 4)",
    barcode: '55667788',
    price: 1800,
    cost: 1200,
    category: "Electronics",
    general_category: "Household & General Merchandise",
    per: "pack",
    product_image: '',
    expiry_date: '2027-03-01',
    stock_quantity: 50
  },
  {
    id: 28,
    name: "Tea Leaves (Black) (250g)",
    barcode: '99001122',
    price: 3000,
    cost: 2200,
    category: "Drinks",
    general_category: "Beverages",
    per: "packet",
    product_image: '',
    expiry_date: '2026-08-01',
    stock_quantity: 30
  },
  {
    id: 29,
    name: "Beans (Dry) (1kg)",
    barcode: '66778899',
    price: 4500,
    cost: 3500,
    category: "Pulses & Grains",
    general_category: "Food & Groceries",
    per: "bag",
    product_image: '',
    expiry_date: '2027-04-01',
    stock_quantity: 28
  },
  {
    id: 30,
    name: "Sorghum Flour (1kg)",
    barcode: '33445566',
    price: 3200,
    cost: 2400,
    category: "Flours",
    general_category: "Food & Groceries",
    per: "packet",
    product_image: '',
    expiry_date: '2026-07-01',
    stock_quantity: 22
  },
  {
    id: 31,
    name: "Local Honey (500g)",
    barcode: '10101010',
    price: 6000,
    cost: 4500,
    category: "Local Produce",
    general_category: "Food & Groceries",
    per: "jar",
    product_image: '',
    expiry_date: '2027-11-01',
    stock_quantity: 18
  },
  {
    id: 32,
    name: "Air Freshener (Spray)",
    barcode: '20202020',
    price: 3000,
    cost: 2000,
    category: "Household Cleaning",
    general_category: "Household & General Merchandise",
    per: "can",
    product_image: '',
    expiry_date: '2026-09-01',
    stock_quantity: 40
  },
  {
    id: 33,
    name: "Lotion (Body Cream) (400ml)",
    barcode: '30303030',
    price: 5000,
    cost: 3800,
    category: "Personal Care",
    general_category: "Personal Care",
    per: "bottle",
    product_image: '',
    expiry_date: '2027-02-01',
    stock_quantity: 30
  },
  {
    id: 34,
    name: "Matches (Large Box)",
    barcode: '40404040',
    price: 1500,
    cost: 1000,
    category: "Household Essentials",
    general_category: "Household & General Merchandise",
    per: "box",
    product_image: '',
    expiry_date: '2030-01-01',
    stock_quantity: 70
  },
  {
    id: 35,
    name: "Plastic Buckets (20L)",
    barcode: '50505050',
    price: 8000,
    cost: 6000,
    category: "Household Goods",
    general_category: "Household & General Merchandise",
    per: "unit",
    product_image: '',
    expiry_date: '',
    stock_quantity: 15
  },
  {
    id: 36,
    name: "Wipes (Disinfectant) (50 count)",
    barcode: '60606060',
    price: 3500,
    cost: 2500,
    category: "Household Cleaning",
    general_category: "Household & General Merchandise",
    per: "pack",
    product_image: '',
    expiry_date: '2026-11-01',
    stock_quantity: 25
  },
  {
    id: 37,
    name: "Avocado",
    barcode: 'FRESHPROD04',
    price: 1000,
    cost: 600,
    category: "Fresh Produce",
    general_category: "Food & Groceries",
    per: "unit",
    product_image: '',
    expiry_date: '2025-07-03',
    stock_quantity: 40
  },
  {
    id: 38,
    name: "Local Groundnuts (Shelled) (500g)",
    barcode: 'LOCALSNACK01',
    price: 2500,
    cost: 1800,
    category: "Local Snacks",
    general_category: "Food & Groceries",
    per: "packet",
    product_image: '',
    expiry_date: '2026-03-01',
    stock_quantity: 30
  },
  {
    id: 39,
    name: "Bananas (Bunch)",
    barcode: 'FRESHPROD05',
    price: 1500,
    cost: 900,
    category: "Fresh Produce",
    general_category: "Food & Groceries",
    per: "bunch",
    product_image: '',
    expiry_date: '2025-06-30',
    stock_quantity: 20
  },
  {
    id: 40,
    name: "Pencils (Pack of 10)",
    barcode: 'STATIONERY01',
    price: 1200,
    cost: 800,
    category: "Stationery",
    general_category: "Other/Miscellaneous",
    per: "pack",
    product_image: '',
    expiry_date: '',
    stock_quantity: 50
  }
];

export default Products;

*/