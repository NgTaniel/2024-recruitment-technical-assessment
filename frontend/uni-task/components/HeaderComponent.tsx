import { useState } from "react"

export default function HeaderComponent() {
  const [color, setColor] = useState("#0185fe");

  const handleColorChange = () => {
    const nextColor = color === "#0185fe" ? "red" : "#0185fe";
    setColor(nextColor);
  }

  return (
    <>
      <div id="header-text" style={{lineHeight: "0%", fontFamily: "Helvetica"}}>
        <h4 style={{fontWeight: "500", color: "black"}}>DevSoc presents</h4>
        <button style={{
          fontWeight: "900", 
          color: color, 
          border: "none", 
          outline: "none", 
          background: "none", 
          fontSize: "5.2vw", 
          padding: "0"
          }} 
          onClick={handleColorChange}>
            unilelectives
        </button>
        <h3 style={{fontWeight: "800", color: "black"}}>Your one-stop shop for UNSW course and elective reviews</h3>
      </div>

      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg> */}

      <input
        type="text"
        placeholder="🔍        Search for a course e.g. COMP1511"
        style={{
          marginTop: "2vw",
          width: "100%",
          fontFamily: "Helvetica",
          border: "1.5px solid #0185fe",
          color: "#0185fe",
          padding: "1vw"
        }}
      />

      <button
        style={{
          marginTop: "2vw",
          width: "20%",
          border: "1.5px solid #b2b2b2",
          color: "#b2b2b2",
          textAlign: "start",
        }}
        >
          Sort by
      </button>
    </>
  )
}
