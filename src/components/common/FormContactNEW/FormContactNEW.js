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
  const onSubmit = data => console.log(data);
  console.log(errors);

  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const recaptchaRef = React.createRef();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="box">
        <label>
          <span>Imię i Nazwisko</span>
          <input type="text" {...register('Name', {required: true, maxLength: 80})} />
        </label>
        <label>
          <span>E-mail</span>
          <input type="text" {...register('Email', {required: true, pattern: /^\S+@\S+$/i})} />
        </label>
        <label>
          <span>Numer telefonu</span>
          <input
            type="tel"
            {...register('Mobile number', {required: true, minLength: 6, maxLength: 12})}
          />
        </label>
        <label>
          <span>temat wiadomości</span>
          <input type="text" {...register('Tittle', {required: true, maxLength: 100})} />
        </label>
        <label>
          <span>treść wiadomości</span>
          <textarea {...register('Message', {required: true, maxLength: 1000})} />
        </label>
        <div className="sendForm">
          <label className="veryfication">
            <span>weryfikacja</span>
            <div className="google-captha">
              <ReCAPTCHA 
                ref={recaptchaRef}
                sitekey= '6Lf_yKgeAAAAABkoFCKyJO01ietAV531d_9yJdrF'
                onChange={onChange} 
              />,
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
