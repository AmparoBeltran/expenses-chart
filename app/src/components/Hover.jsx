import React from "react";
import data from "../data.json";
import {
    HoverContainer,
} from "./styles/ChartStyles";


export default function Hover({ amount }) {
    return (

        <HoverContainer>
            ${amount}
        </HoverContainer>


    )
}