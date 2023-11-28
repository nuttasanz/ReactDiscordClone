const FormInput = (props) => {
  const {
    title,
    type,
    name,
    value,
    onChange,
    required,
    autoComplete,
  } = props;
  return (
    <>
      <label htmlFor={name}>{title}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        required={required}
        autoComplete={autoComplete}
      />
    </>
  );
};

export default FormInput;
