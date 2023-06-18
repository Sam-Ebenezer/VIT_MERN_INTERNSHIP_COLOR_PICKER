
function MainButton(props){
    console.log("main button: "+props.mbtncolor)
    let opencp=()=>{
        return props.opencp(true)
    }
    return(
        <div  class="text-center d-grid gap-2">
       
        <button className="text-center btn font-weight-bold" style={{backgroundColor: props.mbtncolor,fontSize:"20px"}} onClick={opencp}><b>Pick a Color</b></button>
        </div>
    )
}

export default MainButton