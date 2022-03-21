const Nav = (props) => {
  const {activeTab, onTabChange} = props
  const itemClass = (tabName) => `App__nav-item ${activeTab === tabName ? "selected" : ""}`
  return(
    <nav className="App__nav">
      <ul>
        <li className={itemClass("items")}>
          <button onClick={() => onTabChange("items")}>Items</button>
        </li>
        <li className={itemClass("cart")}>
          <button onClick={() => onTabChange("cart")}>Cart</button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav