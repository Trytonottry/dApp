import { render, screen } from '@testing-library/react';
import App from './index.html'; // Предполагается, что компонент экспортирован

test('renders connect wallet button', () => {
    render(<App />);
    const button = screen.getByText(/Connect Wallet/i);
    expect(button).toBeInTheDocument();
});