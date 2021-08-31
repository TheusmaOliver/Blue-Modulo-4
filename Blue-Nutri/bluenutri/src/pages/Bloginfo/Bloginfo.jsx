import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import { useParams } from 'react-router-dom'
import BlogInfoComponent from '../../components/BlogInfoComponent/BlogInfoComponent'

export default function Bloginfo() {
    const { id } = useParams();
    return (
        <div>
            <Topbar/>
            <BlogInfoComponent id={id}/>
        </div>
    )
}
