import "./StarComponent.css"
import { IoStarSharp } from "react-icons/io5";

interface StarContainerProps {
  numStars: number
}

const StarComponent = ({numStars}: StarContainerProps) => {
  const displayStars = Array(numStars).fill(<IoStarSharp color="#b789e5" style={{fontSize: "2em"}}/>)
  
  return (
    <div id="star-container">
      {displayStars}
    </div>
  )
}

export default StarComponent