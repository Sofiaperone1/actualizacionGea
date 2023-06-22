import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";

export default class Maps extends Component {

    render() {
        return (
            <div className="container">
                <GoogleMaps
                apiKey={"AIzaSyBUyL5kDl8xM3NieY3rTmo2iNHjy-o-nLU"}
                style={{height:"430px", width:"600px"}}
                zoom={10}
                center={{
                    lat: 9.423765,
                    lng:-1.654428
                }}
                markers= {{
                    lat: 9.423765,
                    lng:-1.654428
                }}
                />
            </div>
        )
    }


}