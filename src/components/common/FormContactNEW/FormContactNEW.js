import React from 'react';
import {useForm} from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

import './FormContactNEW.scss';

const FormContactNEW = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  const onSubmit = data => {
    if (onChange.value) {
      console.log(data);
    } else {
      console.log('Brak autoryzacji');
    }
  };
  console.log(errors);

  const inputErrorInfo = 'Proszę wypełnić powyższe pole';

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="box">
        <label>
          <span>Imię i Nazwisko</span>
          <input type="text" {...register('Name', {required: true, maxLength: 80})} />
          {errors.Name?.type === 'required' && inputErrorInfo}
          {/* Do poprawy errory :) aby nie trzeba tyle pisac tego samego*/}
        </label>
        <label>
          <span>E-mail</span>
          <input type="text" {...register('Email', {required: true, pattern: /^\S+@\S+$/i})} />
          {errors.Email?.type === 'required' && inputErrorInfo}
        </label>
        <label>
          <span>Numer telefonu</span>
          <input
            type="tel"
            {...register('Mobile', {required: true, minLength: 6, maxLength: 12})}
          />
          {errors.Mobile?.type === 'required' && inputErrorInfo}
        </label>
        <label>
          <span>temat wiadomości</span>
          <input type="text" {...register('Tittle', {required: true, maxLength: 100})} />
          {errors.Tittle?.type === 'required' && inputErrorInfo}
        </label>
        <label>
          <span>treść wiadomości</span>
          <textarea {...register('Message', {required: true, maxLength: 1000})} />
          {errors.Message?.type === 'required' && inputErrorInfo}
        </label>
        <div className="sendForm">
          <label className="veryfication">
            <span>weryfikacja</span>
            <div className="google-captha">
              <ReCAPTCHA sitekey="6Lf_yKgeAAAAABkoFCKyJO01ietAV531d_9yJdrF" onChange={onChange} />,
            </div>
          </label>
          <div className="formButtons">
            <button type="reset" className="reset">
              Wyczyść
            </button>
            <button type="submit" className="submit">
              Wyślij
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormContactNEW;
