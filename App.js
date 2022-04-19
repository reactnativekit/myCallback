import React, { useState, useCallback } from 'react';
import { Text, View, Button } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(current => current + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(current => current - 1);
  }, []);

  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"#FFEBC1"}}>
      <Text style={{fontSize:30}}>Counter App{'\n'}</Text>
      <Text style={{fontSize:20}}>Counter: {count} {'\n'}</Text>

      <Button color="#A64B2A" title="Increment" onPress={handleIncrement}/>
      <Text>{'\n'}</Text>
      <Button color="#D7A86E" title="Decrement" onPress={handleDecrement}/>

    </View>
  );
}

export default App;