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


    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied", "success")
        setTimeout(() => {
            props.setAlert(null)
        }, 1500);
    }

    const handleClearClick = () => {
        setText("")
        props.showAlert("Text Cleared", "danger")
        setTimeout(() => {
            props.setAlert(null)
        }, 1500);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
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
                        <button disabled={text.length === 0} className="btn btn-primary my-3" onClick={handleUpClick}>Change to upper case</button>
                        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleDownClick}>Change to Lower case</button>
                        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
                        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear text</button>
                        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleBoldClick}>Bold Text</button>

                    </div>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length - (text.split(" ").length - 1)} characters</p>
                <p>{((text.split(/\s+/).filter((element) => { return element.length !== 0 }).length) * 0.008)} minutes will be taken by slow reader and {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length * 0.0035} minutes will be taken by fast reader</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "enter something in above box to preview it here"}</p>
                {/* <p><i>{text}</i></p> */}
            </div>
        </>
    )
}