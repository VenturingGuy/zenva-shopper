import PropTypes from "prop-types"
import "./Item.scss"

const Item = ({item, children}) => (
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
      {children}
    </div>
  </div>
)

Item.propTypes = {
  item: PropTypes.object.isRequired
}

export default Item