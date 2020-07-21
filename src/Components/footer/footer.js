import React from 'react'
import Facebook from '../../assecs/footer/facebook.svg';
import Twitter from "../../assecs/footer/twitter.svg";
import Instagram from "../../assecs/footer/instagram.svg";
import Linkedin from "../../assecs/footer/linkedin.svg";
import Rightarrow from "../../assecs/footer/right-arrow.svg";
import './footer.css'


export const Footer = () => {
    return (
      <>
        <div className="contener4">
          <div className="list">
            <ul class='contact'>
              <li className='Tel'>
                Tel: <span className='phone'>+3740111111</span>
              </li>
              <li>
                Mail: <span className='email'>charity@gmail.com</span>
              </li>
            </ul>
            <ul className="list1">
              <li>Company</li>
              <li>Home</li>
              <li>Project</li>
              <li>Community</li>
              <li>About us</li>
              <li>New</li>
            </ul>
            <ul className="list2">
              <li>Company</li>
              <li>Home</li>
              <li>Project</li>
              <li>Community</li>
              <li>About us</li>
              <li>New</li>
            </ul>
            <ul className="list3">
              <li>Company</li>
              <li>Home</li>
              <li>Project</li>
              <li>Community</li>
              <li>About us</li>
              <li>New</li>
            </ul>
            <ul className="list4">
              <li>Follow us in Social</li>
              <li className="socialIcone">
                <img className='footerIcones' src={Facebook} alt="loading" />
                <img src={Twitter} alt="loading" />
                <img src={Linkedin} alt="loading" />
                <img src={Instagram} alt="loading" />
              </li>
              <li>Subscribe for new projects</li>
              <li className="sub">
                <input placeholder="Your email" />{" "}
                <img src={Rightarrow} alt="loading" />
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}