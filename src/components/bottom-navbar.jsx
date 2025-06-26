import "../styles/bottom-navbar.css";
import { MdPointOfSale } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineInventory } from "react-icons/md";
import { RiMore2Fill } from "react-icons/ri";
import { MdNoFood } from "react-icons/md";

const BottomNavBar = () => {
  return (
    <div className="BottomNavBarWrapper">
      <div className="NavSection active">
        <div className="IconWrapper">
          <MdNoFood className="Icon" />
        </div>
        <p>Products</p>
      </div>

      <div className="NavSection">
        <div className="IconWrapper">
          <GiShoppingCart className="Icon" />
        </div>
        <p>Sales</p>
      </div>

      <div className="NavSection">
        <div className="IconWrapper">
          <MdOutlineInventory className="Icon" />
        </div>
        <p>Inventory</p>
      </div>

      <div className="NavSection">
        <div className="IconWrapper">
          <RiMore2Fill className="Icon" />
        </div>
        <p>More</p>
      </div>
    </div>
  );
};

export default BottomNavBar;