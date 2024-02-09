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
      <h3 id="course-code" style={{fontWeight: "900", color: "black", fontSize: "1.5vw"}}>{list.course_prefix}{list.course_code}</h3>
      <div id="star-section" style={{
        marginLeft: "10vw", 
        marginTop: "-3.7vw",
        paddingLeft: "3vw"
        }}>
        <StarComponent numStars={list.average_stars}/>
        <h5 id="course-review" style={{marginTop: "1vw", color: "#b2b2b2"}}>{list.total_reviews} reviews</h5>
      </div>
      <h5 id="course-name" style={{fontWeight: "500", color: "black", marginBottom: "2vw"}}>{list.course_title}</h5>
      <div id="term-list-container" 
        style={{
          background: "#c9e5ff", 
          color: "black",
          fontSize: "75%",
          width: "max-content",
          borderRadius: "10px",
          marginTop: "4vw"
        }}>
        {termList}
      </div>
    </div>
  )
}

export default TermComponent