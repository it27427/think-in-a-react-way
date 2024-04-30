import { useState } from 'react';
import InputField from './InputField';

const SignInForm = () => {
  const [inputData, setInputData] = useState('');

  const handleChange = (e) => setInputData(e.target.value);

  return (
    <form>
      <InputField
        type='text'
        classes='test'
        id='test'
        placeholder='test'
        value={inputData}
        onChange={handleChange}
      />
    </form>
  );
};

export default SignInForm;
