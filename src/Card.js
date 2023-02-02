import React,{useState,useEffect} from 'react'
import "./App.css";
import ReadMoreReadLess from './Readmoreless';

function Card() {
    const [user,setUser] = useState([]);

    const [readless,readmore] = useState(0);
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
            <p>City: {data.location.city}</p> 
            <p>State: {data.location.state}</p>
            <p>Country: {data.location.country}</p>
            <p>Contact Details: {data.phone}</p>
            <div className='card-button'>
            <button type="button" onClick={() => readmore(1)}>Read More</button>
                {/* <ReadMoreReadLess limit={10}>
                    Loerem50
                    abjvajhbdhfbwkbkjbkjb
                </ReadMoreReadLess> */}
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