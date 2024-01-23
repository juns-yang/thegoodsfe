import React, { useState } from "react";
import styled from "styled-components";
import Select, { components } from "react-select";
import logo from "../../img/logo.svg";
import { useNavigate } from "react-router-dom";

const RegisterWrapper = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  margin: ${105 / 19.2}vw 0 0 0;
  font-family: NotoSans;
  flex-direction: column;
  align-items: center;
  color: black;
`;

const LogoWrapper = styled.img`
  width: ${487 / 19.2}vw;
  margin: 0 0 ${4 / 19.2}vw 0;
`;

const RegisterImg = {
    display: "block",
    width: `${570 / 19.2}vw`,
    margin: `${4 / 19.2}vw 0 ${2 / 19.2}vw 0`,
    padding: 0,
  };

const InputTextWrapper = styled.div`
margin: ${42 / 19.2}vw 0 0 ${1 / 19.2}vw;
font-size: ${16 / 19.2}vw;
flex-shrink: 0;
`;

const FormWrapper = styled.div`
display: flex;
  width: ${570 / 19.2}vw;
  font-family: NotoSans;
  flex-direction: column;
  align-items: flex-start;
  color: black;
`;

const InputWrapper = styled.input`
display: flex;
margin: ${10 / 19.2}vw 0 0 0;
width: ${(props => props.width / 19.2)}vw;
height: ${60 / 19.2}vw;
flex-shrink: 0;
border-radius: ${3 / 19.2}vw;
border: ${1 / 19.2}vw solid #9C9C9C;
font-size: ${18 / 19.2}vw;
`

const GenderSelectionWrapper = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  flex-direction: row;
  justify-content: flex-start;
  margin: ${28 / 19.2}vw 0 0 0;
`;

const GenderSelectionText = styled.div`
    margin: 0 ${41 / 19.2}vw 0 ${9 / 19.2}vw;
    font-size: ${18 / 19.2}vw;
    color: #9C9C9C;
    flex-shrink: 0;
`;

const AgreeWrapper = styled.div`
display:flex;
width: ${570 / 19.2}vw;
margin: ${41 / 19.2}vw 0 0 0;
flex-shrink: 0;
flex-direction: column;
align-items: flex-start;
`;

const AgreeDetailWrapper = styled.div`
display:flex;
width: 100%;
height: ${194 / 19.2}vw;
border-top: ${1 / 19.2}vw solid #9C9C9C;
border-bottom: ${1 / 19.2}vw solid #9C9C9C;
padding: ${11 / 19.2}vw 0 ${23 / 19.2}vw 0;
margin: ${2 / 19.2}vw 0 0 0;
flex-shrink: 0;
flex-direction: column;
align-items: flex-start;
`;

const AgreeButton = styled.input`
margin: 0 0 ${11 / 19.2}vw 0;
border: 
`;

const RegisterPage = () => {
  return (
    <RegisterWrapper>
        <LogoWrapper src={logo} />
        <svg viewBox="0 0 570 19" fill="none" xmlns="http://www.w3.org/2000/svg" style={RegisterImg}>
<line x1="4.37114e-08" y1="8.5" x2="175" y2="8.50002" stroke="#202123"/>
<line x1="395" y1="8.5" x2="570" y2="8.50002" stroke="#202123"/>
<path d="M220.331 0.46H221.991V18.58H220.331V0.46ZM212.451 1.86C215.131 1.86 217.051 4.32 217.051 8.16C217.051 12.02 215.131 14.48 212.451 14.48C209.791 14.48 207.871 12.02 207.871 8.16C207.871 4.32 209.791 1.86 212.451 1.86ZM212.451 3.36C210.691 3.36 209.451 5.24 209.451 8.16C209.451 11.1 210.691 13.02 212.451 13.02C214.231 13.02 215.451 11.1 215.451 8.16C215.451 5.24 214.231 3.36 212.451 3.36ZM226.249 2.56H233.149V13.72H226.249V2.56ZM231.589 3.88H227.809V12.4H231.589V3.88ZM239.369 0.479999H240.969V18.56H239.369V0.479999ZM232.309 7.28H236.469V8.66H232.309V7.28ZM235.789 0.859999H237.369V17.66H235.789V0.859999ZM249.068 1.14C251.768 1.14 253.748 2.78 253.748 5.16C253.748 7.52 251.768 9.16 249.068 9.16C246.388 9.16 244.408 7.52 244.408 5.16C244.408 2.78 246.388 1.14 249.068 1.14ZM249.068 2.5C247.328 2.5 246.008 3.6 246.008 5.16C246.008 6.72 247.328 7.8 249.068 7.8C250.828 7.8 252.128 6.72 252.128 5.16C252.128 3.6 250.828 2.5 249.068 2.5ZM257.148 0.479999H258.828V9.74H257.148V0.479999ZM247.128 10.62H258.828V15.02H248.788V17.74H247.168V13.78H257.188V11.96H247.128V10.62ZM247.168 17H259.428V18.32H247.168V17ZM262.406 14.96H278.786V16.34H262.406V14.96ZM269.726 11.08H271.386V15.54H269.726V11.08ZM264.386 1.82H276.766V7.3H266.086V10.92H264.446V5.96H275.126V3.16H264.386V1.82ZM264.446 10.22H277.186V11.58H264.446V10.22ZM303.415 0.46H305.095V18.56H303.415V0.46ZM304.635 7.8H307.975V9.18H304.635V7.8ZM298.795 2.42H300.415C300.415 7.56 298.055 12.2 292.215 15.14L291.295 13.86C296.295 11.32 298.795 7.46 298.795 2.68V2.42ZM292.135 2.42H299.655V3.78H292.135V2.42ZM322.734 0.479999H324.414V10.18H322.734V0.479999ZM312.754 11.08H314.394V13.28H322.774V11.08H324.414V18.32H312.754V11.08ZM314.394 14.6V16.98H322.774V14.6H314.394ZM314.714 1.34C317.454 1.34 319.414 3.04 319.414 5.5C319.414 7.98 317.454 9.68 314.714 9.68C311.974 9.68 309.994 7.98 309.994 5.5C309.994 3.04 311.974 1.34 314.714 1.34ZM314.714 2.72C312.914 2.72 311.614 3.86 311.614 5.5C311.614 7.14 312.914 8.28 314.714 8.28C316.514 8.28 317.814 7.14 317.814 5.5C317.814 3.86 316.514 2.72 314.714 2.72ZM340.232 0.479999H341.892V18.56H340.232V0.479999ZM341.492 7.9H344.852V9.3H341.492V7.9ZM327.892 3.36H338.552V4.72H327.892V3.36ZM333.292 6.22C335.852 6.22 337.692 7.94 337.692 10.38C337.692 12.82 335.852 14.54 333.292 14.54C330.752 14.54 328.892 12.82 328.892 10.38C328.892 7.94 330.752 6.22 333.292 6.22ZM333.292 7.6C331.652 7.6 330.472 8.74 330.472 10.38C330.472 12 331.652 13.16 333.292 13.16C334.932 13.16 336.112 12 336.112 10.38C336.112 8.74 334.932 7.6 333.292 7.6ZM332.432 0.699999H334.092V3.98H332.432V0.699999ZM359.551 0.479999H361.211V18.56H359.551V0.479999ZM354.251 2.42H355.891C355.891 7.66 353.531 12.24 347.491 15.2L346.611 13.86C351.831 11.34 354.251 7.5 354.251 2.7V2.42ZM347.431 2.42H354.971V3.78H347.431V2.42Z" fill="#202123"/>
</svg>
<FormWrapper>
        <InputTextWrapper>이메일*</InputTextWrapper>
        <InputWrapper width={563}></InputWrapper>
        <InputTextWrapper>비밀번호*</InputTextWrapper>
        <InputWrapper width={563} type="password"></InputWrapper>
        <InputWrapper width={563} type="password"></InputWrapper>
        <InputTextWrapper>닉네임*</InputTextWrapper>
        <InputWrapper width={563}></InputWrapper>
        <InputTextWrapper>전화번호*</InputTextWrapper>
        <InputWrapper width={563} type="number"></InputWrapper>
        <InputTextWrapper>성별*</InputTextWrapper>
        <GenderSelectionWrapper>
            <input type="radio"/><GenderSelectionText>남자</GenderSelectionText>
            <input type="radio"/><GenderSelectionText>여자</GenderSelectionText>
            <input type="radio"/><GenderSelectionText>선택안함</GenderSelectionText>
        </GenderSelectionWrapper>
        <InputTextWrapper>생년월일*</InputTextWrapper>
        <InputWrapper width={563} type="number"></InputWrapper>
        <AgreeWrapper>
            <input type="checkbox"/>
        <AgreeDetailWrapper>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
        </AgreeDetailWrapper>
        </AgreeWrapper>
        </FormWrapper>
    </RegisterWrapper>
  )
}

export default RegisterPage