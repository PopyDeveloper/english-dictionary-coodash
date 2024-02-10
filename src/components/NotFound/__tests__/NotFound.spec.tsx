import React from 'react';
import {render, screen} from '@testing-library/react-native';
import NotFound from '..';

describe('<NotFound />', () => {
  it('Render NotFound component', () => {
    render(<NotFound wordNotFound="like" />);

    expect(screen.getByText('like')).toBeTruthy();
  });
});
