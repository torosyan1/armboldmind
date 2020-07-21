import React from 'react';
import NavImgSrc from '../../assecs/nav/navImg.jpg'
import Maps from '../../assecs/icone/maps.svg'
import BookMark from '../../assecs/nav/bookmark.svg'
import './nav.css'

export const Nav = () => {
    return (
      <>
        <div className="navContener">
          <img src={NavImgSrc} alt="loding" className="navImg" />
          <div className="Navabsalute">
            <p className="topTitle"> Goal</p>
            <p className="titleDolar">
              $1150000 <span>of</span>
            </p>
            <p className="subTitle">$ 1132500‬ raised</p>
            <p className="salry">
              <span style={{ color: "#F11B5D" }}>*</span> 40% of required amount
              was donated by Charity
              <span style={{ color: "black" }}> Foundation</span>
            </p>
            <div className="inputs">
              <input className="DonationAmount" placeholder="Donation amount" />
              <section>
                <option>USA</option>
              </section>
            </div>
            <div className="submit">
              <button className="DonateNowButton">DONATE NOW</button>
              <p>Can help with anything else?</p>
              <p className="moreaboutit">More about it</p>
            </div>
          </div>
          <div className="checkIn">
            <img src={Maps} alt="loading" />
            <p>Yerevan, Armenia</p>
          </div>
          <p className="Hospital">Gyumri Hospital Reconstruction</p>
          <div className="save">
            <img src={BookMark} alt="loading" />
            <p>Save project</p>
          </div>
          <div className="rectangel">
            <div className="rectangel-items1">
              <div className="item1"> </div>
              <div className="item2"></div>
              <div className="item3"></div>
            </div>
            <div className="rectangel-items2"></div>
          </div>
          <p className="progress">
            Work progress<span> for 07 Nov</span>
          </p>
          <p className="collection">
            Collected <span> $ 1132500‬</span>
          </p>
        </div>
      </>
    );
}