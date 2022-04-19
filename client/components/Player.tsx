import React from "react";
import { Grid, IconButton } from "@mui/material";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import styles from "../styles/Player.module.scss";
import { ITrack } from "../types/track";
import TrackProgress from "./TrackProgress";

const Player = () => {
  const track: ITrack = {
    _id: "1",
    name: "Name 1",
    artist: "Artist 1",
    text: "Text 1",
    listens: 1,
    audio:
      "http://localhost:5000/audio/723810b0-d5a5-4198-974b-1892adce6c11.mp3",
    picture:
      "http://localhost:5000//image/f1fa8b44-8579-4c15-9bd1-03428536432b.jpg",
    comments: [],
  };
  const active = false;

  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid
        container
        direction={"column"}
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "grey" }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})} />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={0} right={100} onChange={() => ({})} />
    </div>
  );
};

export default Player;
