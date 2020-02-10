import React from 'react';
import {View, Text, Image} from 'react-native';
import {Ionicons} from "@expo/vector-icons"

const HomeScreen = ()=>{
  return(
    //the first one indicates that what ever is in it is javascript and the inner one indicate key-value pair
    <View style={{height: 200, width:400, flex: 1,backgroundColor:"#e3e3e3"}}>

      <View style={{paddingHorizontal: 20}}>
        <Text style={{ fontSize: 24, fontWeight:"bold"}}>Settings</Text>
      </View>

      <View style={{backgroundColor: '#ffffff',  flexDirection: "row" }}>
        <View style={{height: 100, flex: 2, alignItems: "center", justifyContent: "center"}}>
          <Image source={require('../assets/images/avatar.jpg')} style={{width: 80, height:80, borderRadius: 50 }}/>
        </View>
        <View style={{  height: 100, flex: 5, justifyContent: "center",paddingHorizontal:10}}>
            <Text style={{fontSize: 30}}>Kenneth Lartey</Text>
            <Text>AppleID, iCloud, itunes & Appstore</Text>
        </View>
        <View style={{ height: 100, flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Ionicons
              name="ios-arrow-forward"
              size={26}
            />
        </View>  
      </View>

      <View style={{backgroundColor: "#ffffff", marginTop: 20, flexDirection: "row", height: 40 , borderWidth: 0.43, borderColor: '#dedede'}}>
        <View style={{flex: 12, alignItems: "center", justifyContent: "space-between", flexDirection: "row"}}>
          <Text style={{paddingHorizontal: 20}} >Finish setting up your Iphone</Text>
          <View style={{backgroundColor: "red", width:20, height: 20, borderRadius: 10, alignItems: "center", justifyContent: "center"}}>
            <Text style={{ color: '#ffffff', fontWeight: 'bold'}}>1</Text>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
              <Ionicons
                name="ios-arrow-forward"
                size={26}
              />
        </View>  
      </View>
    </View>
  )
}

export default HomeScreen