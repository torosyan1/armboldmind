import React from 'react';
import ProfilPhoto from '../../assecs/nav/profilphoto.png'
import ProfilPhoto2 from "../../assecs/nav/profilphoto2.svg";
import ProfilPhoto3 from "../../assecs/nav/profilphoto3.png";
import ProfilPhoto4 from "../../assecs/nav/profilphoto4.png";
import ProfilPhoto5 from "../../assecs/nav/profilphoto5.png";
import Facebook from '../../assecs/nav/facebook.svg'
import Linedin from "../../assecs/nav/linkedin.svg";
import './tabs.css'

export const Tabs = () => {

    return (
      <>
        <div className="contenier">
          <div className="tab1">
            <div className="about">About</div>
            <div className="Comments">Comments</div>
          </div>
          <div className="contener2">
            <div className="text1">
              25 Nov<span> Finish</span>
            </div>
            <div className="text2">
              1982<span> 1982</span>
            </div>
          </div>
        </div>
        <div className="contener3">
          <div className="largeText">
            <span>Description</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32. The standard chunk of Lorem Ipsum used since the
              1500s is reproduced below for those interested. Sections 1.10.32
              and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
              also reproduced in their exact original form, accompanied by
              English versions from the 1914 translation by H. Rackham. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like). There are many variations
              of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure
              there isn't anything embarrassing hidden in the middle of text.
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour,
              or non-characteristic words etc. Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
          <div className="Donats">
            <p className="donats_p">Donations</p>
            <ul className="ul_list">
              <li className="li_list">
                <img src={ProfilPhoto} alt="Loading" />
                <div className="data">
                  <p className="nowData">22 Oct 16:04</p>
                  <p className="fullName">
                    Eleonora Saimon <span>$60</span>
                  </p>
                </div>
              </li>
              <li className="li_list">
                <img src={ProfilPhoto2} alt="Loading" />
                <div className="data">
                  <p className="nowData">22 Oct 15:07</p>
                  <p className="fullName">
                    Anna Smith <span>$40</span>
                  </p>
                </div>
              </li>
              <li className="li_list">
                <img src={ProfilPhoto3} alt="Loading" />
                <div className="data">
                  <p className="nowData">22 Oct 10:49</p>
                  <p className="fullName">
                    Roven Joseph Smith <span>$50</span>
                  </p>
                </div>
              </li>
              <li className="li_list">
                <img src={ProfilPhoto4} alt="Loading" />
                <div className="data">
                  <p className="nowData">21 Oct 16:14</p>
                  <p className="fullName">
                    Eleonora Saimon <span>$70</span>
                  </p>
                </div>
              </li>
              <li className="li_list">
                <img src={ProfilPhoto5} alt="Loading" />
                <div className="data">
                  <p className="nowData">22 Oct 16:04</p>
                  <p className="fullName">
                    Tontir Quetier <span>$80</span>
                  </p>
                </div>
              </li>
              <li className="li_list">
                <img src={ProfilPhoto} alt="Loading" />
                <div className="data">
                  <p className="nowData">22 Oct 16:04</p>
                  <p className="fullName">
                    Gillian Silence <span>$150</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='shear'>
          <p>Share this project in social</p>
          <img src={Facebook} alt="loading" />
          <img src={Linedin} alt="loading" />
        </div>
      </>
    );
}