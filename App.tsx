import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Home from './src/screens/Home';

function App()
{
  return <SafeAreaView>
    <Home />
  </SafeAreaView>
}

const styles = StyleSheet.create
({
  screen:
  {
    flex: 1,
  },
})

export default App;