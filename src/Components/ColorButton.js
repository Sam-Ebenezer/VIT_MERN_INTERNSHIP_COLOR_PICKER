
function ColorButton(props)
{
    const handleClick=()=>{
        console.log("btnGet State: "+props.btncolor)
        return props.getState(props.btncolor)
    }

    return(
        <button className="color_btn" onClick={handleClick} style={{backgroundColor: props.btncolor}}></button>
    )
}



export default ColorButton