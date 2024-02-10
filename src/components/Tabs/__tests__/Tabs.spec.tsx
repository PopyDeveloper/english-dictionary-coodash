import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Tabs from '..';

describe('<Tabs />', () => {
  it('Render Tabs component', () => {
    render(<Tabs />);

    expect(screen.getAllByText('Palavras')).toBeTruthy();
  });
});
