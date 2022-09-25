import { Button, Rating, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
const Index = ({ onClose, onUpdate }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let existingReviews;
    let updatedReviews;
    existingReviews = JSON.parse(localStorage.getItem("reviews"));
    const data = {
      title: title,
      rating: rating,
      description: description,
    };
    if (existingReviews) {
      data["id"] = existingReviews.length + 1;
      updatedReviews = [...existingReviews, data];
      localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    } else {
      data["id"] = 1;
      localStorage.setItem("reviews", JSON.stringify([data]));
    }
    resetData();
    onClose();
    onUpdate();
  };

  const resetData = () => {
    setTitle("");
    setRating(0);
    setDescription("");
  };
  return (
    <React.Fragment>
      <Stack
        direction="column"
        spacing={3}
        component="form"
        onSubmit={submitHandler}
      >
        <TextField
          fullWidth
          required
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Stack direction="column" spacing={1}>
          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
            sx={{
              width: "max-content",
            }}
          />
        </Stack>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          maxRows={6}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Stack
          direction="row"
          justifyContent={"flex-end"}
          spacing={2}
          sx={{
            width: "100%",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              minWidth: "100px",
            }}
            onClick={resetData}
          >
            Reset
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              minWidth: "100px",
            }}
          >
            Add
          </Button>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default Index;
