import React, { useEffect, useState } from 'react'
import "./TestimonialPage.css"
import { Link } from 'react-router-dom'
import { useThemeContext } from "../context/theme-context";
import TestimonialsCards from '../components/TestimonialsCards'
import data from './TestimonialData.js'

function TestimonialPage() {
    const [TestimonialData, setTestimonialData] =  useState([])
    useEffect(()=>{
      
        setTestimonialData(data)
    })
    const { themeState } = useThemeContext();
  return (
    <main
    id="main"
    className={`${themeState.primary} ${themeState.background}`}
  >
    <div className= {`cont `}>
        <h2>Testimonials</h2>
        <div className="subTitle">
            <h2>Note et Commantaire</h2>
            <Link
            to={"/leave-feedback"}
              className="btn sm primary git"
            >
               Laisser Un Message 
            </Link>
        </div>
        <div className="AllTestimonials">
            {TestimonialData.map((item,index)=>{
                 return <TestimonialsCards ratingStart={item.ratingStart} desc={item.desc} username={item.username} date={item.date}/>
            })}
        </div>
    </div>
    </main>
  )
}

export default TestimonialPage