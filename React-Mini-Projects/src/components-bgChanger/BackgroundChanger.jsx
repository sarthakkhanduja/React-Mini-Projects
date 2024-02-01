import "./BackgroundChanger.css";


export default function BackgroundChanger({onColorChange, onFontColorChange}) {

    const handleClick = (color, fontColor) => {
        onColorChange(color);
        onFontColorChange(fontColor);
    }
    const buttons = [{
        label: "Red",
        backgroundColor: "Red",
        color: "White"
    }, {
        label: "Green",
        backgroundColor: "Green",
        color: "White"
    }, {
        label: "Yellow",
        backgroundColor: "Yellow",
        color: "Black"
    }, {
        label: "Black",
        backgroundColor: "Black",
        color: "White"
    }, {
        label: "Purple",
        backgroundColor: "Purple",
        color: "White"
    }, {
        label: "Blue",
        backgroundColor: "Blue",
        color: "white"
    }, {
        label: "Default",
        backgroundColor: "Beige",
        color: "Black"
    }]

    return(
        <div className="buttons-holder">
            {buttons.map((button) => {
                return(<Button label={button.label} backgroundColor={button.backgroundColor} color={button.color} onColorChange={() => {
                    handleClick(button.backgroundColor, button.color);
                }}/>)                
            })}
        </div>
    )
}

function Button({label, backgroundColor, color, onColorChange}) {
    return(
        <button className="btn" style={{backgroundColor: backgroundColor, color: color}} onClick={onColorChange}>{label}</button>
    )
}