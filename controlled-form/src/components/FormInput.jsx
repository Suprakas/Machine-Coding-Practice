export default function FormInput({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
}) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
