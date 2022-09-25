import { Modal, Rating, Stack, Typography, Box } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmationPopup from "../ConfirmationPopup";
const Index = ({ data, onUpdate }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const submitHandler = () => {
    let existingReviews = JSON.parse(localStorage.getItem("reviews"));
    const updatedReviews = existingReviews.filter((item) => item.id != data.id);
    let newReviews = [];
    updatedReviews.map((item, index) => {
      const data = {
        id: index + 1,
        title: item.title,
        rating: item.rating,
        description: item.description,
      };
      newReviews.push(data);
    });
    localStorage.setItem("reviews", JSON.stringify(newReviews));
    handleClose();
    onUpdate();
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    outline: "none",
    p: 4,
  };
  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ConfirmationPopup
            title="Delete Review"
            message={"Do you want to delete the review?"}
            onSubmit={submitHandler}
            onCancel={handleClose}
          />
        </Box>
      </Modal>
      <Stack
        direction="column"
        spacing={2}
        justifyContent="flex-start"
        sx={{
          border: 1,
          padding: "20px",
          borderColor: "#bdb4b3",
          borderRadius: "5px",
        }}
      >
        <Stack
          direction="row"
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
          sx={{
            width: "100%",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            alignContent="center"
          >
            <Typography variant="h5" fontWeight="600">
              {data.title}
            </Typography>
            <Rating name="read-only" value={data.rating} readOnly />
          </Stack>
          <Typography
            variant="body1"
            sx={{
              cursor: "pointer",
            }}
            onClick={handleOpen}
          >
            <DeleteIcon />
          </Typography>
        </Stack>

        <Typography variant="h5">{data.description}</Typography>
      </Stack>
    </React.Fragment>
  );
};

export default Index;
