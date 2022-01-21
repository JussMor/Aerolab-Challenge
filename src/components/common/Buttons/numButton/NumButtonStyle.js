import styled from "styled-components";

export const NumButtonMain = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 81px;
    height: 35px;
    background: var(--default-brand-color);
    border-radius: 12px;
    border: 2px solid var(--default-brand-color);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05)
    cursor: pointer;
        
    &:hover {
        background: var(--hover-brand-color); 
    }

    &.no_selected {
        width: 81px;
        height: 35px;
        border-radius: 12px;
        background: var(--neutral-color-200);
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    }

`;

export const TextButton = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: var(--neutral-color-0);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  margin: 0px 10px;
  
  &.no_selected {
    color: var(--neutral-color-0);
    background: var(--default-brand-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
