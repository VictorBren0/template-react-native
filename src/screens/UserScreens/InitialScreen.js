import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet
} from 'react-native';

export default function InitialScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Template</Text>
        <Text style={styles.text}>Feito por <Text style={styles.text2}>Victor Breno</Text></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#111111',
    fontSize: 30,
    textAlign: 'center'
  },
  text2: {
    color: 'red'
  }
});