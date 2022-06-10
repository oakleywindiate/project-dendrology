import React, { useState } from 'react';

const Form = () => {
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value)
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