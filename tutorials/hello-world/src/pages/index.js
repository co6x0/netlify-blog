import React from "react"
import dummyImg from "../assets/images/dummy_img-1.jpg"

export default () => (
  <div style={{ color: `purple` }}>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src={dummyImg} alt="" style={{ width: `320px` }} />
  </div>
)
