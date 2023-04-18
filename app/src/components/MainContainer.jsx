import { MainContainerStyled } from "./styles/MainContainer";
import Balance from './Balance'
import Spending from "./Spending";

export default function MainContainer() {
    return (
        <MainContainerStyled>
            <Balance />
            <Spending />
        </MainContainerStyled>
    )
}
