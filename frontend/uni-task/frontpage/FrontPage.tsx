// import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import CourseComponent from '../components/CourseComponent/CourseComponent.tsx'
import SidebarComponent from '../components/SidebarComponent/SidebarComponent.tsx'
import './FrontPage.css'

export default function FrontPage() {
  return (
    <>
    <div id="sidebar-container">
      <SidebarComponent/>
    </div>

    <div id="front-page-container">
      <HeaderComponent/>
      <CourseComponent/>
    </div>
    </>
  )
}
