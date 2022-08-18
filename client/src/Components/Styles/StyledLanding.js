import styled from  "styled-components";


export const LandingBase = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
`
export const LandingImage = styled.img`
    width: 950px;
    max-height: 100%;
`
export const LandingCont = styled.div`
    Padding: 0px 80px;

`

export const LandingSlogan = styled.h2``

export const LandingPrompt = styled.h3``

export const LandingButton = styled.button`

    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${({bg}) => bg || '#3FA9FA'};
    color: ${({color}) => color || '#fff'};


    &:hover {
        opacity: 0.9;
        background-color: ${({bg}) => bg || '#3FA9FA'};
    }
`

