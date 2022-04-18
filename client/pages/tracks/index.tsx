import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Box, Button, Grid, Card } from "@mui/material";
import { useRouter } from "next/router";
import { ITrack } from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
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
    },
    {
      _id: "2",
      name: "Name 2",
      artist: "Artist 2",
      text: "Text 2",
      listens: 2,
      audio: "http://localhost:5000/audio/aaron-smith-feat-luvli-dancin.mp3",
      picture: "http://localhost:5000//image/form_test.jpg",
      comments: [],
    },
    {
      _id: "3",
      name: "Name 3",
      artist: "Artist 3",
      text: "Text 3",
      listens: 3,
      audio: "http://localhost:5000/audio/summer-cem-tamam-tamam.mp3",
      picture: "http://localhost:5000//image/photo_2022.jpg",
      comments: [],
    },
  ];

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Track list</h1>
              <Button onClick={() => router.push("/tracks/create")}>
                Download
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
