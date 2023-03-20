import React from "react";
import "./Tracklist.css";
import Track from "../Track/Track";

export default class TrackList extends React.Component {
    render() {
        return (
            <div class="TrackList">
                {
                    this.props.tracks.map(track => {
                        return <Track track={track} key={track.id}/>
                    })
                }
            </div>
        )
    }
}