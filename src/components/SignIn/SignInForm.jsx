import React from 'react';
import leaf1 from '../../icons/leafs/1.svg';
import leaf2 from '../../icons/leafs/2.svg';

const SignInForm = () => {
  return (
    <form className="sign-in-form">
      <h4 className="title text-center">
        Log in
      </h4>

      <input name="name" placeholder="Name" type="text"/>

      <input name="email" placeholder="E-mail" type="text"/>

      <button>Book a demo</button>

      <img className="leaf" src={leaf1} alt=""/>
      <img className="leaf" src={leaf2} alt=""/>
    </form>
  );
};

export default SignInForm;
