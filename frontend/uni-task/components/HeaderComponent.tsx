import { useState } from "react"
import "./HeaderComponent.css"
import downArrow from "../../assets/down-arrow.png"
import DivComponent from "../components/DivComponent"

const HeaderComponent = () => {
  // Stretch Task 1
  const [color, setColor] = useState("#1479f2");

  const handleColorChange = () => {
    const nextColor = color === "#1479f2" ? "red" : "#1479f2";
    setColor(nextColor);
  }

  // Stretch Task 2
  const [popup, setPopup] = useState<boolean>(false);

  const divPopup = () => {
    setPopup(true);
  }
  const closePopup = () => {
    setPopup(false);
  }

  return (
    <>
      <div id="header-text">
        <h4>DevSoc presents</h4>

        {/* Stretch Task 1 */}
        <button style={{ color: color }} onClick={handleColorChange}>
          unilelectives
        </button>
        <h3>Your one-stop shop for UNSW course and elective reviews</h3>
      </div>

      <div id="searchbar">
        <button onClick={divPopup}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <p>Search for a course e.g COMP1511</p>
        </button>

        {/* Stretch Task 2 */}
        <div id="popup">
          <DivComponent isOpen={popup} onClose={closePopup}>
            <p>Hello there, this div is popping up</p>
            <button onClick={closePopup}>CLOSE</button>
          </DivComponent>
        </div>
      </div>

      <div id="header-comps">
        <button>
          Sort by <span style={{ paddingRight: "3em" }}></span> <img src={downArrow} alt="arrow" />
        </button>
      </div>
    </>
  )
}

export default HeaderComponent;