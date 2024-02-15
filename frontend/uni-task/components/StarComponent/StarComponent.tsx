import "./StarComponent.css"
import { IoStarSharp } from "react-icons/io5";

interface StarContainerProps {
  numStars: number
}

const StarComponent = ({numStars}: StarContainerProps) => {
  const displayStars = Array(numStars).fill(<IoStarSharp color="#d08fd1" style={{marginRight: "1px", fontSize: "2vw"}}/>)
  
  return (
    <div id="star-container">
      {displayStars}
    </div>
  )
}

export default StarComponent