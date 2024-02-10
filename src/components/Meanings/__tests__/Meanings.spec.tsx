import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Meanings from '..';
import {TMeanings} from 'src/types/word';

describe('<Meanings />', () => {
  it('Render Meanings component', () => {
    const mock: TMeanings[] = [
      {
        definitions: [{definition: 'uma palavra'}],
        antonyms: [],
        partOfSpeech: '',
        synonyms: [],
      },
    ];

    render(<Meanings meaningsData={mock} />);

    expect(screen.getByText('uma palavra')).toBeTruthy();
  });
});
