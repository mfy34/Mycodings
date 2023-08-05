import React from 'react'
import data from "../../assets/data/people.json"

const People = () => {
  return (
    <div style={{textAlign:"center"}}>
          <table style={{width:"500px",margin:"20 rem"}}>
                    <thead>
                              <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>age</th>
                              </tr>
                    </thead>
                    <tbody>
                              {
                                        data.map((people,index) => (
                              <tr key={index} >
                                        <td>{people.id}</td>
                                        <td>{people.name}</td>
                                        <td>{people.age}</td>
                              </tr>
))}
                    </tbody>
          </table>
    </div>
  )
}

export default People