import styled from "styled-components";

export const ViewButtonMain = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 50px;
    position: absolute;
    weight: 278px;
    height: 80px;
    background: var(--default-brand-color);
    border-radius: 16px;
    border: 2px solid var(--default-brand-color);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05)
    cursor: pointer;
    
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: var(--neutral-color-0);

    &:hover {
    background: var(--hover-brand-color); 
    }
`;
