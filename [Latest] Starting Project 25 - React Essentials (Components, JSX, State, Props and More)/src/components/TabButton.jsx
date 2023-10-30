function TabButton(props) {
  return (
    <li>
      <button
        onClick={props.onSelect}
        className={props.isSelected ? "active" : ""}
      >
        {props.children}
      </button>
    </li>
  );
}

export default TabButton;
