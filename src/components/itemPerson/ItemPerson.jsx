function ItemPerson({ personIndex, personType, isActive, personTypeClick }) {
  return (
    <div
      className={`person-selection-item ${ isActive ? "active" : ""}`}
      onClick={() => personTypeClick(personIndex)}
    >
      {personType}
    </div>
  )
}

export default ItemPerson;