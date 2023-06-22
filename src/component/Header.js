import React from 'react';

const Header = ({title, subTitle}) => {
    return (        
        <div>
            <h4>{title}</h4>
            {subTitle}
        </div> 
    )
}

export default Header;

