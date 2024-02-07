import React from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Favorites} from 'screens/Favorites';
import {History} from 'screens/History';
import {WordList} from 'screens/WordList';

const renderScene = SceneMap({
  wordList: WordList,
  history: History,
  favorites: Favorites,
});

const Tabs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'wordList', title: 'Palavras'},
    {key: 'history', title: 'Histórico'},
    {key: 'favorites', title: 'Favoritos'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default Tabs;
