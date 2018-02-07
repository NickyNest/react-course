import React from 'react';
import {func, number} from 'prop-types';
import {Button} from 'semantic-ui-react';
import {showModes, sortModes} from '../../containers/ToDoContainer/enums';

const FilterBar = ({changeShowMode, removeCompleted, changeSortMode, currentMode}) => {
    const onClick = showMode => {
        changeShowMode(showMode);
    };

    const onChageSort = sortMode => {
        changeSortMode(sortMode);
    };

    return (
        <div>
            <Button onClick={() => onClick(showModes.showAll)}>All</Button>
            <Button onClick={() => onClick(showModes.showCompleted)}>Completed</Button>
            <Button onClick={() => onClick(showModes.showPending)}>Pending</Button>
            <Button onClick={removeCompleted} disabled={currentMode === showModes.showPending}>Remove completed</Button>
            <Button onClick={() => onChageSort(sortModes.Up)}>Date UP</Button>
            <Button onClick={() => onChageSort(sortModes.Down)}>Date DOWN</Button>
        </div>
    );
};

FilterBar.propTypes = {
    changeShowMode: func.isRequired,
    removeCompleted: func.isRequired,
    changeSortMode: func.isRequired,
    currentMode: number.isRequired
};

export default FilterBar;