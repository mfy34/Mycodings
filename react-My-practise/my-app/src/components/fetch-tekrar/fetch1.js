import React, { useEffect, useState } from 'react'
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap'

const Fetch1 = () => {
const [users, setUsers] = useState([])

useEffect(() => {
   fetch('https://648b440517f1536d65eab1fa.mockapi.io/api/v1/users')
   .then(responce => responce.json()) 
   .then(data => console.log(data))  
   .catch(error => console.log(error))   
},[] ) 


  return (
          <Container><h2>Fetch1</h2>
          <ListGroup>
           {
             users.length > 0 && users.map((user, index) => {
               return (
                 <ListGroupItem key={index}>
                {user.firstName}
                 </ListGroupItem>   
               )    
             })       
           }
      
      
      
      
      
      
          </ListGroup>
          </Container>
    
  )
}

export default Fetch1