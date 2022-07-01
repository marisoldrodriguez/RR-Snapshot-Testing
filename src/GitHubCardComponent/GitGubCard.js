import React from "react";
import Card from 'react-bootstrap/Card';
import SoftwareDevelopment from './SoftwareDevelopment.png';

function GitGubCard() {
  return (
    <div className="card">
        <Card>
                <Card.Img variant="top" src={SoftwareDevelopment} />
                <Card.Body>
                    <Card.Title><h1>Marisol D Rodriguez</h1></Card.Title>  
                    <Card.Text>
                    <h2><a href={`https://github.com/marisoldrodriguez`}>My GitHub Profile</a></h2>
                    </Card.Text>
                </Card.Body>
        </Card>
        <br />
        <Card>
                <Card.Body>
                <Card.Text>
                Experienced product development engineer, fortunate to take a career break to raise my family. Excited to get back in the workforce as a software engineer. Currently enrolled in a Software Development Bootcamp at North Carolina State University. Program completion in October 2022.
                </Card.Text>
                </Card.Body>        
        </Card>
    </div>
  )
}

export default GitGubCard