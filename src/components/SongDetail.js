import React, {useDebugValue} from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a song</div>;
    }

    return (
        <div>
            <h3>Details for: </h3>
            Title: {song.title}
            <br/>
            Duration: {song.duration}
        </div>
    );
};

const mapStateToProps = state => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);