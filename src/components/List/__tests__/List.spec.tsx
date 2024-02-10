import React from 'react';
import {render, screen} from '@testing-library/react-native';
import List from '..';

describe('<List />', () => {
  it('Render List component', () => {
    render(<List list={['hello']} fallbackMessage="lista vazia" />);

    expect(screen.getByText('hello')).toBeTruthy();
  });
});
