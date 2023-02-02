import React,{useState,useEffect} from 'react'
import "./App.css";

function Card() {
    const [user,setUser] = useState([]);

    const fetchData =()=>{
        fetch("https://randomuser.me/api/?nat=us&results=10&page=1")
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            let details = data.results
            console.log(details);
            setUser(details)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])

    return (
    <>
    <h2>Welcome to User details Website</h2>
    <div className='stories-div'>
    {user.map(data =>(
        <>
        <div className='card'>
            <h2>Name: {data.name.first+" "+data.name.last}</h2>
            <p>City: {data.location.city}</p> 
            <p>State: {data.location.state}</p>
            <p>Country: {data.location.country}</p>
            <p>Contact Details: {data.phone}</p>
            <div className='card-button'>
                <a href="./moredetails.js">Read More</a>
            </div>   
        </div>
        </>
    ))}
    </div>
    </>
    )
}

export default Card