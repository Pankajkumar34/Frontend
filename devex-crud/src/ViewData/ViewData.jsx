import axios from 'axios'
import React, { useState } from 'react'
import '../ViewData/View.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
function ViewData() {
    const [store, setStore] = useState('')

    const getSingleData = async () => {
        const id = localStorage.getItem("id")
        const getData = await axios.get(`http://localhost:5000/get/${id}`)

setStore(getData.data.data)
    }

    useEffect(() => {
        getSingleData()
    },[])
    console.log("pp",store)
    return (
        <>
         <div className="container">
            <div className="mainbox d-flex">
                <div className="imageData ">
                    <img  src={'http://localhost:5000/image/' +store.image} alt="photo"  className='imageSet'/>
                </div>
                <div className="text">
                    <h3> Name:{store.first_name}</h3>
                    <h3> last Name:{store.lastname}</h3>
                    <h3> Email:{store.email}</h3>
                    <h3>Phone Number:{store.phone_number}</h3>
                    <h3>Hobbies:{store.hobbies}</h3>
                    <h3>Gender:{store.gender}</h3>
                    <Link to ={`/edit/${store._id}`}>
                      <button  class="btn btn-info">Update</button>
                    </Link>
                </div>
            </div>
         </div>
      
        </>
    )
}

export default ViewData