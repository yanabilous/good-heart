import { useState} from "react";
import TogglePerson from "../togglePerson/TogglePerson";
import Individual from "../individual/Individual";
import LegalEntity from "../legalEntity/LegalEntity";
import Button from "../button/Button";
import HelpOptions from "../helpOptions/helpOptions";
import FinancialHelp from "../financialHelp/financialHelp";
import MakeHelp from "../makeHelp/makeHelp";
import MaterialHelp from "../materialHelp/materialHelp";
import VoluntaryHelp from "../voluntaryHelp/voluntaryHelp";
import PopupClose from "../btnClose/BtnClose";

function Modal({closePopup}) {
  const [formData, setFormData] = useState({});
  // const [isFormValid, setIsFormValid] = useState(false);
  const [personTypes] = useState(["Фіз.особа", "Юр.особа"]);
  const [activePerson, setActivePerson] = useState(0);
  // const [inputs, setInputs] = useState(initialPersonState);
  const [helpOptions] = useState([
    {helpText: "Зробити", helpIcon: "hand-icon"},
    {helpText: "Фінансова допомога", helpIcon: "wallet-icon"},
    {helpText: "Матеріальна допомога", helpIcon: "clothes-icon"},
    {helpText: "Волонтерство", helpIcon: "heart-icon"}
  ]);
  const [activeOption, setActiveOption] = useState(1);
  const [paymentMethods] = useState([
    {methodText: "Карта Visa/MasterCard", methodIcon: "mastercard-icon"},
    {methodText: "Приват24", methodIcon: "privat24"},
    {methodText: "Термінали України", methodIcon: "terminal-icon"},
    {methodText: "WebMoney", methodIcon: "webmoney-icon1"},
    {methodText: "PayPal", methodIcon: "paypal-icon"}
  ]);
  const [activeMethod, setActiveMethod] = useState(0);
  const [creditCard, setCreditCard] = useState({
    cardNumber1: "",
    cardNumber2: "",
    cardNumber3: "",
    cardNumber4: "",
    cardExpirationDate: "",
    cardCvv: ""
  });
  const [primaryBtnText] = useState("Допомогти");
  const [isDisabled, setIsDisabled] = useState(false);

  const helpOptionClick = (optionIndex) => {
    setActiveOption(optionIndex);
  };

  const personTypeClick = (personIndex) => {
    setActivePerson(personIndex);
  };

  // const onInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setInputs({ ...inputs, [name]: value });
  // };

  const onFormSubmit = () => {
    setIsDisabled(true);
    console.log(formData);
    console.log(creditCard);

    alert("Form is submitted!");
    resetForm();
  };

  const resetForm = () => {
    // setInputs(initialPersonState);
    setIsDisabled(false);
  };

  const displayHelpContent = () => {
    switch (activeOption) {
      case 0:
        return <MakeHelp/>;
      case 1:
        return <FinancialHelp
          paymentMethods={paymentMethods}
          activeMethod={activeMethod}
          financialHelpClick={financialHelpClick}
          creditCard={creditCard}
          onInputCardChange={onInputCardChange}
          onInputCardKeyUp={onInputCardKeyUp}
        />;
      case 2:
        return <MaterialHelp/>;
      case 3:
        return <VoluntaryHelp/>;
      default:
        return <div>Not found!</div>;
    }
  };

  const financialHelpClick = (methodIndex) => {
    setActiveMethod(methodIndex);
  };

  const onInputCardChange = (event) => {
    const {name, value} = event.target;
    setCreditCard({...creditCard, [name]: value});
  };

  const onInputCardKeyUp = (event) => {
    if (event.keyCode === 8) {
      const prevSibling = event.target.previousElementSibling;
      if (prevSibling) {
        prevSibling.focus();
      }
    }
  };


  return (
    // <div className="popup-overlay">
      <div className="popup">
         <PopupClose closePopup={closePopup}/>

        <div className="popup-container">
          <h2 className="tittle">Заповніть форму</h2>
          <TogglePerson
            personTypes={personTypes}
            activePerson={activePerson}
            personTypeClick={personTypeClick}
          />
          {activePerson === 0
            ? <Individual
              // setIsFormValid={setIsFormValid}
              setFormData={setFormData}
            />
            : <LegalEntity/>
          }
          <h2>Види допомоги</h2>
          <p className="subtitle">Ви можете змінити вид допомоги</p>
          <HelpOptions
            helpOptions={helpOptions}
            activeOption={activeOption}
            helpOptionClick={helpOptionClick}
          />
          <div className="help-content">
            {displayHelpContent()}
          </div>
          <Button
            primaryBtnText={primaryBtnText}
            buttonClick={onFormSubmit}
            disabled={isDisabled}
          />
        </div>

      </div>
    // </div>
  );
}

export default Modal;






