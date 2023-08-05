import React from 'react'
import Korkuluk from "../../assets/img/image2.jpg"
const Image = () => {
          const ortakStil = {
          margin: '0 1rem'
          }
  return (
    <div>
          {/* STATIC IMAGE*/}
          <img src="./image1.jpg" alt=""
          height={300}
          style={ortakStil}
           />
          {/*HARICI IMAGE*/}
          <img src="https://picsum.photos/id/237/200/300" alt="dog"
          height= {200}
          style={ortakStil}
          />
          {/* Import Yöntemi*/}
          
          <img src={Korkuluk} alt="korkuluk"
          height= {200}
          style={ortakStil}
          />
          {/* Requıre Yöntemi*/}
          <img src={require("../../assets/img/image2.jpg")} alt="" />


    </div>
  )
}

export default Image