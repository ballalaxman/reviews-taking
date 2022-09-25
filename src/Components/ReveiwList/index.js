import { Box, Button, Typography, Modal, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddReview from "../AddReview";
import Review from "../Review";
const Index = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState(null);
  const [update, setUpdate] = useState(false);
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

  useEffect(() => {
    if (localStorage.getItem("reviews")) {
      setData(JSON.parse(localStorage.getItem("reviews")));
    }
  }, [update]);

  const onUpdate = () => {
    setUpdate(!update);
  };

  return (
    <React.Fragment>
      <Stack direction="column" spacing={5} variant="outlined">
        <Stack
          direction="column"
          spacing={3}
          sx={{
            border: 1,
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          {data &&
            data.map((item) => (
              <Review onUpdate={onUpdate} key={item.id} data={item} />
            ))}
          {!JSON.parse(localStorage.getItem("reviews")) && (
            <Stack>
              <Typography align="center" fontWeight="500">
                No Review Found!.
              </Typography>
            </Stack>
          )}
        </Stack>

        <Stack
          direction="row"
          justifyContent="flex-end"
          sx={{
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{
              width: "150px",
              height: "40px",
            }}
          >
            Add Review
          </Button>
        </Stack>
        {/* Add Review Popup */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddReview onUpdate={onUpdate} onClose={handleClose} />
          </Box>
        </Modal>
      </Stack>
    </React.Fragment>
  );
};

export default Index;
