import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
import FormInput from "../UI/FormInput";
import "./FoodOrderForm.css";

const FoodOrderForm = (props) => {
  const { onClose } = props;
  const Navigate = useNavigate();

  const intialValues = {
    name: "",
    emailid: "",
    mobileno: "",
    address: "",
  };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const foodOrderHandler = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(validate(formValues)).length === 0) {
      onClose();
      Navigate("/confirmorder");
    }
  };

  const validate = (values) => {
    const errors = {};
    const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexmobileno = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (!values.name) {
      errors.name = "Full Name is required!";
    }
    if (!values.address) {
        errors.address = "Address is required!";
    }
    if (!values.emailid) {
      errors.emailid = "Emailid is required!";
    } else if (!regexemail.test(values.emailid)) {
      errors.emailid = "This is not a valid email format!";
    }
    if (!values.mobileno) {
      errors.mobileno = "Mobile No. is required!";
    } else if (values.mobileno.length !== 10) {
      errors.mobileno = "Mobile No. must be 10 digits.";
    } else if (!regexmobileno.test(values.mobileno)) {
      errors.mobileno = "This is not a valid Mobile No !";
    }
    return errors;
  };

  return (
    <Modal onClose={onClose}>
      <div className="food_order_section">
        <div className="food_order_txt_section">
          <h2>Order Form</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#1C1C1C"
            width="24"
            height="24"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            onClick={onClose}
          >
            <title>cross</title>
            <path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path>
          </svg>
        </div>
        <form className="order_food_form_section">
          <FormInput
            inputType="text"
            inputName="name"
            inputValue={formValues.name}
            errorMessage={formErrors.name}
            onHandleChange={handleChange}
            errorClass={"error_para"}
            customClass={"form_input"}
            placeholder={"Full Name"}
          />
          <FormInput
            inputType="email"
            inputName="emailid"
            inputValue={formValues.emailid}
            errorMessage={formErrors.emailid}
            onHandleChange={handleChange}
            errorClass={"error_para"}
            customClass={"form_input margin_input"}
            placeholder={"Email"}
          />
          <FormInput
            inputType="text"
            inputName="address"
            inputValue={formValues.address}
            errorMessage={formErrors.address}
            onHandleChange={handleChange}
            errorClass={"error_para"}
            customClass={"form_input margin_input"}
            placeholder={"Address"}
          />
          <FormInput
            inputType="tel"
            inputName="mobileno"
            inputValue={formValues.mobileno}
            errorMessage={formErrors.mobileno}
            onHandleChange={handleChange}
            errorClass={"error_para"}
            customClass={"form_input margin_input"}
            placeholder={"Mobile No."}
          />
          <div className="form_input">
            <button onClick={foodOrderHandler}>Order</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default FoodOrderForm;
