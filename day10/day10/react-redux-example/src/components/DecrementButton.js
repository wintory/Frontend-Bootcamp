import React from 'react';

const DecrementButton = (props) => (
    <button onClick={() => props.decrementBy(2)}>decrement</button>
)

export default DecrementButton;
