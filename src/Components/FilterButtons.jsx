import React, { useState } from "react";
import '../FilterButtons.css'

const FilterButtons = ({handleFilter}) => {
    return(
        <div className="filter-buttons">
            <button onClick={() => {handleFilter('all')}}>Все</button>
            <button onClick={() => {handleFilter(false)}}>Активные</button>
            <button onClick={() => {handleFilter(true)}}>Завершенные</button>
        </div>
    )
}

export default FilterButtons;