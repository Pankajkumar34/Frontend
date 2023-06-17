import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../CrudFile/Crud.css';
const UpdateFile = () => {
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
        // const { value ,name} = e.target
        const name = e.target.name
        let value = e.target.value
        // if(name=="image"){
        //     value = e.target.files[0]
        // }
        console.log(value)


        setuserData({ ...userData, [name]: value })


    }

    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        const Edit = async () => {
            const reqdata = await axios.put(`http://localhost:5000/put/${id}`, userData);
            // const res= await reqdata.json()
            setuserData(reqdata.data.data)
            // console.log(reqdata.data.data)
        }
        Edit()
    }, [])

    const updateData = (id, e) => {
        e.preventDefault();

        axios.put(`http://localhost:5000/update/${id}`, userData).then((res) => {
            console.log("00", res)
            navigate('/read')
        })


    }
    console.log("oo", userData.hob)
    return (

        <div id="about" className="main-registration ">
            <div className="container">
                <div className="checkbox-design d-flex justify-content-center">
                    <form>
                        <h1>Crud Operataion</h1>
                        <div className="main-group d-flex ">

                            <div className="group-input">
                            <div className="form-text">
                                        <label htmlFor='username'>FirstName</label>
                                        <input type="text" name='first_name' placeholder="enter your firstname" id='first_name' value={userData.first_name} onChange={handle} />
                                    </div>
                                {/* ------------ */}
                                <div className="form-text">
                                    <label htmlFor='lastname'>Last Name</label>
                                    <input type="text" name='lastname' id='lastname' value={userData.lastname} onChange={handle} />
                                </div>
                                {/* ------------ */}

                                <div className="form-text">
                                    <label htmlFor='phonenumber'>phoneumber</label>
                                    <input type="number" name='phone_number' id='phonenumber' value={userData.phone_number} onChange={handle} />
                                </div>
                                {/* ------------ */}
                            </div>

                            <div className="group-input">
                                <div className="form-text">
                                    <label htmlFor='eamil'>Eamil Id</label>
                                    <input type="email" name='email' id='email' value={userData.email} onChange={handle} />
                                </div>
                                {/* ------------ */}

                                <div className="form-text">
                                    <label htmlFor='password'>Password</label>
                                    <input type="password" name='password' id='password' value={userData.password} onChange={handle} />
                                </div>
                                <div className="text-area">
                                    <label htmlFor="message">message</label>
                                    <textarea type="text" name="message" value={userData.message} onChange={handle} />
                                </div>
                            </div>

                        </div>

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
                        <div className="form-text border border-dark">

                            <input type="file" name='image' id='image' onChange={handle} />
                            {/* <img src={userData} className="w-30" /> */}
                        </div>
                        <div className="btn">
                        <button type="submit" class="btn btn-primary" onClick={(e) => updateData(userData._id, e)}>Update</button>
                              
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
export default UpdateFile