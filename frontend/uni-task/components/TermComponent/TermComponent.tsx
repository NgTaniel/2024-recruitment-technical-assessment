import StarComponent from '../StarComponent/StarComponent'
import { List } from '../../src/types'
import './TermComponent.css'

interface TermProps {
    list: List
}

const TermComponent = ({list}: TermProps) => {
  const termList = list.offered_terms.map(t => <p id="course-terms" style={{display: "inline", padding: "1em"}}>{t}</p>);
  
  return (
    <div id="term-course-components">
      <h3 id="course-code">{list.course_prefix}{list.course_code}</h3>
      <div id="star-section" style={{
        marginLeft: "10vw", 
        marginTop: "-3.7vw",
        }}>
        <StarComponent numStars={list.average_stars}/>
        <h5 id="course-review">{list.total_reviews} reviews</h5>
      </div>
      <h5 id="course-name">{list.course_title}</h5>
      <div id="term-list-container" 
        style={{
          background: "rgba(0, 0, 0, 0.5)", 
          width: "max-content",
          borderRadius: "5px",
          marginTop: "4vw"
        }}>
        {termList}
      </div>
    </div>
  )
}

export default TermComponent