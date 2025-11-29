import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Layout/Banner';

export default function Contact() {
  return (
    <div>
      <Header />
      <Banner>
        <h2>Contact</h2>
      </Banner>

      <div className="mx-auto my-10 max-w-7xl">

        <h2 className="text-3xl mb-4">Contact us today!</h2>
        <p className="leading-loose">Proin vehicula vestibulum molestie. Cras porttitor odio eu ultrices maximus. Donec vehicula dapibus eros, porta aliquet sapien laoreet vestibulum. Nam egestas bibendum nibh, facilisis molestie est fermentum at. Sed vitae tempus nisi. Curabitur et purus malesuada, malesuada odio faucibus, faucibus erat. Ut vel vestibulum tortor.</p>

      </div>

      <Footer />
    </div>
  );
}