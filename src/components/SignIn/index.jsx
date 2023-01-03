import React from 'react';
import SignInForm from "./SignInForm";
import InformBlock from "../InformBlock";

const SignInContent = () => {
  return (
    <div className="content">
      <InformBlock
        title="Get started today!"
        text="Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet."
      />

      <SignInForm />
    </div>
  );
};

export default SignInContent;
