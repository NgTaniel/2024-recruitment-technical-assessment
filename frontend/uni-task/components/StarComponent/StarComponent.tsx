import "./StarComponent.css"
import { IoStarSharp } from "react-icons/io5";

interface StarContainerProps {
  numStars: number
}

const StarComponent = ({numStars}: StarContainerProps) => {
  const displayStars = Array(numStars).fill(<IoStarSharp color="#ed8dff" style={{marginRight: "3px", marginTop: "3px"}}/>)
  
  return (
    <div id="star-container">
      {displayStars}
    </div>
  )
}

export default StarComponent