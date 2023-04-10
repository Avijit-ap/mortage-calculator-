import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import TenaureSelect from "./components/TenaureSelect";
import Result from "./components/Result";
import { Container, Grid } from "@mui/material";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SliderSelect />
            <TenaureSelect />

          </Grid>

          <Grid item xs={12} md={6}>
            <Result />

          </Grid>


        </Grid>
      </Container>
    </div>
  );
}

export default App;
