import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-web';
import Header from './app/components/Header';
import { Profile } from './app/components/Profile';
import MyButton from './app/components/MyButton';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Profile name="Nilin" />
      <MyButton />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff0',
    textAlign: 'center',
  },
});
