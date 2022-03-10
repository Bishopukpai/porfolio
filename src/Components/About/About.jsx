import React,{} from 'react'
import logo from '../assets/Bishop.jpg'
import './Style.css'
import {Link} from 'react-router-dom'

import fourCard from '../assets/Capture2.PNG'
import calculator from '../assets/Capture.PNG'
import eCommerce from '../assets/Capture1.PNG'
const About = () =>{


    return(
        <div className='about'>
            <img src ={logo} className="about-image"/>
            <h2>Hi I am Bishop Ukpai a Software developer</h2>
            <p>Allow Me introduce myself, I am obssesed with creating baeutiful and amazing softwares with React
                <br/>
            <p>I love working with people with similar goal and vision in creating dynamic and beautiful web applications</p>
            <p>I started working with React about a year a go, but trust me my quest for more knowledge have led me to building amazing web applications to populate my portfolio</p>
            <p>My specialty is in front-end web developemnent and I am comfortable working with Html, Css and JavaScript along side JavaScript frameworks like React, I also have a good knowledge of How API work and How to create one using Nodejs and Expressjs</p>
            <p>below Are some of the things I have created with React, html ,and JavaScript</p>
                <div className='project-name'>
                <div className='fourcard'>
                <img src={fourCard}/>
                <p>A fully responsive fourcard displaying items, check it out <Link to={{pathname:"https://bishopukpai.netlify.app/"}} target="_blank">here</Link></p>
                </div>
                <div className='calculator'>
                <img src={calculator}/>
                <p>A fully functional Calculator web application, desigened with ReactJs. <br/>
                It can add numbers, divide numbers find the square of numbers, raise numbers to power, display the result of arithematic operations in the screen and many more
                the calculator is also very responsive. Take a look at it in <Link to={{pathname:"https://bishopcalculator.netlify.app/"}} target="_blank">Here</Link>
                </p>
                </div>
                <div className='eCommerce'>
                <img src={eCommerce}/>
                <p>A Fully functional eCommerce web application, created also with React <br/>
                With the functionality of adding items to the cart of users and removing them from the cart, users can also increment the number of items they have in the cart manually from the acrt's page. <br/> It was built with ReactJs, and uses commercejs API endpoints.<br/>
                it also makes use of stripe for payment options <br/> check it out here <Link to={{pathname:"https://bishopcommerce.netlify.app/"}} target="_blank">Here</Link> </p>
                </div>
                </div>
            </p>
            
             <p>I also have a <Link to={{pathname: "https://github.com/Bishopukpai"}} target="_blank">github</Link> profile where i contribut to other open source web applications and assist the team in build and managing great software, feel free to connect with me on <Link to={{pathname:"https://twitter.com/bishop_ukpai"}}>Twitter</Link> and <Link to={{pathname:"https://www.linkedin.com/in/ukpai-bishop-624158201/"}} target="_blank">linkedln</Link></p>
            
        </div>
        
    )
}
export default About