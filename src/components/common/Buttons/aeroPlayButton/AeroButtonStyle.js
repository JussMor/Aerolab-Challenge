import styled from "styled-components";

export const AeroButtonMain = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    position: relative;
    width: 156px;
    height: 48px;
    background: var(--neutral-color-0);
    border-radius: 16px;
    border: 2px solid var(--neutral-color-200);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05)
    cursor: pointer;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const Iconify = styled.i`
    display: flex;
    align-items: center;
    margin: 0px 5px;
    transform: rotate(${props => props.rotate ? props.rotate : 0}deg);
`

export const TextButton = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    background: var(--default-brand-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0px 10px;
    
`;
