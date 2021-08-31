import React, { useEffect, useState } from 'react'
import api from '../../services/api'

export default function BlogInfoComponent({id}) {
    const [item,setItem] = useState([])
    
    useEffect(() =>{
      
        
        api.get('/rn-api/?api=posts')
            .then((response) => {
                setItem(response.data);
            })
        
        
    },[item]);
    
    return (
        <div>
            {item.filter(item =>item.id === parseInt(id))
                .map((item,index)=>(
                <div key={index}>
                    <h1>{item.titulo}</h1>
                    <img src={item.capa} alt={item.titulo} />
                    <span>{item.subtitulo}</span>
                    <span>
                        <span>
                            
                        </span>
                    </span>
                </div>
            ))}
        </div>
    )
}
