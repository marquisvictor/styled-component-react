import styled from 'styled-components';
import { defaultTheme } from '../utils';
import { typeScale } from '../utils';

const Button = styled.button`
    padding: 8px 12px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 2px;
    cursor: pointer;
    font-family: ${defaultTheme.primaryFont};
    /* margin: 20rem 6rem; */
`;

export const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: 2px solid transparent;
    color: ${defaultTheme.textColorOnPrimary};
`;

export const SecondaryButton = styled(Button)`
    border: 2px solid ${defaultTheme.primaryColor};
    color: ${defaultTheme.primaryColor};
`;

export const TertiaryButton = styled(Button)`
    border: 2px solid transparent;
    color: ${defaultTheme.primaryColor};
`;
