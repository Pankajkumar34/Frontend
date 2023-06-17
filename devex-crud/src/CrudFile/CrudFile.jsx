import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../CrudFile/Crud.css'



const CrudFile = () => {
    const navigate = useNavigate()
  
    const [userData, setuserData] = useState({
        first_name: "",
        lastname: "",
        phone_number: "",
        email: "",
        password: "",
        hobbies: "",
        gender: "",
        message: "",
        image: ""
    })
   

    const handle = (e) => {
        const name = e.target.name
        let value = e.target.value;
        if (name =="image") {
            value = (e.target.files[0])
        }
      
        setuserData({ ...userData, [name]: value })

        // setFile(URL.createObjectURL(e.target.files[0]));
    }



    //submit button
    const handleSumblit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        // debugger
        formData.append("first_name", userData.first_name)
        formData.append("lastname", userData.lastname)
        formData.append("phone_number", userData.phone_number)
        formData.append("email", userData.email)
        formData.append("password", userData.password)
        formData.append("hobbies", userData.hobbies)
        formData.append("gender", userData.gender)
        formData.append("message", userData.message)
        formData.append("image", userData.image)
        // console.log("oo", formData)
        axios.post('http://localhost:5000/upload', formData).then((res) => {
            console.log(res)
            navigate('/read')
        }).catch((err) => {
            console.log("not found")
        })
    }

    // show and hide password state
    const [toggle, setTogle] = useState(false)
    const [passwordShow, setPasswordShow] = useState("password")
    const show = (e) => {
        e.preventDefault();
        setPasswordShow("text")
        setTogle(true)
    }

    const hidePassword = (e) => {
        e.preventDefault();
        setPasswordShow("password")
        setTogle(false)
    }

    return (
        <div className=" main-registration" >
            <div className="container">
             
                    <div className="checkbox-design d-flex justify-content-center">

                        <form action="/upload" method="post" >
                        <h1>Crud Operataion</h1>
                            <div className="main-group d-flex text-align-center">
                          
                                <div className="group-input">
                                    <div className="form-text">
                                        <label htmlFor='username'>FirstName-</label>
                                        <input type="text" name='first_name' placeholder="enter your firstname" id='first_name' value={userData.first_name} onChange={handle} />
                                    </div>
                                    {/* ------------ */}
                                    <div className="form-text">
                                        <label htmlFor='lastname'>Last Name-</label>
                                        <input type="text" name='lastname' placeholder="enter yourlastname" id='lastname' value={userData.lastname} onChange={handle} />
                                    </div>
                                    {/* ------------ */}
                                    <div className="form-text">
                                        <label htmlFor='phone_number'>phoneumber-</label>
                                        <input type="text" name='phone_number' placeholder="enter your number" id='phonenumber' value={userData.phone_number} onChange={handle} />
                                    </div>
                                    {/* ------------ */}


                                </div>


                                <div className="group-input">

                                    {/* ------------ */}
                                    <div className="form-text">
                                        <label htmlFor='password'>Password-</label>
                                        <div className="input-text">
                                            <input type={passwordShow} name='password' id='password'
                                                placeholder="enter your password"
                                                value={userData.password} onChange={handle} >
                                            </input>
                                            {toggle === false ? <i className="fa fa-eye-slash" onClick={show}></i> : <i class="fa fa-eye fa fa-eye-slash2" onClick={hidePassword}></i>}

                                        </div>

                                    </div>
                                    <div className="form-text">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name='email' placeholder="enter your email" id='email' value={userData.email} onChange={handle} />
                                    </div>


                                    <div className="text-area mt-1">
                                        <label htmlFor="message">Message-</label>
                                        <textarea type="text" placeholder="enter your massage" name="message" value={userData.message} onChange={handle} />
                                    </div>
                                </div>
                            </div>



                            <div className="file-image">

                                <input type="file" name='image' onChange={handle} />
                                {/* <img src={userData.image} className="w-30" /> */}
                            </div>


                            {/* checkbox here start */}
                            <div className="checkbox-gender d-flex text-align-center ">

                                <div className="checkbox-set">
                                    <h4 className="heading ">Select your Hobbies</h4>
                                    <div className="input-text">
                                        <label htmlFor="hobbies">playing</label>
                                        <input type="checkbox" name="hobbies" value="music" onChange={handle} />
                                    </div>
                                    <div className="input-text">
                                        <label htmlFor="hobbies">singing</label>
                                        <input type="checkbox" name="hobbies" value="playing" onChange={handle} />
                                    </div>
                                </div>



                                {/* ///gender */}
                                <div className="radio">
                                    <h4 className="heading ">Select Gender</h4>
                                    <div className="male-gender">
                                        <label htmlFor="gender ">male &nbsp;</label>
                                        <input className="gender-text move" type="radio" name='gender' value='male' onChange={handle} />
                                        &nbsp;
                                    </div>
                                    <div className="male-gender">
                                        <label htmlFor="female">Female &nbsp;</label>
                                        <input className="gender-text move1" type="radio" name='gender' value='Female' onChange={handle} />
                                        &nbsp;
                                    </div>


                                </div>
                            </div>
                            <div className="btn">
                                <Link to='/read'>
                                    <button type="submit" class="btn btn-primary" onClick={handleSumblit}>Registration</button>
                                </Link>
                            </div>

                        </form>
                        <div className="curd-opretaion ">
                            <h2 className="heading-crud"> <span className="sp-crud">Crud</span>  Operataion with backend <span>And</span> frontend</h2>

                        </div>

                    </div>


                

            </div>
        </div>
    )






}
export default CrudFile