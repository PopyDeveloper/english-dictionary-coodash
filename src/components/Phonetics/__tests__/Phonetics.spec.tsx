import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Phonetics from '..';

describe('<Phonetics />', () => {
  it('Render Phonetics component', () => {
    const mock = [
      {
        text: 'test',
        audio: '',
      },
    ];
    render(<Phonetics phoneticsData={mock} />);

    expect(screen.getByText('test')).toBeTruthy();
  });
});
