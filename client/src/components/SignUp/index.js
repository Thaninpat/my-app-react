import React, { useState } from 'react';
import { useDialog } from 'react-st-modal';
import './SignUp.css';

function SignUp() {
  const dialog = useDialog();

  const [value, setValue] = useState();

  return (
    <div className='modal-sign-up'>
      <input
        className='input-sign-up'
        type='text'
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <input
        className='input-sign-up'
        type='text'
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <input
        className='input-sign-up'
        type='text'
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        className='btn-sign-up'
        onClick={() => {
          // Сlose the dialog and return the value
          dialog.close(value);
        }}
      >
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;
