import styled from "styled-components";

export const SortButtonMain = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    position: relative;
    width: 129px;
    height: 43px;
    background: var(--default-brand-color);
    border-radius: 12px;
    border: 2px solid var(--default-brand-color);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05)
    cursor: pointer;
        
    &:hover {
        background: var(--hover-brand-color); 
    }

    &.no_selected {
        width: 166px;
        height: 43px;
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
}
  &.no_selected {
    color: var(--neutral-color-0);
    background: var(--default-brand-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
