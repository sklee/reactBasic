import React from "react";
import "./Square.css"

// export default class Square extends React.Component {
const Square = ({ onClick, value}) => {
    
    /*constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }*/

    // render() { */ // 함수형 컴포넌트는 redner 사용 X
    /* const Square = (props) => {
       return (
            <button className="square" 
                //onClick={() => setState({value: 'X'})}>
                onClick={() => props.onClick}>
                {props.value}
            </button>
        ) */

        return (
            <button className="square" 
                onClick={onClick}>
                {value}
            </button>
        )
}

export default Square