import styled from "styled-components";

export const LabelText = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
`;

export const Field = styled.input`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 10px;
    width: 100%;
    max-width: 350px;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
        filter: brightness(120%);
    }

    &:active {
        filter: brightness(140%);
    }
`;

export const Header = styled.h1`
    color: ${({ theme }) => theme.color.teal};
    text-align: center;
`;

export const Info = styled.p`
    font-size: 14px;
    text-align: center;
    color: ${({ theme }) => theme.color.emperor};
`;