
import React from 'react';

const About = (props) => {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white'
    }
    return (

        <> <div className="conatiner my-30 " style={myStyle}>
            <h1 className='text-3xl '>About us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item " style={myStyle}>
                    <h2 className="accordion-header" id="headingOne" style={myStyle}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong>Textee By Junaid </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textee By Junaid Is a text Utility Web App made with React for our daily uses like capitalising all character, converting them in to small caps , Remove Extra spaces ,Bold text (which is not a usefull but i added for viewing in bold also) and you can copy your new text with love.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo" style={myStyle}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong> Vission of textee</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            I made it for a practice project but in future I will try to add more funtionallities to it.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree" style={myStyle}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <strong>Found Helpfull</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            If you found textee helpfull please share with your friend and rate my repo on github. <a href="https://github.com/theonlyjunaid/textee"> Click me for repo</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default About;