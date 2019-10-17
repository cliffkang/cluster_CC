import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Template() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const [count, setCount] = useState(counter);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            {/* <button onClick={() => dispatch({ type: 'increment-counter' })}>
                Click me
            </button> */}
        </div>
    );
}

export default Template;
