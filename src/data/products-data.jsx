import Castel from "../images/products/castel.jpg";
import Baby from "../images/products/baby.png";
import Green from "../images/products/green.jpg";
import Sugar from "../images/products/sugar.jpg";
import Kazinga from "../images/products/kazinga.png";
import Topsoy from "../images/products/topsoy.jpg";
import Chill from "../images/products/chill.png";
import Kk from "../images/products/kk.png";
import Topsoy2 from "../images/products/topsoy2.jpg";
import Dopel from "../images/products/dopel.png";
import Nivea from "../images/products/nivea.jpg";
import Gin from "../images/products/gin.jpg";
import Protex from "../images/products/protex.png";
import CarlsbergSpecial from "../images/products/carlsbergSpecial.png";
import DawnRefresh from "../images/products/dawn-refresh.png";


const Products = [
  {
    id: "1177654300",
    name: "Castel Beer",
    price: 2000,
    category: "Alcohol",
    image: Castel,
    quantity: 30,
    minStockLevel: 10, // Added minStockLevel
    expiryDate: "2026-12-31", // Added expiryDate
  },
  {
    id: "1177654301",
    name: "Baby Gin",
    price: 7500,
    category: "Alcohol",
    image: Baby,
    quantity: 25,
    minStockLevel: 8,
    expiryDate: "2027-06-15",
  },
  {
    id: "1177654302",
    name: "Carlsberg Green",
    price: 2500,
    category: "Alcohol",
    image: Green,
    quantity: 50,
    minStockLevel: 15,
    expiryDate: "2026-10-01",
  },
  {
    id: "1177654303",
    name: "Illovo Sugar 1kg",
    price: 4000,
    category: "Groceries",
    image: Sugar,
    quantity: 100,
    minStockLevel: 30,
    expiryDate: "2028-01-20",
  },
  {
    id: "1177654304",
    name: "Kazinga Cooking Oil",
    price: 30000,
    category: "Groceries",
    image: Kazinga,
    quantity: 40,
    minStockLevel: 10,
    expiryDate: "2027-09-01",
  },
  {
    id: "1177654305",
    name: "Topsoy Green",
    price: 1000,
    category: "Food",
    image: Topsoy,
    quantity: 20,
    minStockLevel: 5,
    expiryDate: "2026-11-01",
  },
  {
    id: "1177654306",
    name: "Carlsberg Chill",
    price: 1000,
    category: "Alcohol",
    image: Chill,
    quantity: 60,
    minStockLevel: 20,
    expiryDate: "2026-08-01",
  },
  {
    id: "1177654307",
    name: "Kuche Kuche",
    price: 2000,
    category: "Alcohol",
    image: Kk,
    quantity: 120,
    minStockLevel: 40,
    expiryDate: "2027-03-01",
  },
  {
    id: "1177654308",
    name: "Topsoy Yellow",
    price: 1000,
    category: "Food",
    image: Topsoy2,
    quantity: 15,
    minStockLevel: 5,
    expiryDate: "2026-10-01",
  },
  {
    id: "1177654309",
    name: "Dopel Munich",
    price: 4000,
    category: "Alcohol",
    image: Dopel,
    quantity: 35,
    minStockLevel: 10,
    expiryDate: "2027-01-01",
  },
  {
    id: "1177654310",
    name: "Nivea Cream",
    price: 6000,
    category: "Beauty",
    image: Nivea,
    quantity: 28,
    minStockLevel: 7,
    expiryDate: "2028-05-01",
  },
  {
    id: "1177654311",
    name: "Gin",
    price: 12000,
    category: "Alcohol",
    image: Gin,
    quantity: 22,
    minStockLevel: 6,
    expiryDate: "2027-07-01",
  },
  {
    id: "1177654312",
    name: "Protex Soap",
    price: 5500,
    category: "Personal Care",
    image: Protex,
    quantity: 80,
    minStockLevel: 25,
    expiryDate: "2028-02-01",
  },
  {
    id: "6005165000890",
    name: "Carlsberg Special",
    price: 2200,
    category: "Alcohol",
    image: CarlsbergSpecial,
    quantity: 45,
    minStockLevel: 15,
    expiryDate: "2026-09-01",
  },
  {
    id: "6001087009911",
    name: "Dawn Refresh Lotion",
    price: 7000,
    category: "Personal Care",
    image: DawnRefresh,
    quantity: 70,
    minStockLevel: 20,
    expiryDate: "2028-04-01",
  },
];

export default Products;
