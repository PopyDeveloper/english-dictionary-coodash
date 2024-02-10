import React, {useState, useEffect, FC} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import TrackPlayer, {RepeatMode} from 'react-native-track-player';

type Props = {
  url: string;
};

const TrackPlayerComponent: FC<Props> = ({url}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const setupPlayer = async () => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.setRepeatMode(RepeatMode.Queue);
      await TrackPlayer.add({
        url,
      });
    };

    setupPlayer();

    return () => TrackPlayer.reset();
  }, []);

  const onPlay = async () => {
    await TrackPlayer.play();
    setIsPlaying(true);
  };

  const onStop = async () => {
    await TrackPlayer.stop();
    setIsPlaying(false);
  };

  const onTogglePlayback = () => {
    isPlaying ? onStop() : onPlay();
  };

  return (
    <View style={S.container}>
      <Button
        title={isPlaying ? 'Parar' : 'Tocar'}
        onPress={onTogglePlayback}
      />
    </View>
  );
};

export default TrackPlayerComponent;

const S = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
