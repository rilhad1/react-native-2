import { StyleSheet } from 'react-native';

const color = {
  green: '#92b558',
  black: 'black',
  yellow: '#f6d155',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerBut: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '70%',
  },
  button: {
    justifyContent: 'space-around',
    backgroundColor: color.green,
    alignItems: 'center',
    padding: 10,
    width: '50%',
    height: '100%',
  },
  butText: {
    color: color.black,
    fontSize: 45,
  },
  countContainer: {
    height: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.yellow,
    paddingTop: '15%',
  },
  countText: {
    color: color.black,
    fontSize: 80,
  },
});

export default styles;
