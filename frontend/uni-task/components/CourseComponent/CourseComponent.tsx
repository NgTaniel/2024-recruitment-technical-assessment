import { useState } from 'react'
import { List } from '../../src/types'
import { courseData } from '../sampleData'
import TermComponent from '../TermComponent/TermComponent'
import './CourseComponent.css'

const CourseComponent = () => {
  const [gridList, setGridList] = useState<List[]>(courseData);

  const courseList = gridList.map((l) => {
    return <div><TermComponent list={l}/></div>
  })
  
  return (
    <div id="courses-list-container">{courseList}</div>
  )
}

export default CourseComponent