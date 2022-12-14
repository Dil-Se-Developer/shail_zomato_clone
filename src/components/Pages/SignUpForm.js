import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
import FormInput from "../UI/FormInput";
import {
  addUserData,
  fetchUsers,
} from "../../redux_toolkit/slices/userDataSlice";
import "./SignUpForm.css";

const SignUpForm = (props) => {
  const { onClose, onOpenLogin } = props;
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const intialValues = {
    name: "",
    emailid: "",
  };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const usersData = useSelector((state) => state.userData.UsersData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const registerHandler = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    const userEmaild = usersData.map((user) => user.emailid);
    const userEmaildExist = userEmaild.includes(formValues.emailid);

    if (userEmaildExist) {
      alert("user already exit");
      return;
    }

    if (Object.keys(validate(formValues)).length === 0) {
      dispatch(addUserData(formValues));
      onClose();
      Navigate("/dashboard");
    }
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const validate = (values) => {
    const errors = {};
    const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Full Name is required!";
    }
    if (!values.emailid) {
      errors.emailid = "Emailid is required!";
    } else if (!regexemail.test(values.emailid)) {
      errors.emailid = "This is not a valid email format!";
    }
    return errors;
  };

  return (
    <Modal onClose={onClose}>
      <div className="signup_section">
        <div className="signup_txt_section">
          <h2>Sign up</h2>
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
        <form className="signup_form_section">
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
            customClass={"form_input email_input"}
            placeholder={"Email"}
          />
          <div className="form_input">
            <button onClick={registerHandler}>Create account</button>
          </div>
        </form>
        <div className="signup_or_section">
          <hr />
          <span>or</span>
        </div>
        <div className="signup_btn_section">
          <div className="form_input email_login_btn">
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.87566 13.2946L4.10987 16.1534L1.31093 16.2126C0.474461 14.6611 0 12.886 0 10.9997C0 9.17565 0.443609 7.45552 1.22994 5.94092H1.23054L3.72238 6.39776L4.81396 8.87465C4.5855 9.54071 4.46097 10.2557 4.46097 10.9997C4.46106 11.8072 4.60732 12.5808 4.87566 13.2946Z"
                  fill="#FBBB00"
                ></path>
                <path
                  d="M21.8082 8.94507C21.9345 9.61048 22.0004 10.2977 22.0004 11C22.0004 11.7875 21.9176 12.5557 21.7598 13.2967C21.2243 15.8183 19.8252 18.0201 17.8869 19.5782L17.8863 19.5776L14.7477 19.4175L14.3035 16.6445C15.5896 15.8902 16.5947 14.7098 17.1242 13.2967H11.2422V8.94507H17.21H21.8082Z"
                  fill="#518EF8"
                ></path>
                <path
                  d="M17.8865 19.5778L17.8871 19.5784C16.002 21.0937 13.6073 22.0002 11.0006 22.0002C6.81152 22.0002 3.16945 19.6588 1.31152 16.2132L4.87625 13.2952C5.8052 15.7744 8.19679 17.5392 11.0006 17.5392C12.2057 17.5392 13.3348 17.2134 14.3036 16.6447L17.8865 19.5778Z"
                  fill="#28B446"
                ></path>
                <path
                  d="M18.0208 2.53241L14.4573 5.44981C13.4546 4.82307 12.2694 4.46102 10.9996 4.46102C8.13229 4.46102 5.69596 6.30682 4.81356 8.87494L1.23009 5.9412H1.22949C3.06022 2.41154 6.74823 0 10.9996 0C13.6686 0 16.1158 0.950726 18.0208 2.53241Z"
                  fill="#F14336"
                ></path>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
        <div className="signup_end_section">
          <p>
            Already have an account?{" "}
            <span onClick={onClose}>
              <span onClick={onOpenLogin}>Login</span>
            </span>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpForm;
