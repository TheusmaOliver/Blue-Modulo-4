import React, { useState, useEffect } from 'react'
import Blogcards from '../../components/Blogcards/Blogcards';
import Topbar from '../../components/Topbar/Topbar';
import api from '../../services/api'; 

export default function Home() {
    const [item,setItem] = useState(undefined)
    
    useEffect(() =>{
       async function loadBlog(){
            const data = await api.get('/rn-api/?api=posts')
                .then((response) =>{
                   setItem(response.data);
               })
            return data;
       }
       loadBlog();
     
    },[]);

    return (
        <div>
            <Topbar/>
            {!item
                ? <div> carregando </div>
                : <Blogcards info={item}/>}
            
        </div>
    )
}
