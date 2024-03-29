import React from 'react';
import "../../styles/Portfolio.css"
import lemonscreenshot from "../../img/lemonscreenshot.png"
import yggiscreenshot from "../../img/yggiscreenshot.png"
import portfolioscreenshot from "../../img/portfolioscreenshot.png"
import Portfolio2Screenshot from "../../img/Portfolio2Screenshot.png"
import lemonscreenshot2 from "../../img/lemonscreenshot2.png"



const Portfolio = ()=>(
    
<section id="work" className="center-page py-3">
  <div className="container">
    <h2 className="title">My Projects</h2>
    <div className="line"></div>
    
    <p className="paragraph" style={{"margin-bottom": "0px"}}>Click on picture to see website</p>
    <p className="paragraph">Click on <i className="fab fa-github fa-x my-2"></i> to see github repository </p>

    <div className="cards">
      <div className="card">
        <div className="card-image">
          <img src={Portfolio2Screenshot} alt="" height="100%" />
        </div>
        <a href="https://michael-dixonjr.github.io/React-Portfolio-2/" target={"_blank"}>
        <div className="card-text">
          <div className="card-text-wrap">
            <p className="card-text-category">Responsinve Web Design</p>
            <h2 className="card-text-title">React.JS Portfolio</h2>
            <a href="https://github.com/michael-dixonjr/React-Portfolio-2" target={"_blank"}><i className="fab fa-github fa-3x my-2"></i></a>
          </div>
        </div></a>
      </div>
      <div className="card">
        <div className="card-image">
          <img src={yggiscreenshot} alt="" height="100%"/>
        </div>
        <a href="https://askyggi.vercel.app/"target={"_blank"}>
        <div className="card-text">
          <div className="card-text-wrap">
            <p className="card-text-category">Node.JS, JSON and API</p>
            <h2 className="card-text-title">Yggi the AI Chatbot</h2>
            <a href="https://github.com/michael-dixonjr/first-chatbot" target={"_blank"}><i className="fab fa-github fa-3x my-2"></i></a>
          </div>
        </div></a>
      </div>
      <div className="card">
        <div className="card-image">
          <img src={lemonscreenshot2} alt="" height="100%" />
        </div>
        <a href="https://michael-dixonjr.github.io/restaurant-app/"target={"_blank"}>
        <div className="card-text">
          <div className="card-text-wrap">
            <p className="card-text-category">React.js</p>
            <h2 className="card-text-title">Little Lemon Restaurant Page</h2>
            <a href="https://github.com/michael-dixonjr/restaurant-app" target={"_blank"}><i className="fab fa-github fa-3x my-2"></i></a>
          </div>
        </div></a>
      </div>
      

      </div>
  </div>
</section>
)



export default Portfolio
