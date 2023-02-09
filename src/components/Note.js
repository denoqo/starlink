import React, {Component} from 'react';

class Note extends Component {
    render() {
        return (
            <body>
                <div>
                    Starlink tracker is a front-end project that
                    visualize the real-time positions of
                    running satellites around the earth right now.
                </div>

                <div>
                    The real-time satellite positions is from N2YO API.
                    The world map is visualized with D3-geo.
                    The front-end is build with ReactJS and deployed on AWS Amplify.
                </div>

                <div>
                    Click "Find Satellite" ->
                    Select "STARLINKs" ->
                    Click "Track" ->
                    Selected Satellites (represented by dots)
                    will show up on the world map and moving.
                </div>
            </body>
        );
    }
}

export default Note;