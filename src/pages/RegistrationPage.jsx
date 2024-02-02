import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Validation from "../components/Validation";
import AddressForm from "../components/AddressForm";
import PersonalForm from "../components/PersonalForm";
import PaymentForm from "../components/PaymentForm";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const steps = ["Step1", "Step2", "Step3"];

function getStepContent(step, PersonalProps, AddressProps, PaymentProps) {
  switch (step) {
    case 0:
      return <PersonalForm data={PersonalProps} />;
    case 1:
      return <AddressForm data={AddressProps} />;
    case 2:
      return <PaymentForm data= {PaymentProps} />;
    default:
      throw new Error("Unknown step");
  }
}

export default function RegistrationPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [house, setHouse] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [errors, setErrors] = useState({});

  const PaymentProps = {
    cardNumber,
    setCardNumber,
    expiryDate,
    setExpiryDate,
    cvv,
    setCvv,
    cardName,
    setCardName,
    errors
  }

  const PersonalProps = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    errors,
  };

  const AddressProps = {
    streetAddress,
    setStreetAddress,
    city,
    setCity,
    house,
    setHouse,
    state,
    setState,
    postalCode,
    setPostalCode,
    country,
    setCountry,
    errors,
  };

  var temp_err = {};

  function handleValidation() {
    temp_err = Validation(PersonalProps);
    setErrors(temp_err);
  }

  const handleNext = () => {
    handleValidation();
    if (Object.keys(temp_err).length === 0) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="container m-5" style={{maxWidth: "700px"}}>
        <div className="border p-5">
          <div className="fw-bold mb-2 text-center text-success fs-4">
            Registration
          </div>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <div>
              <div>Data Privacy & Security</div>
              <div className="fs-4">
                Please Submit We will reach you soon!
                <div onClick={() => {setRedirect(true)}} className="btn text-light fw-semibold" style={{backgroundColor: "#502185"}}>
                  Submit
                </div>
              </div>
            </div>
          ) : (
            <div>
              {getStepContent(activeStep, PersonalProps, AddressProps, PaymentProps)}
              <div className="d-flex justify-content-end">
                {activeStep !== 0 && (
                  <div className="btn m-2 text-light fw-semibold" style={{backgroundColor: "#502185"}} onClick={handleBack}>
                    Back
                  </div>
                )}

                <div className="btn m-2 text-light fw-semibold" style={{backgroundColor: "#502185"}} onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Done" : "Next"}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
