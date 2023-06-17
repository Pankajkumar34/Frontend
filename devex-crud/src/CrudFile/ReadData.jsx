import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../CrudFile/Crud.css'
const ReadDat = () => {
  const [readData, setReadData] = useState([])
  const fetchData = async () => {
    axios.get('http://localhost:5000/get').then((res) => {
      setReadData(res.data.data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const deleteData = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`).then((res) => {
      console.log(res)
      fetchData()
    })

  }

  const editData = () => {

  }


  //   const vewData=(id)=>{
  // const singleData= readData.find((e)=>{
  //   return e._id===id
  // })
  // console.log(singleData)
  //   }

  // console.log("yy", readData)
  return (
    <>
      <table className="table">
        <thead>
          <tr>

            <th scope="col">Photo</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Hobbies</th>
            <th scope="col">Gender</th>
            <th scope="col">message</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>




          {readData.map((ele) => {
            return (
              <>
                <tr>
                  <td><img src={'http://localhost:5000/image/' + ele.image} className="photo" alt="" /></td>
                  <td>{ele.first_name}</td>
                  <td>{ele.lastname}</td>
                  <td>{ele.phone_number}</td>
                  <td>{ele.hobbies}</td>
                  <td>{ele.gender}</td>
                  <td>{ele.message}</td>
                  <td><button onClick={() => deleteData(ele._id)} class="btn btn-danger">delete</button></td>
                  <td>
                    <Link to={`/edit/${ele._id}`}>
                      <button onClick={editData} class="btn btn-info">edit</button>

                    </Link>

                  </td>
                  <td>
                    <Link to="/view">
                      <button onClick={() => localStorage.setItem("id", ele._id)} class="btn btn-info">vew</button>
                    </Link>

                  </td>

                </tr>
              </>
            )
          })}

        </tbody>
      </table>
      <Link to="/">
        <button  class="btn btn-info">Go to create Page</button>
      </Link>
   
    </>
  )
}

export default ReadDat
