import Third from "./Third";

function Second(props){
    console.log("props in second",props.data);
    var arr = [1,22,3]
    
    return(
        // <h1>This is Second {props.data}</h1>
        <Third data={arr}/>
    )
}
export default Second