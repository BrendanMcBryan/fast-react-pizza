import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

function Header() {
  return (
    <header>
      <Link to='/'>Fast React Pizza Bros</Link>
<SearchOrder />


      <p>Taco Joe</p>
    </header>
  )
}

export default Header
