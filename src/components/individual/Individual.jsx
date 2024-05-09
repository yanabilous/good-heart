import React from "react";
import Form from "../form/Form";




function Individual({setIsFormValid, setFormData}) {
  return (
    <div className="container-individual">
      <Form setIsFormValid={setIsFormValid} setFormData={setFormData} />


    </div>
  );
}
export default Individual;
