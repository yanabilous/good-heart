
import HelpOptionItem from "../helpOptionItem/helpOptionItem";


function HelpOptions({ helpOptions, activeOption, helpOptionClick }) {
  return (
    <div className="help-options">
      {
        helpOptions.map((option, index) => (
          <HelpOptionItem
            key={index}
            optionIndex={index}
            helpText={option.helpText}
            helpIcon={option.helpIcon}
            isActive={activeOption === index}
            helpOptionClick={helpOptionClick}
          />
        ))
      }
    </div>
  )
}

export default HelpOptions;
