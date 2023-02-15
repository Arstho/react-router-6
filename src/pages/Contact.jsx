import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 43.324736,
  lng: 45.692487
};
function Contact() {
  return (
    <>
      <div>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A28a690c80f3232534083e5849ed5e8085940d5f03914bfad0608944cdea02139&amp;source=constructor" width="100%" height="350px" frameborder="0"></iframe>
      </div>
    </>
  );
}

export { Contact };
