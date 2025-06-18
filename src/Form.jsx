import './Styles.css';
import './Form.css';
import Model from './Model';
import { useState } from 'react';


export default function Form({title}) {
    const [showModel, setShowModel] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        employee: false,
        salary: ''
    });
    
    function handFormSubmit(e) {
        e.preventDefault();
        setErrorMessage(null);
        const { name, email, phone, age, employee, salary } = inputs;

        if (age < 18 || age > 100) {
            setErrorMessage("Age must be between 18 and 100");
            setShowModel(true);
            return;
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            setErrorMessage("Name must contain only letters and spaces");
            setShowModel(true);
            return;
        } else if (!/^\d{10}$/.test(phone)) {
            setErrorMessage("Phone number must be 10 digits long");
            setShowModel(true);
            return;
        } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            setErrorMessage("Email is not valid");
            setShowModel(true);
            return;
        } else if (salary === "") {
            setErrorMessage("Salary must be selected");
            setShowModel(true);
            return;
        } else if (employee && salary === "less than $500") {
            setErrorMessage("If you are an employee, salary cannot be less than $500");
            setShowModel(true);
            return;
        } 

        setShowModel(true);
        setTimeout(() => {
            setShowModel(false);
            setInputs({
                name: '',
                email: '',
                phone: '',
                age: '',
                employee: false,
                salary: ''
            });
        }, 2000);
        
        
    }

    const btnIsDisabled = inputs.name === "" || inputs.email === "" || inputs.phone === "" || inputs.age === "" || inputs.salary === ""
    
    function handleDivClick(e) {
        if (showModel) {
            setShowModel(false);
        }
    }

    return (
        <div className='flex column center form-container ' onClick={handleDivClick}>
            <form action="" className='flex center column form'>
                <h1>{title}</h1>
                <div className="flex name">
                    <label htmlFor="">Name:</label>
                    <input type="text" placeholder="Name" value={inputs.name} onChange={(e) => {
                        setInputs({ ...inputs, name: e.target.value });
                       
                    }} />
                </div>
                <div className="flex email">
                    <label htmlFor="">Email:</label>
                    <input type="text" placeholder="Email" value={inputs.email} onChange={(e) => {
                        setInputs({ ...inputs, email: e.target.value });
                        
                    }} />
                </div>

                <div className="flex phone">
                    <label htmlFor="">Phone:</label>
                    <input type="text" placeholder="Phone Number" value={inputs.phone} onChange={(e) => {
                        setInputs({ ...inputs, phone: e.target.value });
                        
                    }} />
                </div>

                <div className="flex age">
                    <label htmlFor="">Age:</label>
                    <input type="number" placeholder="Age" value={inputs.age} onChange={(e) => {
                        setInputs({ ...inputs, age: e.target.value });
                        
                    }} />
                </div>

                <div className="flex checkbox">
                    <label htmlFor="">Are you an employee?</label>
                    <input type="checkbox" checked={inputs.employee} onChange={(e) => {
                        setInputs({ ...inputs, employee: e.target.checked });
                    }} />
                </div>

                <div className="flex salary">
                    <label htmlFor="">Salary:</label>
                    <select name="" id="" value={inputs.salary} onChange={(e) => {
                        setInputs({ ...inputs, salary: e.target.value });
                        
                    }}>
                        <option value="less than $500">Less than $500</option>
                        <option value="between $500 and $2000">Between $500 and $2000</option>
                        <option value="More than $2000">More than $2000</option>
                    </select>
                </div>

                <button className={btnIsDisabled ? "btn disabled" : "btn"} onClick={handFormSubmit} disabled={btnIsDisabled}>Submit</button>
            </form>
            <Model isVisible={showModel} errorMessage={errorMessage} />
        </div>
    )
}