import React from "react"
import "./style.css"
import Button from "./Button" 

const Sport = () =>{
    return(
        <div>
            <h1 style={{ textAlign : "center"}}>Hello Developers</h1>
            <h2 style={{ textAlign : "center"}}>Welcome to My First react Assignment</h2>
            <Button buttonText="Cricket"/>
            <Button buttonText="Football"/>
            <Button buttonText="Basketball"/>
            <Button buttonText="Hockey"/>
        </div>
    )
}

export default Sport