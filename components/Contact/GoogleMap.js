import { GoogleMap, useLoadScript } from "@react-google-maps/api";

function GoogleMapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 40, lng: -80 }}
      mapContainerClassName={{
        width: "400px",
        height: "400px",
      }}
    ></GoogleMap>
  );
}
export default GoogleMapComponent;
