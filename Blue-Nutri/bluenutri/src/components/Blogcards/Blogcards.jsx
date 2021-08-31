import React from 'react'
import './blogcards.css'
import { Link } from 'react-router-dom'


export default function Blogcards({ info }) {
    return (
        <div className="blog">
            <ul className="blog-list">
                {info.map((item)=>(
                    <li key={item.id} className="blog-list-item">
                        <h2 className="blog-item-title">{item.titulo}</h2>
                        <img className="blog-item-image" src={item.capa} alt={item.titulo} />
                        <span className="blog-item-subtitle">{item.subtitulo}</span>
                        <Link to={`/article/${item.id}`} className="blog-item-button">Acessar</Link>
                    </li> 
                ))}
            </ul>
        </div>
    )
}
