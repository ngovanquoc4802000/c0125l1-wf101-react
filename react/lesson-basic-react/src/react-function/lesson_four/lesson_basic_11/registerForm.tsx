import InputFields from "./InputFields";
import SubmitButton from "./submitButton";

function RegisterForm() {
  return (
    <form className="registration-form">
      <h1>Registration Form</h1>
      <InputFields type="text" id="user_name" name="User name" />
      <InputFields type="email" id="email" name="Email" />
      <InputFields type="password" id="password" name="Password" />
      <SubmitButton title="Send" />
    </form>
  );
}

export default RegisterForm;