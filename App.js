/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * https://codesandbox.io/s/p7opp0q8m
 */

import React, { Component } from 'react';


import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
    List
} from 'react-native';

import SearchBar from './components/search_bar';

const API_KEY = '89272d1f40c917674515b3364c6f2f96';
const URL = 'https://developers.zomato.com/api/v2.1/search?q=Taco%20Bell&count=3&lat=37.3641651&lon=-120.42546149999998';

export default class App extends Component{

  constructor(props){
    super(props);

    this.state = {
        isLoading: true,
        Restaurants : [],
        selectedRestaurant: null
    };

    this.getListRestaurants();
  }

  getListRestaurants(){
    return fetch(URL ,{
        method:'GET',
        headers:{
          Accept: 'application/json',
          'user-key' : API_KEY,
        }
      }).then((response) => response.json())
        .then((result) => {

        this.setState({
          isLoading: false,
          Restaurants : result.restaurants,
          selectedRestaurant : 1
        });

        console.log(result);
    }).catch((err) =>{
      console.error(err);
        });
  }

  render() {

      if(this.state.isLoading){
          return(
              <View style={{flex: 1, padding: 20}}>
                  <ActivityIndicator/>
              </View>
          )
      }

      // renderItem={({item}) => <Text>{item.name}</Text>}
      //                     keyExtractor={(item, index) => index}

      return(
        <View>
            <SearchBar />
            <View style={{flex: 1, paddingTop:20, justifyContent:'center'}}>
                <FlatList
                    data={this.state.Restaurants}
                    renderItem={({item}) => <Text>{item.restaurant.name}</Text>}
                    keyExtractor={(item) => item.restaurant.id}
                />
            </View>

            <Text>Some Text</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
