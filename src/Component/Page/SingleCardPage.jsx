import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BathtubIcon from '@mui/icons-material/Bathtub';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SingleCardPage() {
  const { id } = useParams();
  console.log(id);

  const [state, setState] = useState({});
  console.log(state);

  const navigate = useNavigate();

  useEffect(() => {
    displaySingle();
  }, []);

  const displaySingle = async () => {
    const res = await fetch(`https://rentcar-5a8v.onrender.com/hotel/${id}`);
    const data = await res.json();
    setState(data);
  }

  console.log(state.image);

  return (

    <div className="mainContainer">

<div key={state.id} className="image">
            <img src={state.image} alt={state.title}/>

            <div className="text">
            <p><LocationOnIcon className="icon" style={{color:"#ad9462",}}/>{state.address}</p>
            <h2>{state.title}</h2>

            <div className="details">

            <p><ApartmentIcon className="icon" />{state.room}</p>
            <p><BedroomParentIcon className="icon" />{state.bed}</p>
            <p><BathtubIcon className="icon" />{state.bath}</p>
            <p><OpenWithIcon className="icon" />{state.sft}</p>

            </div>

            <div className="price">
              <h4>{state.price}<span>/month</span></h4>
              <button onClick={() => navigate(`/`)}>Back to Home</button>
            </div>
          </div>
          </div>

    </div>
   


  )
}
