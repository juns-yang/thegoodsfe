import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../img/logo.svg";
import { useNavigate } from "react-router-dom";

const LoginWrapper = styled.div`
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
`;

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: ${17 / 19.2}vw 0 ${60 / 19.2}vw 0;
  font-size: ${20 / 19.2}vw;
  justify-content: center;
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginImg = {
  display: "flex",
  width: `${570 / 19.2}vw`,
  margin: `0 0 ${27 / 19.2}vw 0`,
  padding: 0,
};

const EmailWrapper = styled.div`
  display: flex;
  padding: ${8 / 19.2}vw 0 0 0;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.input`
  display: flex;
  margin: ${7 / 19.2}vw 0 ${18 / 19.2}vw 0;
  width: ${564 / 19.2}vw;
  height: ${55 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  border: ${1.3 / 19.2}vw solid #9c9c9c;
  font-size: ${16 / 19.2}vw;
`;

const SaveWrapper = styled.div`
  display: flex;
  width: 100%;
  font-size: ${14 / 19.2}vw;
  margin: ${1 / 19.2}vw 0 ${18 / 19.2}vw 0;
  padding: 0 0 0 ${6 / 19.2}vw;
`;

const FindLink = styled.div`
  margin: 0 ${7 / 19.2}vw 0 auto;
`;

const LoginButton = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  height: ${55 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  background: #f0c920;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  padding: 0;
  margin: 0 0 ${18 / 19.2}vw 0;
`;

const ExtraWrapper = styled.div`
  display: flex;
  width: ${570 / 19.2}vw;
  flex-direction: row;
  justify-content: space-between;
`;

const ExtraButton = styled.div`
  display: flex;
  width: ${270 / 19.2}vw;
  height: ${55 / 19.2}vw;
  flex-shrink: 0;
  border-radius: ${5 / 19.2}vw;
  border: ${1 / 19.2}vw solid #f0c920;
  color: #f0c920;
  justify-content: center;
  align-items: center;
  font-size: ${18 / 19.2}vw;
  padding: 0;
`;

const EmailSaveLabel = styled.label`
  position: relative;
  display: flex;
  align-items: flex-start;
  user-select: none;
  padding: 0;
  margin: 0 0 ${(e) => e.$interval / 19.2}vw 0;

  &:before {
    content: "";
    height: ${23 / 19.2}vw;
    width: ${23 / 19.2}vw;
    border: ${1 / 19.2}vw solid #9c9c9c;
    border-radius: ${2 / 19.2}vw;
    background-size: ${11 / 19.2}vw ${8 / 19.2}vw;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: transparent;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M1 5.8L4.14286 9L12 1" stroke="%239C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  }

  &:after {
    opacity: 0;
    content: "";
    position: absolute;
    height: ${23 / 19.2}vw;
    width: ${23 / 19.2}vw;
    border: ${1 / 19.2}vw solid transparent;
    border-radius: ${2 / 19.2}vw;
    background-size: ${11 / 19.2}vw ${8 / 19.2}vw;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #f0c920;
    /* Add the SVG checkmark as a background image */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M1 5.8L4.14286 9L12 1" stroke="%23FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  }
`;

const EmailSaveInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;

  &:checked + ${EmailSaveLabel} {
    &:after {
      opacity: 1;
    }
  }
`;

const EmailSaveDiv = styled.div`
  margin: 0 0 0 ${11 / 19.2}vw;
  font-size: ${14 / 19.2}vw;
  white-space: pre-line;
  text-align: start;
  color: #202123;
`;

const badinput = {
  border: `${1.3 / 19.2}vw solid #FD3C56`,
};

const LoginMenu = () => {
  const navigate = useNavigate();
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [EmailSave, SetEmailSave] = useState(false);

  let fn_emailcheck = (email) => {
    var pattern = new RegExp( // 이메일 정규식
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    );
    return pattern.test(email);
  };

  const EmailChange = (e) => {
    SetEmail(e.target.value);
    // dispatch(setId(e.target.value));
  };

  const PasswordChange = (e) => {
    SetPassword(e.target.value);
    // dispatch(setPw(e.target.value));
  };

  return (
    <LoginWrapper>
      <LogoWrapper src={logo} />
      <TextWrapper>로그인을 진행해주세요.</TextWrapper>
      <SocialWrapper>
        <svg
          viewBox="0 0 570 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={LoginImg}
        >
          <line
            x1="4.37114e-08"
            y1="8.5"
            x2="175"
            y2="8.50002"
            stroke="#202123"
          />
          <line x1="395" y1="8.5" x2="570" y2="8.50002" stroke="#202123" />
          <path
            d="M248.169 0.479999H249.829V13.7H248.169V0.479999ZM249.309 5.96H252.509V7.34H249.309V5.96ZM243.229 1.88H244.989C244.989 6.56 241.709 9.98 236.529 11.64L235.809 10.28C240.369 8.88 243.229 6.08 243.229 2.6V1.88ZM236.549 1.88H244.069V3.24H236.549V1.88ZM238.549 16.8H250.629V18.16H238.549V16.8ZM238.549 12.36H240.209V17.34H238.549V12.36ZM267.407 0.479999H269.067V13.94H267.407V0.479999ZM254.727 1.94H264.247V3.3H254.727V1.94ZM254.427 11.22L254.247 9.8C257.207 9.8 261.427 9.76 264.807 9.36L264.907 10.6C261.427 11.16 257.367 11.22 254.427 11.22ZM256.527 3.1H258.127V10.04H256.527V3.1ZM260.847 3.1H262.447V10.04H260.847V3.1ZM264.407 3.9H268.287V5.26H264.407V3.9ZM264.407 7.36H268.287V8.72H264.407V7.36ZM257.507 16.8H269.547V18.16H257.507V16.8ZM257.507 12.84H259.167V17.66H257.507V12.84ZM282.996 14.96H299.376V16.34H282.996V14.96ZM290.316 11.08H291.976V15.54H290.316V11.08ZM284.976 1.82H297.356V7.3H286.676V10.92H285.036V5.96H295.716V3.16H284.976V1.82ZM285.036 10.22H297.776V11.58H285.036V10.22ZM303.155 2.4H314.795V3.74H303.155V2.4ZM301.395 14.54H317.735V15.92H301.395V14.54ZM313.915 2.4H315.535V4.2C315.535 6.52 315.535 9.1 314.855 13L313.195 12.84C313.915 9.14 313.915 6.44 313.915 4.2V2.4ZM332.933 0.499999H334.613V13.7H332.933V0.499999ZM322.993 16.8H335.153V18.16H322.993V16.8ZM322.993 12.34H324.633V17.26H322.993V12.34ZM324.913 1.74C327.613 1.74 329.613 3.58 329.613 6.2C329.613 8.8 327.613 10.66 324.913 10.66C322.213 10.66 320.193 8.8 320.193 6.2C320.193 3.58 322.213 1.74 324.913 1.74ZM324.913 3.18C323.153 3.18 321.813 4.42 321.813 6.2C321.813 7.96 323.153 9.2 324.913 9.2C326.673 9.2 328.013 7.96 328.013 6.2C328.013 4.42 326.673 3.18 324.913 3.18Z"
            fill="#202123"
          />
        </svg>

        <svg // 카카오 로그인
          viewBox="0 0 570 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={LoginImg}
        >
          <rect width="570" height="54" rx="5" fill="#FEE500" />
          <g clip-path="url(#clip0_139_1886)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M224.5 10.2031C214.558 10.2031 206.5 16.429 206.5 24.1077C206.5 28.8832 209.617 33.0931 214.363 35.597L212.366 42.8921C212.19 43.5367 212.927 44.0505 213.493 43.677L222.247 37.8995C222.985 37.9708 223.736 38.0124 224.5 38.0124C234.441 38.0124 242.5 31.7867 242.5 24.1077C242.5 16.429 234.441 10.2031 224.5 10.2031Z"
              fill="black"
            />
          </g>
          <path
            d="M265.52 20.036H267.86C267.86 25.184 266.636 29.468 260.426 32.618L259.148 30.8C264.332 28.19 265.52 25.004 265.52 20.324V20.036ZM260.174 20.036H266.942V21.926H260.174V20.036ZM265.574 24.122V25.958L259.598 26.534L259.31 24.482L265.574 24.122ZM269.876 18.416H272.288V35.084H269.876V18.416ZM271.658 24.788H274.592V26.75H271.658V24.788ZM282.079 20.036H284.419C284.419 25.184 283.195 29.468 276.985 32.618L275.707 30.8C280.891 28.19 282.079 25.004 282.079 20.324V20.036ZM276.733 20.036H283.501V21.926H276.733V20.036ZM282.133 24.122V25.958L276.157 26.534L275.869 24.482L282.133 24.122ZM286.435 18.416H288.847V35.084H286.435V18.416ZM288.217 24.788H291.151V26.75H288.217V24.788ZM298.673 27.812H301.067V31.61H298.673V27.812ZM299.879 19.28C303.443 19.28 306.107 21.098 306.107 23.87C306.107 26.678 303.443 28.478 299.879 28.478C296.315 28.478 293.651 26.678 293.651 23.87C293.651 21.098 296.315 19.28 299.879 19.28ZM299.879 21.17C297.593 21.17 296.009 22.178 296.009 23.87C296.009 25.598 297.593 26.588 299.879 26.588C302.165 26.588 303.749 25.598 303.749 23.87C303.749 22.178 302.165 21.17 299.879 21.17ZM292.355 31.232H307.439V33.176H292.355V31.232ZM313.59 31.322H328.674V33.266H313.59V31.322ZM319.908 28.172H322.302V32.114H319.908V28.172ZM315.282 19.514H326.982V25.058H317.694V27.866H315.318V23.186H324.606V21.404H315.282V19.514ZM315.318 26.912H327.36V28.838H315.318V26.912ZM331.678 19.964H342.244V21.854H331.678V19.964ZM330.148 30.98H345.214V32.924H330.148V30.98ZM340.984 19.964H343.36V21.944C343.36 24.284 343.36 26.552 342.766 29.972L340.372 29.774C340.984 26.57 340.984 24.194 340.984 21.944V19.964ZM358.137 18.452H360.549V30.422H358.137V18.452ZM349.443 32.906H360.963V34.814H349.443V32.906ZM349.443 29.216H351.837V33.68H349.443V29.216ZM351.477 19.496C354.033 19.496 355.995 21.26 355.995 23.726C355.995 26.174 354.033 27.956 351.477 27.956C348.921 27.956 346.941 26.174 346.941 23.726C346.941 21.26 348.921 19.496 351.477 19.496ZM351.477 21.566C350.235 21.566 349.281 22.358 349.281 23.726C349.281 25.076 350.235 25.868 351.477 25.868C352.701 25.868 353.655 25.076 353.655 23.726C353.655 22.358 352.701 21.566 351.477 21.566Z"
            fill="black"
            fill-opacity="0.85"
          />
          <defs>
            <clipPath id="clip0_139_1886">
              <rect
                width="35.9999"
                height="36"
                fill="white"
                transform="translate(206.5 9)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg // 네이버 로그인
          viewBox="0 0 570 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={LoginImg}
        >
          <rect width="570" height="54" rx="5" fill="#03C75A" />
          <g clip-path="url(#clip0_139_1885)">
            <path
              d="M227.849 27.5627L221.917 19H217V35H222.151V26.436L228.083 35H233V19H227.849V27.5627Z"
              fill="white"
            />
          </g>
          <path
            d="M249.35 20.018H251.726V29.702H249.35V20.018ZM249.35 29.09H250.52C252.536 29.09 254.21 29.018 256.136 28.622L256.442 30.62C254.444 31.052 252.644 31.124 250.52 31.124H249.35V29.09ZM260.798 18.434H263.084V35.102H260.798V18.434ZM253.994 23.69H257.792V25.616H253.994V23.69ZM257.27 18.722H259.502V34.364H257.27V18.722ZM276.709 18.416H279.121V35.138H276.709V18.416ZM270.139 19.586C272.659 19.586 274.513 21.89 274.513 25.526C274.513 29.198 272.659 31.502 270.139 31.502C267.619 31.502 265.765 29.198 265.765 25.526C265.765 21.89 267.619 19.586 270.139 19.586ZM270.139 21.764C268.897 21.764 268.051 23.078 268.051 25.526C268.051 28.01 268.897 29.342 270.139 29.342C271.381 29.342 272.209 28.01 272.209 25.526C272.209 23.078 271.381 21.764 270.139 21.764ZM293.447 18.416H295.823V35.138H293.447V18.416ZM289.667 24.284H294.131V26.21H289.667V24.284ZM282.449 19.73H284.825V23.762H288.101V19.73H290.459V31.214H282.449V19.73ZM284.825 25.616V29.288H288.101V25.616H284.825ZM303.09 31.322H318.174V33.266H303.09V31.322ZM309.408 28.172H311.802V32.114H309.408V28.172ZM304.782 19.514H316.482V25.058H307.194V27.866H304.818V23.186H314.106V21.404H304.782V19.514ZM304.818 26.912H316.86V28.838H304.818V26.912ZM321.178 19.964H331.744V21.854H321.178V19.964ZM319.648 30.98H334.714V32.924H319.648V30.98ZM330.484 19.964H332.86V21.944C332.86 24.284 332.86 26.552 332.266 29.972L329.872 29.774C330.484 26.57 330.484 24.194 330.484 21.944V19.964ZM347.637 18.452H350.049V30.422H347.637V18.452ZM338.943 32.906H350.463V34.814H338.943V32.906ZM338.943 29.216H341.337V33.68H338.943V29.216ZM340.977 19.496C343.533 19.496 345.495 21.26 345.495 23.726C345.495 26.174 343.533 27.956 340.977 27.956C338.421 27.956 336.441 26.174 336.441 23.726C336.441 21.26 338.421 19.496 340.977 19.496ZM340.977 21.566C339.735 21.566 338.781 22.358 338.781 23.726C338.781 25.076 339.735 25.868 340.977 25.868C342.201 25.868 343.155 25.076 343.155 23.726C343.155 22.358 342.201 21.566 340.977 21.566Z"
            fill="white"
          />
          <defs>
            <clipPath id="clip0_139_1885">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(217 19)"
              />
            </clipPath>
          </defs>
        </svg>
      </SocialWrapper>
      <EmailWrapper>
        <svg // 이메일 로그인 텍스트 부분
          viewBox="0 0 570 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={LoginImg}
        >
          <line x1="0" y1="8.5" x2="215" y2="8.50002" stroke="#202123" />
          <line x1="355" y1="8.5" x2="570" y2="8.50002" stroke="#202123" />
          <path
            d="M239.827 0.46H241.487V18.58H239.827V0.46ZM231.947 1.86C234.627 1.86 236.547 4.32 236.547 8.16C236.547 12.02 234.627 14.48 231.947 14.48C229.287 14.48 227.367 12.02 227.367 8.16C227.367 4.32 229.287 1.86 231.947 1.86ZM231.947 3.36C230.187 3.36 228.947 5.24 228.947 8.16C228.947 11.1 230.187 13.02 231.947 13.02C233.727 13.02 234.947 11.1 234.947 8.16C234.947 5.24 233.727 3.36 231.947 3.36ZM245.745 2.56H252.645V13.72H245.745V2.56ZM251.085 3.88H247.305V12.4H251.085V3.88ZM258.865 0.479999H260.465V18.56H258.865V0.479999ZM251.805 7.28H255.965V8.66H251.805V7.28ZM255.285 0.859999H256.865V17.66H255.285V0.859999ZM268.564 1.14C271.264 1.14 273.244 2.78 273.244 5.16C273.244 7.52 271.264 9.16 268.564 9.16C265.884 9.16 263.904 7.52 263.904 5.16C263.904 2.78 265.884 1.14 268.564 1.14ZM268.564 2.5C266.824 2.5 265.504 3.6 265.504 5.16C265.504 6.72 266.824 7.8 268.564 7.8C270.324 7.8 271.624 6.72 271.624 5.16C271.624 3.6 270.324 2.5 268.564 2.5ZM276.644 0.479999H278.324V9.74H276.644V0.479999ZM266.624 10.62H278.324V15.02H268.284V17.74H266.664V13.78H276.684V11.96H266.624V10.62ZM266.664 17H278.924V18.32H266.664V17ZM287.098 14.96H303.478V16.34H287.098V14.96ZM294.418 11.08H296.078V15.54H294.418V11.08ZM289.078 1.82H301.458V7.3H290.778V10.92H289.138V5.96H299.818V3.16H289.078V1.82ZM289.138 10.22H301.878V11.58H289.138V10.22ZM307.256 2.4H318.896V3.74H307.256V2.4ZM305.496 14.54H321.836V15.92H305.496V14.54ZM318.016 2.4H319.636V4.2C319.636 6.52 319.636 9.1 318.956 13L317.296 12.84C318.016 9.14 318.016 6.44 318.016 4.2V2.4ZM337.035 0.499999H338.715V13.7H337.035V0.499999ZM327.095 16.8H339.255V18.16H327.095V16.8ZM327.095 12.34H328.735V17.26H327.095V12.34ZM329.015 1.74C331.715 1.74 333.715 3.58 333.715 6.2C333.715 8.8 331.715 10.66 329.015 10.66C326.315 10.66 324.295 8.8 324.295 6.2C324.295 3.58 326.315 1.74 329.015 1.74ZM329.015 3.18C327.255 3.18 325.915 4.42 325.915 6.2C325.915 7.96 327.255 9.2 329.015 9.2C330.775 9.2 332.115 7.96 332.115 6.2C332.115 4.42 330.775 3.18 329.015 3.18Z"
            fill="#202123"
          />
        </svg>
        <InputWrapper
          onChange={EmailChange}
          value={Email}
          key="id"
          placeholder="이메일"
          style={fn_emailcheck(Email) ? { badinput } : {}}
        />
        <InputWrapper
          onChange={PasswordChange}
          value={Password}
          key="password"
          type="password"
          placeholder="비밀번호"
        />
        <SaveWrapper>
          <EmailSaveInput
            type="checkbox"
            id="EmailSave"
            name="EmailSave"
            checked={EmailSave}
            onChange={() => SetEmailSave((EmailSave) => !EmailSave)}
          />
          <EmailSaveLabel htmlFor="EmailSave">
            <EmailSaveDiv>이메일 저장하기</EmailSaveDiv>
          </EmailSaveLabel>
          <FindLink
            onClick={() => {
              navigate("/register");
            }}
          >
            아이디 / 비밀번호 찾기
          </FindLink>
        </SaveWrapper>
        <LoginButton
          onClick={() => {
            navigate("/register");
          }}
        >
          로그인
        </LoginButton>
      </EmailWrapper>
      <ExtraWrapper>
        <ExtraButton
          onClick={() => {
            navigate("/register");
          }}
        >
          회원가입
        </ExtraButton>
        <ExtraButton
          onClick={() => {
            navigate("/register");
          }}
        >
          비회원 주문 조회
        </ExtraButton>
      </ExtraWrapper>
    </LoginWrapper>
  );
};

export default LoginMenu;
