import React, { useRef, useState, setState } from 'react'
function SCell(props) {

    const changeCellState = (e) => {
        const { name, value } = e.target
        // console.log('clicked cell ' + props.idx)
        props.changeStateTo(props.idx, Number(value))
    }

    return (
        <input type='text' onChange={changeCellState} value={props.cell.total} style={{width: 20}}/>
    )
}
export default SCell