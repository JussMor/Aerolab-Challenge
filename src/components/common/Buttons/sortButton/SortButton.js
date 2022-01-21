import React from "react";
import { SortButtonMain, TextButton } from "./SortButtonStyle";

export default function SortButton(props) {
    const { value, text } = props;

    return (
        <>
        {value ? (
            <SortButtonMain>
                <TextButton>{text ? props.text : "Selected"}</TextButton>
            </SortButtonMain>
        ) : (
        <SortButtonMain className={`no_selected`}>
            <TextButton className={`no_selected`}>
            {text ? props.text : "No selected"}
            </TextButton>
        </SortButtonMain>
        )}
    </>
    );
}

SortButton.defaultProps = {
    value: false,
};
