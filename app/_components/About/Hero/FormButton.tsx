import * as React from "react";

interface FormButtonProps {
  label: string;
}

const FormButton: React.FC<FormButtonProps> = ({ label }) => {
  return (
    <button className="gap-2 self-stretch px-6 py-3 my-auto border border-white border-solid max-md:px-5 hover:text-[#9CAE47] hover:border-[#9CAE47]">
      {label}
    </button>
  );
};

export default FormButton;
