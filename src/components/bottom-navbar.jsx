import {Link} from "react-router-dom";
import "../styles/bottom-navbar.css";
import { MdPointOfSale } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineInventory } from "react-icons/md";
import { RiMore2Fill } from "react-icons/ri";
import { MdNoFood } from "react-icons/md";

const BottomNavBar = () => {
  return (
    <div className="BottomNavBarWrapper">
      <Link 
        className="NavSection active"
        to="/products"
        >
        <div className="IconWrapper">
          <MdNoFood className="Icon" />
        </div>
        <p>Products</p>
      </Link>

      <Link 
        className="NavSection"
        to="/sales"
        >
        <div className="IconWrapper">
          <GiShoppingCart className="Icon" />
        </div>
        <p>Sales</p>
      </Link>

      <Link
       className="NavSection"
        to="/inventory"
        >
        <div className="IconWrapper">
          <MdOutlineInventory className="Icon" />
        </div>
        <p>Inventory</p>
      </Link>

      <Link 
       className="NavSection"
       to="/more"
       >
        <div className="IconWrapper">
          <RiMore2Fill className="Icon" />
        </div>
        <p>More</p>
      </Link>
    </div>
  );
};

export default BottomNavBar;