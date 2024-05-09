
import ItemPerson from "../itemPerson/ItemPerson";

function TogglePerson ({ personTypes, activePerson, personTypeClick }) {
  return (
    <div className="person-selection">
      {
        Array.isArray(personTypes) ?
        personTypes.map((type, index) => (
          <ItemPerson
            key={index}
            personIndex={index}
            personType={type}
            isActive={activePerson === index}
            personTypeClick={personTypeClick}
          />
        ))
        : null
      }
    </div>
  );
}

export default TogglePerson;

