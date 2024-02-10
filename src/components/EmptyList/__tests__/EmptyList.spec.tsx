import React from 'react';
import {render, screen} from '@testing-library/react-native';
import EmptyList from '..';

describe('<EmptyList />', () => {
  it('Render emptyList component', () => {
    render(<EmptyList message="lista vazia" />);

    expect(screen.getByText('lista vazia')).toBeTruthy();
  });
});
