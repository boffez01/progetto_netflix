import Navbar from './assets/components/Navbar';
import MovieGallery from './assets/components/MovieGallery';
import Footer from './assets/components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid px-4">
        <MovieGallery title="Trending Now" query="Harry Potter" />
        <MovieGallery title="Watch it Again" query="Lord of the Rings" />
        <MovieGallery title="New Releases" query="Star Wars" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
