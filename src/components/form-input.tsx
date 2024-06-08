
type Props = {
  type: string;
  placeholder?: string;
};

const FormInput = ({type, placeholder}: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-n-6 
            border-none py-[12px] px-[15px] my-[8px] mx-0 w-full"
    />
  );
};

export default FormInput;
