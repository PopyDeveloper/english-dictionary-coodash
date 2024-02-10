import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Star from '..';

describe('<Star />', () => {
  it('Render Start', () => {
    render(<Star />);

    expect(screen.getByTestId('star-comp')).toBeTruthy();
  });
});
