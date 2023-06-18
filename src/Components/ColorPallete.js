import ColorButton from "./ColorButton";

function ColorPalette(props){


    let colorbuttons=[]

    let getState=(c)=>{
        
       console.log("ColorPallette getstate :"+c)
       props.getState(c)
    }
    console.log("colorArray"+props.colorArray)
    for (let i=0;i<props.colorArray.length;i++){
        console.log("i value: "+props.colorArray[i])
        colorbuttons.push(<ColorButton btncolor={props.colorArray[i]} getState={getState}/>)
    }

    console.log(colorbuttons)

    return(
        <div>
            {colorbuttons}
        </div>
    )
}

export default ColorPalette