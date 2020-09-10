import React, { useRef, useState, setState, useEffect } from 'react'
import SRow from './SRow'

const initGodState = (size) => {
    const godState = { rows: [], total: 0 };
    for (let i = 0; i < size; i++) {
        const rowState = { cells: [], total: 0 };

        for (let j = 0; j < size; j++) {
            const cellState = { total: 0 }
            rowState.cells[j] = cellState;
        }
        godState.rows[i] = rowState;
    }
    console.log(godState);
    return godState
}



function Squares(props) {
    console.log('Rendering Squares...');
    const [state, setState] = useState(() => initGodState(6))

    const calculateRowTotal = (cells) =>{
        let total = 0;
        for (let index = 0; index < cells.length; index++) {
            const element = cells[index];
            total += element.total;
        }
        return total;
    }
    
    const recalculateTotal = (rows) => {
        let total = 0;
        for (let index = 0; index < rows.length; index++) {
            const element = rows[index];
            total += element.total;
        }
        return total;
    }

    const changeStateTo = (rowIdx, cellIdx, newValue) => {
        console.log('incrementing ' + rowIdx + '  ' + cellIdx)
        const oldState = state;
        oldState.rows[rowIdx].cells[cellIdx].total = newValue;
        oldState.rows[rowIdx].total = calculateRowTotal(oldState.rows[rowIdx].cells);
        oldState.total = recalculateTotal(oldState.rows);
                
        setState({...oldState})
    }

    const _renderRows = (rows) => {
        return rows.map((element, index) => {
            return <SRow idx={index} row={element} key={index} changeRowState={changeStateTo} />
        });
    }

    return (
        <div style={{ margin: '200px' }}>
            {_renderRows(state.rows)}
            {state.total}
        </div>
    )
}
export default Squares