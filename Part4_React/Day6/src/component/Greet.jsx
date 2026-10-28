import React from 'react';

export const Greet = (props) => {
    return (
        <h1 className="text-blue-700">
            Hello {props.name}
        </h1>
    );
};

// HomeWork : https://react.dev/learn/passing-props-to-a-component