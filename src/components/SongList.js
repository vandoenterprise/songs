import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return (
            <div className="ui middle aligned divided list">
                {this.props.songs.map(song => this.renderItem(song))}
            </div>
        )
    }
    renderItem(song) {
        return (
            <div className="item" key={song.title}>
                <div className="right floated content">
                    <div className="ui button" onClick={() => {
                        this.props.selectSong(song)
                    }}>
                        Select
                    </div>
                </div>
                <div className="content">
                    {song.title}
                </div>
            </div>
        )
    }

    render() {
        return (
            this.renderList()
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return { songs: state.songs }
}

export default connect(mapStateToProps, { selectSong })(SongList);
