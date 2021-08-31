import React from 'react'
import { Dehaze, AccountCircle, FavoriteBorder, NotificationsNone } from '@material-ui/icons'
import './topbar.css'
export default function Topbar() {
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
                <li className="header-nav-item"><FavoriteBorder/></li>
                <li className="header-nav-item"><AccountCircle/></li>
            </ul>
        </header>
    )
}
