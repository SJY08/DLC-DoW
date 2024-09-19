import styled from "styled-components"
import { Colors } from "../style/colors"
import Logo from "../assets/WhiteLogo.png"
import Input from "../components/common/Input"

function LoginPage() {
    return (
        <>
            <Background>
                <img src={Logo} />

                <InputContainer>
                    <Input label="아이디" placeholder="아이디를 입력해주세요" />
                    <Input
                        type="password"
                        label="비밀번호"
                        placeholder="비밀번호를 입력해주세요"
                    />

                    <SubmitButton>로그인</SubmitButton>
                    <TextContainer>
                        계정이 없으신가요?<ToSignUp>회원가입</ToSignUp>
                    </TextContainer>
                </InputContainer>
            </Background>
        </>
    )
}

export default LoginPage

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

const InputContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 50px;
    background: linear-gradient(${Colors.Gray600}, ${Colors.Gray700});
    border-radius: 50px;
`

const SubmitButton = styled.button`
    margin-top: 20px;
    width: 411.6px;
    height: 40px;
    color: ${Colors.Black};
    font-size: 16px;
    background: ${Colors.Gray500};
    cursor: pointer;
    border: none;
    border-radius: 12px;
    transition: 200ms;
`

const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: ${Colors.Gray400};
    font-size: 16px;
`

const ToSignUp = styled.span`
    color: ${Colors.Blue};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`
