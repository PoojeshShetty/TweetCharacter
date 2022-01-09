import * as React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const App = () => {
  const [text, setText] = React.useState('');

  let remainder = 288 - text.length;
  let color = 'grey';
  let bgcolor = '#b8b6b6';
  if (remainder < 0) {
    color = 'red';
    bgcolor = 'pink';
  } else if (remainder >= 0 && remainder <= 10) {
    color = 'yellow';
    bgcolor = '#fcf39d';
  }

  const styles = StyleSheet.create({
    input: {
      width: '80%',
      height: 300,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20,
      borderColor: color,
      backgroundColor: bgcolor,
      borderStyle: 'solid',
      borderRadius: 10,
      borderWidth: 5,
    },
    text: {
      margin: 10,
      textAlign: 'center',
      color: color,
      fontWeight: '700',
    },
  });

  const handleTextChange = (txt: string) => {
    setText(txt);
  };
  return (
    <View>
      <TextInput
        multiline={true}
        style={styles.input}
        onChangeText={val => handleTextChange(val)}
        defaultValue={text}
      />
      <View>
        <Text style={styles.text}>Characters remaining : {remainder}</Text>
      </View>
    </View>
  );
};

export default App;
