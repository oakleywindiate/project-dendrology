import React, { useState } from 'react';

const Form = ({ submitValue }) => {
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        submitValue(value)
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter scientific name:
                <input type="text" value={value} onChange={event => setValue(event.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form;