import './Form.css';

export default function Model({isVisible, errorMessage=null}) {
    if (isVisible) {
        return (
            <div className='model flex center'>
                <div className='model-content'>
                    <h2 className='error-message' style={{color: errorMessage ? 'red': '#729cd6'}}>{errorMessage != null ? errorMessage : 'Form Submitted Successfully!'}</h2>
                </div>
            </div>
        );
    } else {
        return <></>;
    }

    
}