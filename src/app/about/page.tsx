import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Layout/Banner';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function About() {
  return (
    <div>
      <Header />
      <Banner>
        <h2>About</h2>
      </Banner>

      <div className="mx-auto my-10 max-w-7xl">

        <h2 className="text-3xl mb-4">About this template</h2>
        <p className="leading-loose">Cras mollis, nulla sit amet mattis dapibus, metus libero tincidunt nisi, rhoncus molestie ligula turpis ut dolor. Quisque porttitor leo sed neque dapibus, eget sollicitudin lorem semper. Donec in augue sagittis, rhoncus diam vitae, ultrices elit. Vestibulum euismod, felis et tincidunt euismod, neque sem tincidunt metus, eu cursus nisl est eu mi. Phasellus sodales leo urna, quis mattis ante volutpat id. Proin gravida eleifend tempor. Phasellus euismod ipsum nisi, accumsan efficitur magna tristique sed. Phasellus malesuada nisi lorem, a dapibus neque sagittis vitae. Pellentesque gravida, leo a tincidunt pellentesque, ante elit efficitur quam, id rutrum purus sem vel dui.</p>

        <p className="mt-5">
          <Button variant="contained" color="secondary" startIcon={<AddIcon />}>
            Add Product Item
          </Button>
        </p>

      </div>

      <Footer />
    </div>
  );
}