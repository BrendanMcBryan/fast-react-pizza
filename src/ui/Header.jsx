import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">Fast React Pizza Bros</Link>
      <SearchOrder />

      <p>Taco Joe</p>
    </header>
  );
}

export default Header;
