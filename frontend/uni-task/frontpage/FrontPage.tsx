// import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import CourseComponent from '../components/CourseComponent/CourseComponent.tsx'
import './FrontPage.css'

export default function FrontPage() {
  return (
    <>
    <div id="front-page-container">
      <HeaderComponent/>
      <CourseComponent/>
    </div>

    </>
  )
}
