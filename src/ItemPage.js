import PropTypes from "prop-types"
import Item from "./Item"
import "./ItemPage.scss"

const ItemPage = ({items, onAddToCart}) => {
  return(
    <ul className="ItemPage__items">
      {items.map((item) => 
        <li key={item.id} className="ItemPage__item">
          <Item
            item={item}
            onAddToCart={() => onAddToCart(item)} 
          />
        </li>
      )}
    </ul>
  )
}

ItemPage.propTypes = {
  items: PropTypes.array.isRequired
}

export default ItemPage