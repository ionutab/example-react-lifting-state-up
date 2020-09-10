import React, { useRef, useState, setState } from 'react'
import SCell from './SCell'
function SRow(props) {

    const changeCellState = (cellIdx, cellValue) => {
        // console.log('clicked row ' + props.idx)
        props.changeRowState(props.idx, cellIdx, cellValue)
    }

    const _renderCells = (cells) => {
        return cells.map((element, index) => {
            return <SCell idx={index} cell={element} key={index} changeStateTo={changeCellState} />
        });
    }

    return (
        <div style={{ width: '100%', display: 'block' }}>
            {props.idx}&nbsp;{_renderCells(props.row.cells)}&nbsp;{props.row.total}
        </div>
    )
}
export default SRow