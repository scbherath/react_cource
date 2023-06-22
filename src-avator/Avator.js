import React from 'react';

const Avator = ({avator, name, shape, width}) => {

    return (
        <img 
            src={avator} 
            alt={name}
            className={`rounded-${shape}`}
            width={width}
        />
    );
}

Avator.defaultProps = {
    avator:'https://i.pravatar.cc/300'
}
    
export default Avator;
