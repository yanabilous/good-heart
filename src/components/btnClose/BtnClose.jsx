
import cases from "../../assets/svg/cases.svg";

function PopupClose( { closePopup } ) {
  return (
    <div className="popup-close"
      onClick={closePopup}
    >
      <svg>
        <use xlinkHref={`${cases}#close-popup-icon`} alt="Close"></use>
      </svg>
    </div>
  )
}

export default PopupClose;
