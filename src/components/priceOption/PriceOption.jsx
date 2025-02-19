import React from 'react';

const PriceOption = ({option}) => {

    const {name, price, features} = option;
    return (
        <div className='bg-blue-400 text-black p-5 rounded-lg'>
            <span className='text-6xl font-bold text-center'>{price}</span>
            <span className='text-xl font-bold text-center'>/mon</span>
            <h2 className='text-4xl font-bold text-center'>{name}</h2>
            {
                features.map((item, indx) =><li>{item}</li>)
            }
        </div>
    );
};

export default PriceOption;