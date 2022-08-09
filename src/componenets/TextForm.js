import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text Changed to Upper Case", "success")
        setTimeout(() => {
            props.setAlert(null)
        }, 1500);
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Text Changed to Lower Case", "success")
        setTimeout(() => {
            props.setAlert(null)
        }, 1500);

    }
    const handleBoldClick = () => {
        let newtext = document.getElementById('myBox')
        if (newtext.style.fontWeight === "bold") {
            newtext.style.fontWeight = "400"
            props.showAlert("Text Changed to normal Font", "success")
            setTimeout(() => {
                props.setAlert(null)
            }, 1500);

        } else {
            newtext.style.fontWeight = "bold"
            props.showAlert("Text Changed to bold Font", "success")
            setTimeout(() => {
                props.setAlert(null)
            }, 1500);

        }


    }


    const handleClearClick = () => {
        setText("")
        props.showAlert("Text Cleared", "danger")
        setTimeout(() => {
            props.setAlert(null)
        }, 1500);
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    // const [syle, setSyle] = useState("");
    // setText("hello");
    return (
        <>
            <div className="comtainer" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div>
                    <h1>{props.heading}</h1>
                    <div className="my-3" >
                        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042736' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                        <button className="btn btn-primary my-3" onClick={handleUpClick}>Change to upper case</button>
                        <button className="btn btn-primary my-3 mx-2" onClick={handleDownClick}>Change to Lower case</button>
                        <button className="btn btn-primary my-3 mx-2" onClick={handleBoldClick}>Bold Text</button>
                        <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear text</button>

                    </div>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text summary</h1>
                <p>{text.split(" ").length - 1} words and {text.length - (text.split(" ").length - 1)} characters</p>
                <p>{((text.split(" ").length - 1) * 0.008)} minutes will be taken by slow reader and {(text.split(" ").length - 1) * 0.0032} minutes will be taken by fast reader</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "enter something in above box to preview it here"}</p>
                {/* <p><i>{text}</i></p> */}
            </div>
        </>
    )
}