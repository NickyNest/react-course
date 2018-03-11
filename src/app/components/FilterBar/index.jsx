import React from 'react';
import {func, string} from 'prop-types';
import {Button} from 'semantic-ui-react';
import * as actions from 'utils/actions';

const FilterBar = ({changeShowMode, removeCompleted, changeSortMode, currentMode}) => {
    const onClick = showMode => {
        changeShowMode(showMode);
    };

    const onChageSort = sortMode => {
        changeSortMode(sortMode);
    };

    return (
        <div>
            <Button id='btnShowAll' onClick={() => onClick(actions.SHOW_ALL)}>All</Button>
            <Button id='btnShowCompleted' onClick={() => onClick(actions.SHOW_COMPLETED)}>Completed</Button>
            <Button id='btnShowPending' onClick={() => onClick(actions.SHOW_PENDING)}>Pending</Button>
            <Button onClick={removeCompleted} disabled={currentMode === actions.SHOW_PENDING}>Remove completed</Button>
            <Button id='btnSortDateUp' onClick={() => onChageSort(actions.SORT_CREATED_DATE_UP)}>Date UP</Button>
            <Button id='btnSortDateDown' onClick={() => onChageSort(actions.SORT_CREATED_DATE_DOWN)}>Date DOWN</Button>
        </div>
    );
};

FilterBar.propTypes = {
    changeShowMode: func.isRequired,
    removeCompleted: func.isRequired,
    changeSortMode: func.isRequired,
    currentMode: string.isRequired
};

export default FilterBar;