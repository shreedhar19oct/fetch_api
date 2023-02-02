import React,{useState,useEffect} from 'react'
import "./App.css";
import ReadMoreReadLess from './Readmoreless';

function Card() {
    const [user,setUser] = useState([]);

    const [readless,readmore] = useState(1);
    console.log(readless);

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
            
            <p>Country: {data.location.country}</p>
            <div className='card-button'>
            {/* <button type="button" onClick={() => readmore(1)}>Read More</button> */}
            {
                readless===1? <ReadMoreReadLess>
                <h4>Gender: {data.gender} </h4> 
                <h4>Email: {data.email} </h4>
                <h4>Age: {data.dob.age} </h4>
                <h4>Contact Details: {data.phone} </h4>
                <h4>Location: {data.location.city + ", " + data.location.state}</h4> 
                </ReadMoreReadLess> : null 
            }
            </div>   
        </div>
        </>
    ))}
    </div>
    </>
    )
    console.log(readless);
}

export default Card