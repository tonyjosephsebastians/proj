type DropdownProps = {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
};

const Dropdown = ({ options, selected, onChange }: DropdownProps) => {
  return (
    <select
      className="border rounded px-3 py-2 w-80"
      value={selected}
      onChange={e => onChange(e.target.value)}
    >
      <option value="">Select your option</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
