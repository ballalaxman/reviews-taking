import logo from "./logo.svg";
import "./App.css";
import ReviewList from "../src/Components/ReveiwList";
import { Container } from "@mui/material";
function App() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 5,
      }}
    >
      <ReviewList />
    </Container>
  );
}

export default App;
