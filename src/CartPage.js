import PropTypes from "prop-types"
import Item from "./Item"
import "./CartPage.scss"

const CartPage = ({ items }) => {
  return(
    <ul className="CartPage__items">
      {items.map((item) => 
        <li key={item.id} className="CartPage__item">
          <Item
            item={item} 
          />
        </li>
      )}
    </ul>
  )
}

CartPage.propTypes = {
  items: PropTypes.array.isRequired
}

export default CartPage