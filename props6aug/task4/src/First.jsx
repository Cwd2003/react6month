import Second from "./Second"

function First(){
    let a = 10
    return(
        <div>
        <h1>This is First</h1>
        <Second data={a}/>
        </div>
    )
}
export default First