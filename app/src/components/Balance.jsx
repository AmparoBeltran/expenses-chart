import { BalanceStyled } from "./styles/Balance.styled";

export default function Balance() {
    return (
        <BalanceStyled >
            <div className="my-balance">
                <h3>My balance</h3>
                <h1>$921.48</h1>
            </div>
            <img src="/images/logo.svg" />
        </BalanceStyled>
    )
}