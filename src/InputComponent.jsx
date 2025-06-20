import './Form.css'
import { useContext } from "react";
import UserContext from "./contexts/UserContext";

export default function InputComponent({ label, type, name, value, onChange, checked, options = [] }) {
    const userContext = useContext(UserContext);

    return (
        <div className={`form-group ${name}`}>
            <label htmlFor={name}>
                {userContext.name} {label}:
            </label>

            {type === 'checkbox' ? (
                <input
                    type="checkbox"
                    id={name}
                    name={name}
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />
            ) : type === 'select' ? (
                <select
                    id={name}
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
                    id={name}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
        </div>
    );
}
