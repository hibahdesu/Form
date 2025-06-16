import './Styles.css';
import './Form.css';


export default function Form() {
    return (
        <div className='flex form-container'>
            <form action="" className='flex form'>
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
            </form>
        </div>
    )
}