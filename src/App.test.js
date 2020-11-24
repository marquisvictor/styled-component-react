// use describe, it pattern

describe('<App />', () => {
    it('Renders <App /> component correctly', () => {
        const { getByText } = render(<App />);
        expect(
            getByText(/Getting started with React testing library/i),
        ).toBeInTheDocument();
    });
});
