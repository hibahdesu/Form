import './Styles.css';
import './Form.css';

export default function InputComponent({ label, type, name, value, onChange, checked }) {
    return (
        <div className={`flex ${name}`}>
            <label htmlFor={name}>{label}:</label>
            {type === 'checkbox' ? (
                <input
                    type={type}
                    placeholder={name}
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />
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