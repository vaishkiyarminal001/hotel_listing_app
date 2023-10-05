import "./Home.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BathtubIcon from '@mui/icons-material/Bathtub';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Home() {


  const [hotel, setHotel] = useState([]);
  // console.log(hotel);

  const [city, setCity] = useState("New York");
  // console.log(city);

  const navigate = useNavigate();

  const [count, setCount] = useState(3);

  useEffect(() =>{
    displayHotel();
  },[city, count]);

  // display hotel

  const displayHotel = async() =>{
    let url = `https://rentcar-5a8v.onrender.com/hotel?city=${city}&_limit=${count}`;

    const res = await fetch(url);
    const data = await res.json();
    setHotel(data);
    
  }


  const handleShowMore = () => {
    
    setCount(count + 3); 
  }

  return (

    <div className="hotel-mainCard">
      
      <div className="textTop">
        <h1>Features Listed Property</h1>
        <p>Real estate can be bought, sold, leased, or rented, and can be a<br/>
valuable investment opportunity. The value of real estate can be...</p>
      </div>


      <div className="cityName">
        <button style={{background:"#3739e4", color: "white"}} onClick={() => {setCity("New York"); setCount(3);}}>New York</button>
        <button onClick={() => {setCity("Mumbai"); setCount(3);}}>Mumbai</button>
        <button onClick={() => {setCity("Paris"); setCount(3);}}>Paris</button>
        <button onClick={() => {setCity("London"); setCount(3);}}>London</button>
      </div>

      <div className="imageHotel">

        {hotel.map((e) =>(
          
          <div key={e.id} className="image">
            <img src={e.image} alt={e.title}/>

            <div className="text">
            <p><LocationOnIcon className="icon" style={{color:"#ad9462",}}/>{e.address}</p>
            <h2>{e.title}</h2>

            <div className="details">
              <p><ApartmentIcon className="icon"/>{e.room}</p>
              <p><BedroomParentIcon className="icon"/>{e.bed}</p>
              <p><BathtubIcon className="icon" />{e.bath}</p>
              <p><OpenWithIcon className="icon" />{e.sft}</p>
            </div>

            <div className="price">
              <h4>{e.price}<span>/month</span></h4>
              <button onClick={() => navigate(`property/${e.id}`)}>Read More</button>
            </div>
          </div>
          </div>

    
        ))}
      </div>


      <div className="showButton">
        <button onClick={handleShowMore}>Show More</button>
      </div>









    </div>
  )
}
