import StarComponent from '../StarComponent/StarComponent'
import { List } from '../../src/types'
import './TermComponent.css'

interface TermProps {
    list: List
}

const TermComponent = ({list}: TermProps) => {
  const termList = list.offered_terms.map(t => <p id="course-terms">{t}</p>);
  
  return (
    <div id="term-course-components">
      <h3 id="course-code">
        {list.course_prefix}{list.course_code}
      </h3>

      <div id="star-section">
        <StarComponent numStars={list.average_stars}/>
        <h5 id="course-review">
          {list.total_reviews} reviews
        </h5>
      </div>

      <h5 id="course-name">
        {list.course_title}
      </h5>
      
      <div id="term-list-container">
        {termList}
      </div>
    </div>
  )
}

export default TermComponent