import React from "react"
import logoimg from '../../assets/image/targeryan.png'

import './styles.css'


export class Navbar extends React.Component{
    render(){
        return (
            <header>
            <nav id="navbar">
              <div className="nav-brand">
                 <img src={logoimg} alt="" />
              <h1>Westeros Dragons Info_</h1>
              </div>
        
              <ul>
                <li>
                  <a href="/">H</a>
                </li>
                <li>
                  <a href="/">Trending</a>
                </li>
                <li>
                  <a href="/">Categories</a>
                </li>
                <li>
                  <a href="/">About us</a>
                </li>
              </ul>
        
            </nav>
          </header>
        )
    }
}
