const Total = (props) => {
    return(
        <p>Number of exercises {props.exercisesData.parts[0].exercises + props.exercisesData.parts[1].exercises + props.exercisesData.parts[2].exercises}</p>
    )
}

export default Total