import "./BackgroundChanger.css";


export default function BackgroundChanger({onColorChange, onFontColorChange}) {

    const handleClick = (color, fontColor) => {
        onColorChange(color);
        onFontColorChange(fontColor);
    }
    const buttons = [{
        label: "Purple",
        backgroundColor: "#E8D4DC",
        color: "Black"
    }, {
        label: "Red",
        backgroundColor: "#FF6961",
        color: "White"
    }, {
        label: "Green",
        backgroundColor: "#77DD77",
        color: "White"
    }, {
        label: "Yellow",
        backgroundColor: "#FDFD96",
        color: "Black"
    }, {
        label: "Black",
        backgroundColor: "#1D1C1A",
        color: "White"
    }, {
        label: "Blue",
        backgroundColor: "#A7C7E7",
        color: "Black"
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