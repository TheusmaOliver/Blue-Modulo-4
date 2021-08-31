import React from 'react'
import { useParams } from 'react-router-dom'
import BlogInfoComponent from '../../components/BlogInfoComponent/BlogInfoComponent'
import Topbar from '../../components/Topbar/Topbar';

export default function Bloginfo() {
    const { id } = useParams();
    return (
        <div>
            <Topbar/>
            <BlogInfoComponent id={id}/>
        </div>
    )
}
