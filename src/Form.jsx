import './Styles.css';
import './Form.css';


export default function Form() {
    return (
        <div className='flex form-container '>
            <form action="" className='flex center column form'>
                <h1>Form</h1>
                <div className="flex name">
                    <label htmlFor="">Name:</label>
                    <input type="text" placeholder="Name" />
                </div>
                <div className="flex email">
                    <label htmlFor="">Email:</label>
                    <input type="text" placeholder="Email" />
                </div>

                <div className="flex phone">
                    <label htmlFor="">Phone:</label>
                    <input type="text" placeholder="Phone Number" />
                </div>

                <div className="flex age">
                    <label htmlFor="">Age:</label>
                    <input type="number" placeholder="Age" />
                </div>

                <div className="flex checkbox">
                    <label htmlFor="">Are you an employee?</label>
                    <input type="checkbox" />
                </div>

                <div className="flex salary">
                    <label htmlFor="">Salary:</label>
                    <select name="" id="">
                        <option value="">less than $500</option>
                        <option value="">between $500 and $2000</option>
                        <option value="">More than $2000</option>
                    </select>
                </div>

                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}