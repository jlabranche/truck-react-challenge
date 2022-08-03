import { useState, useEffect } from 'react';
import SimpleMap from "../../components/SimpleMap";

const Maps = () => {
  let [error, setError] = useState(null);
  let [isLoaded, setIsLoaded] = useState(false);
  let [locations, setLocations] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/trucks")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setLocations(result);
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <>
      {!isLoaded && ("Loading")}
      {locations && (
        <>
          <h1>Maps</h1>
          <div className="App">
            <SimpleMap locations={locations} />
          </div>
        </>
      )}
    </>
  );
};

export default Maps;
