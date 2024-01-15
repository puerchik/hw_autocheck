import React from "react";
import arrowUp from "../../../../../src/arrowUp.png";
import arrowDown from "../../../../../src/arrowDown.png";
import arrowNone from "../../../../../src/arrowNone.png";

// добавить в проект иконки и импортировать
const downIcon = arrowDown;
const upIcon = arrowUp;
const noneIcon = arrowNone;

export type SuperSortPropsType = {
    id?: string;
    sort: string;
    value: string;
    onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
    switch (sort) {
        case "":
            return down;
        case down:
            return up;
        case up:
            return "";
        default:
            return "";
    }
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
};

const SuperSort: React.FC<SuperSortPropsType> = ({ sort, value, onChange, id = "hw15" }) => {
    const up = "0" + value;
    const down = "1" + value;

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up));
    };

    const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

    return (
        <span id={id + "-sort-" + value} onClick={onChangeCallback}>
            {/*сделать иконку*/}
            <img id={id + "-icon-" + sort} src={icon} />
            {/* {icon} а это убрать */}
        </span>
    );
};

export default SuperSort;
