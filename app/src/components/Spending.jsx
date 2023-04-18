
import React from "react";
import data from "../data.json";
import {
    MainContainer,
    Container,
    BarChartContainer,
    Day,
    BlackLine,
    MakeBar,
    Total,
} from "./styles/ChartStyles";
import Hover from "./Hover";

const todayIndex = new Date().getDay() - 1;
const today = data[todayIndex].day

export default function Spending() {
    return (
        <Container>
            <h1>Spending - Last 7 days</h1>
            <MainContainer>
                {data.map(({ amount, day }, i) => {
                    return (
                        <BarChartContainer key={i}>
                            <Hover amount={amount} />
                            <MakeBar currentDay={today === day} height={amount} />
                            <Day>{day}</Day>
                        </BarChartContainer>
                    );
                })}
            </MainContainer>
            <BlackLine />
            <Total>
                <div className="total">
                    <h3>Total this month</h3>
                    <h1> $478.33</h1>
                </div>
                <div className="percentage">
                    <p>+2.4%</p>
                    <h3>from last month</h3>
                </div>
            </Total>
        </Container>
    )
}

