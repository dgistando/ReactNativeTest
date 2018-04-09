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