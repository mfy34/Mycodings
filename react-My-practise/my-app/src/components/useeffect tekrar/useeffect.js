import React, { useEffect, useState } from 'react'
import { Alert, Button, ButtonGroup, Container } from "react-bootstrap"

const UseEffect = () => {
          const [message, setMessage] = useState("")
          const [counter, setCounter] = useState(0)

          console.log("message")
          console.log("merhaba")

useEffect(() => {
          console.log("MOUNTING: SADECE SAYFAM İLK RENDER EDİLDİĞİNDE ÇALIŞIR VE CONSOLDA EN SON RENDER EDİLİR1")
}, [])
useEffect(() => {
          console.log("UPDATING: sayfam ilk renderda ve her render edildiginde calisir")
          return () => {
              console.log("UNMOUNTING: sayfam sadece unmount edilirken calisir");
          }
      });
useEffect(() => {
          console.log("UPDATING: sayfam ilk render edildiginde ve message state'i degistiginde calisir");
      }, [message,counter]);

  return (
<Container>
          <h2>useEffect Hook'u</h2>
          <Alert>
                    {message} - {}
          </Alert>
                    <ButtonGroup>
                              <Button variant='success' onClick={() => setMessage("Error")}>
                                        Set Message
                              </Button>
                              <Button variant='danger'>
                                Throw Error
                              </Button>
                              <Button onClick={() => setCounter((prev) => prev + 1)}>
                              {counter}
                              </Button>
                    </ButtonGroup>
          
</Container>

  )
}

export default UseEffect