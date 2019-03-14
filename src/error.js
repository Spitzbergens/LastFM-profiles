import React from 'react';


const Error = (props) => {

    return (
        <div className="container">
            <p>
                Something went wrong.
            </p>
            <p>{props.error}</p>
        </div>

    )

}

export default Error;
