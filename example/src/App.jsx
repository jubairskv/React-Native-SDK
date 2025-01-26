import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import mylibrary from 'react-native-my-library';

const App = () => {
  const [dummyText, setDummyText] = useState('');

  const fetchDummyText = async () => {
    try {
      const text = await mylibrary.getDummyText();
      setDummyText(text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{dummyText || 'Press the button to get dummy text'}</Text>
      <Button title="Get Dummy Text" onPress={fetchDummyText} />
    </View>
  );
};

export default App;
