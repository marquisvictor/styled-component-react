import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
    PrimaryButton,
    SecondaryButton,
    TertiaryButton,
    SignUpModal,
} from './components';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';
import { ThemeProvider } from 'styled-components';

const App = () => {
    const [useDarkTheme, setUseDarkTheme] = useState(false);

    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
            <button
                style={{
                    margin: '0 16px 24px',
                    padding: '8px',
                    backround: 'none',
                    cursor: 'pointer',
                    border: '2px solid #000',
                    marginTop: '60px',
                }}
                onClick={() => setUseDarkTheme(true)}
            >
                Dark Theme
            </button>

            <button
                style={{
                    margin: '0 16px 24px',
                    padding: '8px',
                    backround: 'none',
                    cursor: 'pointer',
                    border: '2px solid #000',
                    marginTop: '60px',
                }}
                onClick={() => setUseDarkTheme(false)}
            >
                Default Theme
            </button>

            <div
                style={{
                    background: useDarkTheme
                        ? defaultTheme.darkMode
                        : darkTheme.primaryColor,
                    width: '100vw',
                    height: '90vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}
            >
                <PrimaryButton
                // modifiers={['small', 'success', 'primaryButtonSuccess']}
                >
                    Hello World!
                </PrimaryButton>
                <SecondaryButton
                // modifiers={['large', 'warning', 'secondaryButtonWarning']}
                >
                    How are you World!
                </SecondaryButton>
                <TertiaryButton
                // modifiers={['error', 'tertiaryButtonError']}
                >
                    What's up World!
                </TertiaryButton>
                <GlobalStyle />
                <SignUpModal />
            </div>
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
