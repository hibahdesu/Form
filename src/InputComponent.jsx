export default function InputComponent({ label, type, name, value, onChange, checked, options = [] }) {
    return (
        <div className={`flex ${name}`}>
            <label htmlFor={name}>{label}:</label>
            {type === 'checkbox' ? (
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />
            ) : type === 'select' ? (
                <select
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                >
                    <option value="">-- Select --</option>
                    {options.map((option, idx) => (
                        <option key={idx} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
        </div>
    );
}
