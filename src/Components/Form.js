import React, { useState, useEffect } from 'react';

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
        <form onSubmit={handleSubmit}>
            <label>
                Enter scientific name:
                <input id="input-box" type="text" value={value} onChange={event => setValue(event.target.value)} />
            </label>
           {disabledSubmit ? <input type="submit" value="Submit" /> : <input disabled={true} type="submit" value="Submit" />}
        </form>
    )
}

export default Form;