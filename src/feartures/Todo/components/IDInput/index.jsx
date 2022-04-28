import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
IDInput.propTypes = {
    value: PropTypes.number.isRequired,
};

function IDInput(props) {
    const {value} = props;
    const [count, setCount] = useState(value);
    return (
        <div>
            <button onClick={() => setCount(x => x - 1 )}>-</button>
            <input type="text" value={count} disabled={true} className="Input"></input>
            <button onClick={() => setCount(x => x + 1)}>+</button>
        </div>
    );
}

export default IDInput;