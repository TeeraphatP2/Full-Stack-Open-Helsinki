const Part1 = (props) => {
    
    return (
        <>
            <p>{props.name1} {props.exercises1}</p>
        </>
    )
}

const Part2 = (props) => {
    return (
        <>
            <p>{props.name2} {props.exercises2}</p>
        </>
    )
}


const Part3 = (props) => {
    return (
        <>
            <p>{props.name3} {props.exercises3}</p>
        </>
    )
}
const Content = (props) => {
    console.log(props)
    return (
    <div>
        <Part1 name1={props.partsData.parts[0].name} exercises1={props.partsData.parts[0].exercises}/>
        <Part2 name2={props.partsData.parts[1].name} exercises2={props.partsData.parts[1].exercises}/>
        <Part3 name3={props.partsData.parts[2].name} exercises3={props.partsData.parts[2].exercises}/>
    </div>
    )
}

export default Content