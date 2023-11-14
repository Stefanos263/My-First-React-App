export default function Die(props){
    const roll =Math.floor(Math.random() * props.numSides) +1;
    return <p>{props.numSides}-sided Die roll: {roll} </p>
}