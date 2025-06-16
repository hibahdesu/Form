import './Styles.css';
import './Form.css';
import Model from './Model';
import { useState } from 'react';


export default function Form() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        employee: false,
        salary: ''
    });
    

    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <div className='flex column center form-container '>
            <form action="" className='flex center column form'>
                <h1>Form</h1>
                <div className="flex name">
                    <label htmlFor="">Name:</label>
                    <input type="text" placeholder="Name" value={inputs.name} onChange={(e) => {
                        setInputs({ ...inputs, name: e.target.value });
                        if (e.target.value.length > 0) {
                            setIsSubmitted(false);
                        }
                    }} />
                </div>
                <div className="flex email">
                    <label htmlFor="">Email:</label>
                    <input type="text" placeholder="Email" value={inputs.email} onChange={(e) => {
                        setInputs({ ...inputs, email: e.target.value });
                        if (e.target.value.length > 0) {
                            setIsSubmitted(false);
                        }
                    }} />
                </div>

                <div className="flex phone">
                    <label htmlFor="">Phone:</label>
                    <input type="text" placeholder="Phone Number" value={inputs.phone} onChange={(e) => {
                        setInputs({ ...inputs, phone: e.target.value });
                        if (e.target.value.length > 0) {
                            setIsSubmitted(false);
                        }
                    }} />
                </div>

                <div className="flex age">
                    <label htmlFor="">Age:</label>
                    <input type="number" placeholder="Age" value={inputs.age} onChange={(e) => {
                        setInputs({ ...inputs, age: e.target.value });
                        if (e.target.value.length > 0) {
                            setIsSubmitted(false);
                        }
                    }} />
                </div>

                <div className="flex checkbox">
                    <label htmlFor="">Are you an employee?</label>
                    <input type="checkbox" checked={inputs.employee} onChange={(e) => {
                        setInputs({ ...inputs, employee: e.target.checked });
                        // if (e.target.checked) {
                        //     setIsSubmitted(false);
                        // }
                    }} />
                </div>

                <div className="flex salary">
                    <label htmlFor="">Salary:</label>
                    <select name="" id="" value={inputs.salary} onChange={(e) => {
                        setInputs({ ...inputs, salary: e.target.value });
                        if (e.target.value.length > 0) {
                            setIsSubmitted(false);
                        }
                    }}>
                        <option value="">less than $500</option>
                        <option value="">between $500 and $2000</option>
                        <option value="">More than $2000</option>
                    </select>
                </div>

                <button className='btn'>Submit</button>
            </form>
            {/* <Model /> */}
        </div>
    )
}