import React,{useState,useEffect} from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import '../css/View.css';

const View = ()=>{
    const [user,setState]=useState(null);
    const {id} = useParams();

useEffect(()=>{
    if(id){
        getSingleUser(id);
    }
},[id])

 const getSingleUser = async(id)=>{
    const response= await axios.get(`http://localhost:5000/user/${id}`);
    if(response.status===200){
        setState({...response.data[0]});
    }

 }
    return(
        <div style={{marginTop:"50px"}}>
            <div className="card">
                <div className="card-header">
                    <p>User Contact Details</p>
                </div>
                <div className="container">
                <strong>ID:</strong>
                <span>{id}</span>
                <br />
                <br />
                <strong>Name:</strong>
                <span>{user && user.name}</span>
                <br />
                <br />
                <strong>Email:</strong>
                <span>{user && user.email}</span>
                <br />
                <br />
                <strong>Contact:</strong>
                <span>{user && user.contact}</span>
                <br />
                <br />
                <Link to="/">
                    <button className="btn btn-edit">Go To Home</button>
                </Link>
                </div>
            </div>
        </div>
    );
};
 
export default View;