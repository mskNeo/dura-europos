import { Component } from "react";
import './Footer.css'
import { MenuItems } from "../Navbar/MenuItems"

class Footer extends Component {

  render(){
    return(
      <div className="FooterItems">
        <div>

        <a href="https://www.yale.edu/" target="_blank" rel="noreferrer noopener">
          <img className="yaleLogo" src={require('../../assets/images/Yale-University-Logo-Header.png')} alt="logo"/>
          </a>

          <p className="copyrightText"><p className="copyright">Ⓒ </p>2022 - Yale University</p>

        </div>

        <a href="https://gsas.yale.edu/" target="_blank" rel="noreferrer noopener">
        <img className="gsasLogo" src={require('../../assets/images/gsas_logo.png')} alt="logo"/>
        </a>

        <a href="https://artgallery.yale.edu/" target="_blank" rel="noreferrer noopener">
        <img className="yuagLogo" src={require('../../assets/images/yuag.png')} alt="logo"/>
        </a>

        <div>
          <p className="links">Links</p>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className="link-list">
                <a className="link-items" href={item.url}>
                {item.title}
                </a>
              </li>
            )
          })}
        </div>

      </div>
    )

  }
}

export default Footer