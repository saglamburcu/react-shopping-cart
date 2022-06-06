import { GiShoppingBag } from "react-icons/gi";
import { useGlobalContext } from "./context";

function Navbar() {
  const { total } = useGlobalContext();

  return (
    <nav className="navbar">
      <h1>Shopping Cart</h1>
      <div className="icon">
        <span>{total.amount}</span>
        <div className="bag"><GiShoppingBag /></div>
      </div>
    </nav>
  )
};

export default Navbar;