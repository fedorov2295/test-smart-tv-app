import React, { useState } from 'react';
import classes from './Phone.module.css';
import { IMaskInput } from 'react-imask';

const Phone = (props) => {
  const [phone, setPhoneNumber] = useState('_');
  const [isValid, setValid] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [isConfirmed, setConfirmed] = useState(false);

  const onDigitClickHandler = (event) => {
    const check = Array.from(phone);
    if (check.map(Number).filter(Number).length <= 11) {
      setPhoneNumber((prevState) => prevState + event.target.innerHTML);
    }
  };

  const onInputChangeHandler = (value) => {
    setPhoneNumber(value);
    checkValidity();
  };

  const checkValidity = () => {
    const check = Array.from(phone);
    if (check.map(Number).filter((item) => !isNaN(item)).length === 11) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const onClearPhoneHandler = () => {
    setPhoneNumber('');
    setValid(false);
  };

  let output;
  if (isConfirmed) {
    output = (
      <div className={classes.PhoneValidation}>
        <p className={classes.confirmedTitle}>
          ЗАЯВКА
          <br />
          ПРИНЯТА
        </p>
        <p className={classes.text}>
          Держите телефон под рукой.
          <br /> Скоро с Вами свяжется наш менеджер.
        </p>
      </div>
    );
  } else {
    output = (
      <div className={classes.PhoneValidation}>
        <p className={classes.title}>
          Введите ваш номер
          <br />
          мобильного телефона
        </p>
        <IMaskInput
          name="phoneNumber"
          id="phoneNumber"
          mask="+{7}(000)000-00-00"
          lazy={false}
          value={phone}
          className={classes.phoneDisplay}
          onAccept={onInputChangeHandler}
        />
        <p className={classes.text}>
          и с Вами свяжется наш менеждер для <br />
          дальнейшей консультации
        </p>
        <div className={classes.phoneButtons}>
          <button onClick={onDigitClickHandler}>1</button>
          <button onClick={onDigitClickHandler}>2</button>
          <button onClick={onDigitClickHandler}>3</button>
          <button onClick={onDigitClickHandler}>4</button>
          <button onClick={onDigitClickHandler}>5</button>
          <button onClick={onDigitClickHandler}>6</button>
          <button onClick={onDigitClickHandler}>7</button>
          <button onClick={onDigitClickHandler}>8</button>
          <button onClick={onDigitClickHandler}>9</button>
          <button className={classes.clearButton} onClick={onClearPhoneHandler}>
            Стереть
          </button>
          <button onClick={onDigitClickHandler}>0</button>
        </div>
        <div className={classes.checkbox}>
          <input
            type="checkbox"
            id="scales"
            name="Согласие"
            checked={isChecked}
            onChange={() => setChecked(!isChecked)}
          />
          <label htmlFor="scales">
            Согласие на обработку
            <br />
            персональных данных
          </label>
        </div>
        <button
          disabled={!isChecked || !isValid}
          className={classes.sucess}
          onClick={() => {
            setConfirmed(!isConfirmed);
          }}
        >
          Подтвердить номер
        </button>
      </div>
    );
  }

  return output;
};

export default Phone;
