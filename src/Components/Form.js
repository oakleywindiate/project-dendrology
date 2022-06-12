import React, { useState, useEffect } from 'react';
import './/Form.css';

const Form = ({ submitValue, newFunction }) => {
    const [value, setValue] = useState('')
    const [disabledSubmit, setDisabledSubmit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        submitValue(value)
        setValue('')
        setDisabledSubmit(true)
    }

    useEffect(() => {
        if (!value) {
            setDisabledSubmit(false)
        } else {
            setDisabledSubmit(true)
        }
     },[value])


    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>
                Enter scientific name:
                <input placeholder="Enter scientific name..." id="input-box" type="text" value={value} onChange={event => setValue(event.target.value)} />
            </label>
           {disabledSubmit ? <input id="submit-button" type="submit" value="Submit" /> : <input id="submit-button" disabled={true} type="submit" value="Submit" />}
        </form>
    )
}

export default Form;