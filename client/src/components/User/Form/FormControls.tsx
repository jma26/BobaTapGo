import axios from 'axios';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormInterface {
  email: string,
  password: string
}

const initialFormValues = {
  email: '',
  password: ''
}

const FormControls = () => {
  const [ formValues, setFormValues ] = useState<FormInterface>(initialFormValues);
  const [ formErrors, setErrors ] = useState({});

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  
    validateFormValue();
  }
  
  const formIsValid = (): boolean => {
    let isValid = true;
    if (Object.values(formValues).every(Boolean) && Object.values(formErrors).every(function(value) { return value === '' })) {
      return isValid;
    }
    return !isValid;
  }
  
  const validateFormValue = (): void => {
    let temp: Partial<FormInterface> = { ...formErrors };

    if ('email' in formValues) {
      temp.email = formValues.email ? '' : 'Email field is required'
      if (formValues.email) {
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formValues.email) ? '' : 'Email is not valid.'
      }
    }

    if ('password' in formValues) {
      temp.password = formValues.password ? '': 'Password field is required'
    }

    setErrors({
      ...temp
    });
  }

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let store = await axios.post('/stores/login', formValues);
      console.log('store', store);
    } catch (err) {
      console.error(err);
    }
  }

  return {
    handleInputChange,
    formIsValid,
    handleLogin
  };
}

export default FormControls;