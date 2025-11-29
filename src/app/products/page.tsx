import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Layout/Banner';

export default function Products() {
  return (
    <div>
      <Header />
      <Banner>
        <h2>Products</h2>
      </Banner>

      <div className="mx-auto my-10 max-w-7xl">

        <h2 className="text-3xl mb-4">Sample Products</h2>
        <p className="leading-loose">Aenean imperdiet, sem non elementum tincidunt, ligula tellus suscipit nisi, sed consequat lacus sapien id erat. Fusce quis facilisis elit. Integer sagittis semper orci id scelerisque. Pellentesque dapibus nibh vitae est fermentum elementum. In accumsan consequat malesuada. Curabitur at ante felis. Nam cursus efficitur est, at euismod enim rutrum vel.</p>

        <h3 className="text-2xl my-4">Database CRUD Data Sample</h3>


      </div>

      <Footer />
    </div>
  );
}