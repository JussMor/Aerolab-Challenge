import styled from "styled-components";

export const ButtonMain = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    position: relative;
    width: 320px;
    background: var(--default-brand-color);
    border-radius: 16px;
    border: 2px solid var(--default-brand-color);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05)
    cursor: pointer;
    
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    color: var(--neutral-color-0);

    &:hover {
    background: var(--hover-brand-color); 
    }

    &.processing {
        background: var(--default-brand-color);
        opacity: 0.5;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    }

    &:disabled {
        background: var(--neutral-color-200);
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
        color: var(--neutral-color-600);
    }
`;
