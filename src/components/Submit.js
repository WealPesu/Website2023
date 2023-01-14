import image from "../assets/greentick.png"
function Submit(){
    
    return(
        <div>
            <img src={image} style={{position:"absolute",left:"37%",top:"25%"}} 
            height="300px" width="400px"/>
            <h1 style={{color:"white",position:"absolute",left:"39%",top:"74%"}}>Form submitted!</h1>
        </div>
    );
}

export default Submit;