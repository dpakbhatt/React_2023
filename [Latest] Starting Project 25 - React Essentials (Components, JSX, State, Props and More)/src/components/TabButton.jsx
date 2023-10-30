function TabButton({ isSelected, children, ...props }) {
  return (
    <li>
      <button {...props} className={isSelected ? "active" : ""}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
