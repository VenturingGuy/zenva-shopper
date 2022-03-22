import PropTypes from "prop-types"
import Item from "./Item"
import "./CartPage.scss"

const CartPage = ({ items, onAddOne, onRemoveOne }) => {
  return(
    <ul className="CartPage__items">
      {items.map((item) => 
        <li key={item.id} className="CartPage__item">
          <Item item={item}>
            <div className="CartPage__controls">
              <button
                className="CartPage__remove-one"
                onClick={() => onRemoveOne(item)}
              >
                -
              </button>
              <span className="CartPage__count">{item.count}</span>
              <button
                className="CartPage__add-one"
                onClick={() => onAddOne(item)}
              >
                +
              </button>
            </div>
          </Item>
        </li>
      )}
    </ul>
  )
}

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
  onAddOne: PropTypes.func.isRequired
}

export default CartPage