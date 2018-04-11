import React, {Component} from 'react';
import {AppRegistry,Text, TextInput} from 'react-native';

export default class Restaurant extends Component{

    constructor(props) {
        super(props);

        const map = "";
        const infowindow = "";
        const myPlace = {lat: 25.276987, lng: 55.296249 };
    }

    render() {

        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            location : myPlace,
            radius : 5500,
            type : [ 'restaurant' ]
        }, callback);

        function callback(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                }
            }
        }


        return (
            <Text>Test</Text>
        );
    }
}

/**
 import React from "react";
 import { render } from "react-dom";
 import { makeData, Logo, Tips } from "./Utils";

 // Import React Table
 import ReactTable from "react-table";
 import "react-table/react-table.css";

 class App extends React.Component {
  constructor() {
    super();

    const Zomato = require('zomato.js');
    const z = new Zomato('89272d1f40c917674515b3364c6f2f96');

    this.state = {
      data: makeData()
    };

    z.categories()
     .then(function (data) {
        console.log(data);
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  render() {
    const { data } = this.state;



    return (
      <div>Test</div>
    );
  }
}

 render(<App />, document.getElementById("root"));
 */