import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inpuValue, setInpuValue] = useState('');
    const handleInputChange = (e) => {
        setInpuValue(
            e.target.value
            )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if( inpuValue.trim().length > 2){
            setCategories(cats => [ inpuValue, ...cats ]);
            setInpuValue('');
        }
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="agregar una categoría"
                    value={inpuValue}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}