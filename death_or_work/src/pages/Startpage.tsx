import styled from "styled-components"
import { Colors } from "../style/colors"
import Logo from "../assets/WhiteLogo.png"

function StartPage() {
    return (
        <>
            <Background>
                <TitleContainer>
                    <Title>다같이 하는 일정관리</Title>
                    <img src={Logo} />
                    <SubTitle>Death or Work</SubTitle>
                </TitleContainer>

                <StartButton>시작하기</StartButton>
            </Background>
        </>
    )
}

export default StartPage

const Background = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    background: linear-gradient(${Colors.Gray700}, ${Colors.Gray800});
`

const TitleContainer = styled.div`
    width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`

const Title = styled.p`
    font-size: 36px;
    font-weight: bolder;
    color: ${Colors.white};
`

const SubTitle = styled.p`
    font-size: 12px;
    color: ${Colors.white};
    font-weight: lighter;
    letter-spacing: 24px;
`

const StartButton = styled.button`
    background: ${Colors.Gray800};
    color: ${Colors.Gray200};
    font-size: 16px;
    width: 250px;
    height: 40px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
`
