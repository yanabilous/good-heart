import React, {useState} from "react";
import Button from "../components/button/Button";
import Modal from "../components/modal/Modal";

function Home() {
  const primaryBtnText = "Відкрити форму";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="wrapper">
      <div className="container-home">
        <Button primaryBtnText={primaryBtnText} buttonClick={openModal}/>
        {isModalOpen && <Modal closePopup={closeModal}/>}
      </div>
    </div>
  );
}

export default Home;

