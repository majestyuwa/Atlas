import * as React from 'react';
import { StyleSheet, Text, View, Button, NativeSyntheticEvent, NativeTouchEvent, Image } from 'react-native';

export default class App1 extends React.Component {
  state = {showMajesty: false}; 

  public onPress(ev: NativeSyntheticEvent<NativeTouchEvent>) {
    console.log("");
    this.setState({showMajesty: !this.state.showMajesty});
  }

  public render() {
    const pic = {
      uri: "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/27504080_124718758345149_4361505701094462680_o.jpg?_nc_cat=100&_nc_oc=AQk8hxUOuE9079dAajHyxXdNuTIeLbJpiGNSgVFS_aVtJ17pExVHgBUO22TZhl5WePg&_nc_ht=scontent-atl3-1.xx&oh=f84aa2a2a4560e3d82ddc56a1be594f8&oe=5DA790D5"
    };
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
  
    const majesty = (
      <Image source = {pic} style={{width: 400, height: 400}}/>
    );
  
    return(
    <View style={styles.container}>
      <Button title = "Click for a surprise" onPress = {this.onPress.bind(this)}/>
      {this.state.showMajesty && majesty}
    </View>
    )
  };
}

let showPic: boolean = false;
function App() {
  
}



