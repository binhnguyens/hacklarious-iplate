import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native'

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;

const images = [
  require('./assets/plate.png'),
  require('./assets/p1.jpg'),
  require('./assets/p2.png'),
  require('./assets/p3.jpg'),
  require('./assets/p4.jpeg'),
  require('./assets/p5.jpg'),
];

class App extends Component {
  state = {
    count: 0
  }

  onPress = () => {
    if (this.state.count == (images.length-1))
    {
      this.setState({count: 0})
    }
    else {
      this.setState({
        count: this.state.count + 1
      })
    }

  }

 render() {
    return (
      <View style={styles.container}>
      <Text style={styles.instructions}>Welcome to your gourmet experience of dining on <B>iPlate</B> </Text>

        <Image source={images[this.state.count]} style={styles.logo}/>

        <TouchableOpacity style={styles.button} onPress={this.onPress}>
        <Text style={styles.buttonText}>Choose next Plate</Text>
        </TouchableOpacity>

        <View style={styles.countContainer}>
        </View>
        </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 400,
    marginBottom: 20,
    resizeMode: "contain"
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
})

export default App;
