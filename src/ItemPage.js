import PropTypes from "prop-types"
import "./ItemPage.scss"

const ItemPage = ({items}) => {
  return(
    <ul className="ItemPage__items">
      {items.map((item) => {
        <li key={item.id} className="ItemPage__item">
          {item.name}
        </li>
      })}
    </ul>
  )
}

ItemPage.propTypes = {
  items: PropTypes.array.isRequired
}

export default ItemPage