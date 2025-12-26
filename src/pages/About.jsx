import React from 'react'
import '../stylesheets/About.css';

function About() {
  return (
    <div className='aboutPage'>
      <h1 className='aboutHeading'>About Movie Explorer</h1>
      <div className='paras'>
        <p className='para'>Movie Explorer is a modern React application built for movie enthusiasts 🎬 who love to discover and explore films effortlessly. With a clean and responsive interface, users can browse a curated list of movies and find all the details they need at a glance 👀.</p>
        <p className='para'>Users can view important information like release year 📅, genre 🎭, rating ⭐, and full descriptions of each movie. The goal is to provide an experience similar to popular streaming platforms, where every movie is easy to explore and visually appealing ✨.</p>
        <p className='para'>This project was created using React ⚛️ for building interactive UI and React Router 🔀 for seamless navigation between pages. Styling is done with CSS 🎨, focusing on readability, responsive layouts, and smooth interactions for a polished user experience.</p>
        <p className='para'>Movie Explorer also includes a dedicated Movie Details page 📝 for deeper exploration of individual movies and a 404 page ❌ to handle invalid routes gracefully. The app provides a seamless, enjoyable, and visually engaging experience for anyone looking to explore movies 🌟.</p>
      </div>
    </div>
  )
}

export default About
