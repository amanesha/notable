import React, { useEffect } from "react";
import { useState } from "react";

function Location() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    let watchId;
    
    if (navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.log("Unable to retrieve your location", error);
        }
      );
    } else {
      console.log("Geolocation not supported");
    }

    // Cleanup function to stop watching location
    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, []); // Empty dependency array runs only on mount/unmount

  return <div>Location</div>;
}

export default Location;