import { useState, ChangeEvent } from 'react';

interface FormInterface {
  email: string,
  fullname: string,
  password: string
}

const initialFormValues = {
  email: '',
  password: ''
}

const FormControls = () => {
  const [ formValues, setFormValues ] = useState<Partial<FormInterface>>(initialFormValues);
  const [ formErrors, setErrors ] = useState({});

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  
    validateFormValue();
  }
  
  const formIsValid = () => {
    let isValid = true;
    if (Object.values(formValues).every(Boolean) && Object.values(formErrors).every(function(value) { return value === '' })) {
      return isValid;
    }
    return !isValid;
  }
  
  const validateFormValue = () => {
    let temp: Partial<FormInterface> = { ...formErrors };

    if ('email' in formValues) {
      temp.email = formValues.email ? '' : 'Email field is required'
      if (formValues.email) {
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formValues.email) ? '' : 'Email is not valid.'
      }
    }

    if ('fullname' in formValues) {
      temp.fullname = formValues.fullname ? '' : 'Full name field is required'
    }

    if ('password' in formValues) {
      temp.password = formValues.password ? '': 'Password field is required'
    }
    setErrors({
      ...temp
    });
  }

  return {
    handleInputChange,
    formIsValid
  };
}

export default FormControls;