import React from 'react';

function Input1(props)
{
    var c=props.onChange;
    return <input onChange={c}></input>
}
export default Input1;