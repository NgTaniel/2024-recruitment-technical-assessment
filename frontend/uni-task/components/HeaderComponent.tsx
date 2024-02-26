import { useState } from "react"
import "./HeaderComponent.css"
import downarrow from "../../assets/down-arrow.png"

export default function HeaderComponent() {
  // Stretch Task 1
  const [color, setColor] = useState("#0185fe");

  const handleColorChange = () => {
    const nextColor = color === "#0185fe" ? "red" : "#0185fe";
    setColor(nextColor);
  }

  return (
    <>
      <div id="header-text">
        <h4>DevSoc presents</h4>
        <button style={{ color: color }} onClick={handleColorChange}>
          unilelectives
        </button>
        <h3>Your one-stop shop for UNSW course and elective reviews</h3>
      </div>

      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg> */}

      <div id="header-comps">
        <input type="text" placeholder="🔍︎       Search for a course e.g. COMP1511" />

        <button>
          Sort by <span style={{ marginRight: "3em" }}></span> <img src={downarrow} alt="arrow" />
        </button>
      </div>
    </>
  )
}
