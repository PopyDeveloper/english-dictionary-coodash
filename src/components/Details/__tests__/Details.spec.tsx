import React from 'react';
import Details from '..';
import {render, screen} from '@testing-library/react-native';

describe('<Details />', () => {
  it('Render detail component with description word', () => {
    const mock = {
      word: 'sorry',
      phonetics: [{text: 'test', audio: 'test'}],
      meanings: [],
      sourceUrls: [],
      license: {
        name: 'test',
        url: 'test',
      },
    };
    render(<Details {...mock} />);

    expect(screen.getByText(mock.word)).toBeTruthy();
  });
});
