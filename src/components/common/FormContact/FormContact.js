import React from 'react';

import './FormContact.scss';

const FormContact = () => {
  return (
    <form>
      <div class="box">
        <label>
          <span>Imię i Nazwisko</span>
          <input type="text" id="name" minLength="3" maxLength="35"required/>
        </label>
        <label>
          <span>E-mail</span>
          <input type="email" id="email" minLength="3" maxLength="35" required />
        </label>
        <label>
          <span>Numer telefonu</span>
          <input type="tel" id="phone" name="phone" required />
        </label>
        <label>
          <span>temat wiadomości</span>
          <input type="text" name="title" id="title" minLength="3" maxLength="50" required />
        </label>
        <label>
          <span>treść wiadomości</span>
          <textarea  name="wiadomosc" id="textarea" rows="5" cols="33"  minLength="3" maxLength="1000"required></textarea>
        </label>
        <div className='sendForm'>
          <label className='veryfication'>
            <span>weryfikacja</span>
            <div className='captha'>
              <input type="checkbox" required />
            </div>
          </label>
          <div className='formButtons'>
            <input type="reset" value="Wyczyść" className='reset'/>
            <input type="submit" value="Wyślij" className='submit' />
          </div>
        </div>
        
      </div>
    </form>
  );
};

export default FormContact;
