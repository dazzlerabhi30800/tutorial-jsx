import React,{useState} from 'react'




export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('function is clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLoClick = () => {
        console.log('function is clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase","success")
    }
    const handleClearClick = () => {
        console.log('function is clicked');
        let newText = '';
        setText(newText);
        props.showAlert("Text Area has been cleared","success")
    }


    // const [textColor ,setTextColor] = useState('black');
    // const handleColor = (e) => {
    //     const textC = document.getElementById('myBox');
    //     textC.style.color = 'red';

    //     setTextColor(textC)
    // }
    // const handleColorB = (e) => {
    //     const textC = document.getElementById('myBox');
    //     textC.style.color = 'black';

    //     setTextColor(textC)
    // }
   

    const handleOnChange = (event) => {
        console.log('On change');
        setText(event.target.value)
    }

    const [text,setText] = useState("Enter text here");
    return (
        <>
        <div className = "container" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                
                <textarea style = {{backgroundColor : props.mode === 'light' ? 'white' : 'grey',color : props.mode === 'light'? 'black' : 'white'}} value = {text} className="form-control" onChange = {handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick = {handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick = {handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick = {handleClearClick}>Clear Text</button>
                {/* <button  className="btn btn-primary mx-2" onClick = {handleColor}>Convert to Red Color</button> */}
                {/* <button  className="btn btn-primary mx-2" onClick = {handleColorB}>Convert to Black Color</button> */}
               
        </div>

        <div className="container my-2" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
            <h1>Text Summary</h1>
            {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
            <p>{text.length>0 ? text.trim().split(" ").length : 0} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter something in the textbox to preview here"}</p>
        </div>

        </>
    )
}
