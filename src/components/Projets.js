import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams, Link} from 'react-router-dom';


const Projets = () => {
    
    let {slug} = useParams(); 
    return (
        <div>
        <h1> Projets</h1>
        <ListGroup>
           
            <ListGroup.Item variant="primary">TO DO ListGroup</ListGroup.Item>
            <ListGroup.Item variant="secondary">Movie APP</ListGroup.Item>
            <ListGroup.Item variant="success">Achat en ligne</ListGroup.Item>
            <ListGroup.Item variant="danger">Sie web</ListGroup.Item>
            <ListGroup.Item variant="warning">App mobile </ListGroup.Item>
        </ListGroup>
    
        <p>Bienvenue dans le projet {slug}</p>
        <Link 
        to={{
            pathname: "/Contact",
            state: {
                nomProjet : slug
            }
        
        }}
        >
            Go to Contact avec du state
        </Link>
        </div>
    )
}

export default Projets; 
