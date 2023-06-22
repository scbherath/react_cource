import React from 'react';

const Layouts = ({ children, size }) => {
    return (
        <div className="container">
            <div className="row">
                <div className={`col-md-${size}`}>
                    {children}
                </div>
            </div>
        </div>
    )
};

Layouts.defaultProps = {
    size: '6'
};

export default Layouts;