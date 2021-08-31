import React from 'react'
import { Dehaze, AccountCircle, FavoriteBorder, NotificationsNone } from '@material-ui/icons'
import './topbar.css'
import { useHistory } from 'react-router-dom'
export default function Topbar() {
    const router = useHistory()
    return (
        <header className="header">
            <button className="header-menu">
                <Dehaze/>
            </button>
            <h1 className="header-title">
                Blue Nutri
            </h1>

            <ul className="header-nav">
                <li className="header-nav-item"><NotificationsNone/></li>
                <li className="header-nav-item" onClick={() => router.push('/favorites')}><FavoriteBorder/></li>
                <li className="header-nav-item"><AccountCircle/></li>
            </ul>
        </header>
    )
}
