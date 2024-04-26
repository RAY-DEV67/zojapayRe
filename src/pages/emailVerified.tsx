import EmailContainer from "../components/emailContainer";

function EmailVerified() {
  return (
    <div className="flex flex-col items-center lg:flex-row-reverse">
      <EmailContainer
        cta="Continue"
        heading="Email Verified"
        text="The verified email address will be associated with your account.
        Click on the button below to continue."
        navigate="/Dashboard"
        confirmEmail={false}
      />
    </div>
  );
}

export default EmailVerified;
