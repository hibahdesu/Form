import './Form.css';

export default function Model({isVisible, errorMessage=null}) {
    if (isVisible) {
        return (
            <div className='model flex center'>
                <div className='model-content'>
                    <h2>Form Submitted Successfully!</h2>
                    <p>Your data has been saved.</p>
                </div>
            </div>
        );
    } else {
        return <></>;
    }

    
}