import React from 'react'
import { Link } from 'react-router-dom';

import {arrow} from "../assets/icons";



const InfoBox=({text,link,btnText})=>{
    return (
        <div className='info-box'>
            <p className='font-medium sm:text-xl text-center'>
                {text}
            </p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
                <img src={arrow} className='w-4 h-4 object-contain'/>
            </Link>
        </div>
    );
}

const renderContent = {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 mx-5'>
            Hi, I am <span className='font-semibold'>Htoo Hla Oo</span>
            <br/>
            Junior Developer from Myanmar
        </h1>
    ),
    2:(
        <InfoBox text="Familiar with JS and Python environments" 
                link="/about"
                btnText="Learn more"
        />
    ),
    3:(
        <InfoBox text="Been developing some personal projects as my hobby.Curious about my projects?" 
                link="/projects"
                btnText="Go to projects"
        />
    ),
    4:(
        <InfoBox text="Need a dev or have a project to be done? Just one click away!" 
                link="/contact"
                btnText="Contact"
        />
    ),
}



const HomeInfo = ({currentStage}) => {
  return (
    renderContent[currentStage] || <p></p>
  );
}

export default HomeInfo