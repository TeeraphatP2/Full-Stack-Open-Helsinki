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
        <Part1 name1={props.part1[0]} exercises1={props.part1[1]}/>
        <Part2 name2={props.part2[0]} exercises2={props.part2[1]}/>
        <Part3 name3={props.part3[0]} exercises3={props.part3[1]}/>
    </div>
    )
}

export default Content