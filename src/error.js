import React from 'react';
import img from './assets/error_img.JPG';

const error = (props) => {
    return (
        <div>
            <h1 style={{ marginTop: '50px', color: 'red', textAlign: 'center' }}>Error! navigate to page -not found!</h1>
            <img src={img} alt="error" width="50%" style={{ position: 'absolute', left: '0', right: '0', bottom: '0', margin: 'auto', marginTop: '10px' }} />
        </div>
    );
}
export default error;