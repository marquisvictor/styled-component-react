import styled from 'styled-components';
import { typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,

    large: () => `
        font-size: ${typeScale.header5};
        padding: 16px 24px;
    `,
    warning: (props) => `
        background: none;
        color: ${props.theme.status.warningColor};
        &:hover. &:focus {
            background-color: ${props.theme.status.warningColorHover};
            outline: 3px solid ${props.theme.status.warningColorHover};
            outline-offset: 2px;
            border: 2px solid transparent;
        }

        &:active {
            background-color: ${props.theme.warningColorActive};
        }
    `,
    primaryButtonWarning: (props) => `
        background-color: ${props.theme.warningColor};
        color: ${props.theme.textColorInverted};
    `,
    secondaryButtonWarning: (props) => `
        border: 2px solid ${props.theme.warningColor};
    `,
    error: (props) => `
        background: none;
        color: ${props.theme.errorColor}.
        &:hover, &:focus {
            background-color: ${props.theme.errorColorHover};
            outline: 3px solid ${props.theme.errorColorHover};
            outline-offset: 2px;
            border: 2px solid transparent;
        }
        &:active {
            background-color: ${props.theme.errorColorActive};
        }
    `,
    primaryButtonError: (props) => `
        background-color: ${props.theme.errorColor};
        color: ${props.theme.textColorInverted};
    `,
    secondaryButtonError: (props) => `
        border: 2px solid ${props.theme.warningColor};
    `,
    success: (props) => `
        background: none;
        color: ${props.theme.status.successColor};
        &:hover, &:focus {
            background-color: ${props.theme.successColorHover};
            outline: 3px solid ${props.theme.successColorHover};
            outline-offset: 2px;
            border: 2px solid transparent;
        }
        &:active {
            background-color: ${props.theme.successColorActive};
        }
    `,
    primaryButtonSuccess: (props) => `
        background-color: ${props.theme.successColor};
        color: ${props.theme.textColorInverted};
    `,
    secondaryButtonSuccess: (props) => `
        border: 2px solid ${props.theme.warningColor};
    `,
};

const Button = styled.button`
    padding: 8px 12px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 2px;
    cursor: pointer;
    font-family: ${(props) => props.theme.primaryFont};
    transition: background-color 0.5s linear, color 0.4s linear;

    &:hover {
        background-color: ${(props) => props.theme['primaryHoverColor']};
        color: ${(props) => props.theme.textColorOnPrimary};
    }
    &:disabled {
        background-color: none;
        cursor: not-allowed;
        color: ${(props) => props.theme.disabled};
        border: none;
    }
    &:active {
        background-color: ${(props) => props.theme.PrimaryActiveColor};
        color: ${(props) => props.theme.PrimaryActiveColor};
        border-color: ${(props) => props.theme.textColorOnPrimary};
    }
    &:focus {
        outline: 3px solid ${(props) => props.theme.primaryHoverColor};
        outline-offset: 2px;
    }
`;

export const PrimaryButton = styled(Button)`
    background-color: ${(props) => props.theme.primaryColor};
    border: 2px solid transparent;
    color: ${(props) => props.theme.textColorOnPrimary};

    &:disabled {
        background-color: ${(props) => props.theme.disabled};
        color: ${(props) => props.theme.textOnDisabled};
        border-color: ${(props) => props.theme.disabled};
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    border: 2px solid ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColorOnPrimary};

    &:disabled {
        border: 2px solid ${(props) => props.theme.disabled};
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
    border: 2px solid transparent;
    color: ${(props) => props.theme.primaryColor};
    background: none;

    &:disabled {
        color: ${(props) => props.theme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
