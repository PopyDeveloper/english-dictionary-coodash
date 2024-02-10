import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Button} from '../Button/Button';
import {ButtonFav} from '../ButtonFav';
import {WordButton} from '../WordButton';

describe('<Button />', () => {
  it('Render button default component', () => {
    render(<Button label={'press'} />);

    expect(screen.getByText('press')).toBeTruthy();
  });
});

describe('<ButtonFav />', () => {
  it('Render button favorite component', () => {
    render(<ButtonFav word="hello" />);

    expect(screen.getByTestId('fav-button')).toBeTruthy();
  });
});

describe('<WordButton />', () => {
  it('Render word button component', () => {
    render(<WordButton label={'press'} />);

    expect(screen.getByText('press')).toBeTruthy();
  });
});
