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
    
    return (
    <div>
        <Part1 name1={props.parts[0].part1} exercises1={props.parts[0].exercises1}/>
        <Part2 name2={props.parts[1].part2} exercises2={props.parts[1].exercises2}/>
        <Part3 name3={props.parts[2].part3} exercises3={props.parts[2].exercises3}/>
    </div>
    )
}

export default Content