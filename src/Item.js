import PropTypes from "prop-types"
import "./Item.scss"

const Item = ({item, onAddToCart}) => (
  <div className="Item">
    <div className="Item__left">
      <div className="Item__image"/>
      <div className="Item__title">
        {item.name}
      </div>
      <div className="Item__description">
        {item.description}
      </div>
    </div>
    <div className="Item__right">
      <div className="Item__price">
        ${item.price}
      </div>
      <button className="Item__add-to-cart" onClick={onAddToCart}>
        Add to cart
      </button>
    </div>
  </div>
)

Item.propTypes = {
  item: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired
}

export default Item