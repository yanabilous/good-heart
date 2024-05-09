import "../../styles/helpOptionItem.css";
import cases from "../../assets/svg/cases.svg";

function HelpOptionItem({ optionIndex, helpIcon, helpText, isActive, helpOptionClick }) {
  return (
    <div className={`help-option-item ${ isActive ? "active" : ""}`}
      onClick={() => helpOptionClick(optionIndex)} 
    >
      <div className="help-icon">
        <svg>
          <use xlinkHref={`${cases}#${helpIcon}`} alt={helpText}></use>
        </svg>
      </div>
      <div className="help-text">{helpText}</div>
    </div>
  )
}

export default HelpOptionItem;
