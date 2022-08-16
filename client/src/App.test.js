import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text from route', () => {
  render(<App />);
  const linkElement = screen.getByText('Start Now');
  expect(linkElement).toBeInTheDocument();
});


test('Has link to /home', () => {
  render(<App />)  

  screen.getByRole('link')

  expect(screen.getByRole('link')).toHaveTextContent('Start Now')});


test('has image', () => {
  render(<App />)  

  const logo = screen.getByAltText('Landing Photo')

  expect(logo).toHaveAttribute('src')
  expect(logo).toHaveAttribute('alt')

});
// 
//- [ ] Alguna imagen de fondo representativa al proyecto
//- [ ] Botón para ingresar al home (`Ruta principal`)