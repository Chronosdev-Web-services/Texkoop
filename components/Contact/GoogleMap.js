import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
const center = { lat: 45.7556, lng: 4.89951 };
function GoogleMapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCyYMVitCRfwEpDYyY9LkqJjxqDIkrOa0I",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map_container">
      <Marker position={center} />
    </GoogleMap>
  );
}
export default GoogleMapComponent;
