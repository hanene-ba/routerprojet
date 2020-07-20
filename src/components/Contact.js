import React from 'react';
import { useHistory, useLocation,} from 'react-router-dom';


const Contact = () => {
    
    let history = useHistory();
    let location = useLocation(); 
    
    console.log(location);

    return (
    <div>
        <h1>
            Contactez Nous :D
        </h1>
        <button onClick= {() => history.push('/')}> GO to Racine</button>
      
    </div>
    )
}

export default Contact; 
