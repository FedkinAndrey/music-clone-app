import React from "react";
import { ITrack } from "../../types/track";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import { Button, Grid, TextField } from "@mui/material";

const TrackPage = () => {
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
  const router = useRouter();

  return (
    <MainLayout>
      <Button
        style={{ fontSize: 32 }}
        variant={"outlined"}
        onClick={() => router.push("/tracks")}
      >
        To list
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img src={track.picture} width={200} height={200} />
        <div style={{ marginLeft: 30 }}>
          <h1>Track name - {track.name}</h1>
          <h1>Artist - {track.artist}</h1>
          <h1>Listens - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Lyrics</h1>
      <p>{track.text}</p>
      <h1>Comments</h1>
      <Grid container gap={2}>
        <TextField label="Your name" fullWidth />
        <TextField label="Comment" fullWidth multiline rows={4} />
        <Button>Send comment</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div>
            <div>Author - {comment.username}</div>
            <div>Comment - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
