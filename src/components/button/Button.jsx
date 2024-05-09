

function Button({ primaryBtnText, buttonClick, disabled, type }) {
  return (
    <button
      type={type}
      className="submit-btn"
      onClick={buttonClick}
      disabled={disabled}
    >
      {primaryBtnText}
    </button>
  )
}

export default Button;
