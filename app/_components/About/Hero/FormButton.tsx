import * as React from 'react';

interface FormButtonProps {
  label: string;
}

const FormButton: React.FC<FormButtonProps> = ({ label }) => {
  return (
    <button className="gap-2 self-stretch px-6 py-3 my-auto border border-black border-solid max-md:px-5">
      {label}
    </button>
  );
};

export default FormButton;