// import React from "react"

export default function HeaderComponent() {
  return (
    <>
      <div id="header-text" style={{lineHeight: "0%"}}>
        <h3>DevSoc presents</h3>
        <h1>unilelectives</h1>
        <h3>Your one-stop shop for UNSW course and elective reviews</h3>
      </div>

      <input
        type="text"
        placeholder="Search for a course e.g. COMP1511"
        style={{
          marginTop: "2vw"
        }}
      />

      <button
        style={{
          display: "block",
          marginTop: "2vw"
        }}
        >
          Sort by
      </button>
    </>
  )
}