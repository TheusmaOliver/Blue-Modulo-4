import React, { useState, useEffect } from 'react'
import Blogcards from '../../components/Blogcards/Blogcards';
import Topbar from '../../components/Topbar/Topbar'
import api from '../../services/api'; 

export default function Home() {
    const [item,setItem] = useState([])
    
    useEffect(() =>{
       
        api.get('/rn-api/?api=posts')
            .then((response) =>{
                setItem(response.data);
            })
     
    },[item]);

    return (
        <div>
            <Topbar/>
            <Blogcards info={item}/>
        </div>
    )
}
