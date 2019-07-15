import React from 'react';
import '../../components/TextInput/TextInput.css';

const TextInput = (props) => {
    return (
        <div className='form-group'>
            <input type='text' className='form-control' {...props} />
        </div>
    );
}

export default TextInput;
