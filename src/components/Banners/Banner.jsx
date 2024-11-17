import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../utils/axios";
import requests from "../../utils/requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request)
      setMovie(
        request?.data.results[
        Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  //   console.log(movie)

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/* <h1 className="banner_description">{movie?.overview}</h1> */}
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;


// import React, { useEffect, useState } from "react";
// import "./banner.css";
// import axios from "../../utils/axios";
// import requests from "../../utils/requests";

// function Banner() {

//   const [movie, setMovie] = useState(null); // Initialize with null to handle empty state

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const request = await axios.get(requests.fetchNetflixOriginals);
//         console.log(request)
//         setMovie(
//           request.data.results[
//             Math.floor(Math.random() * request.data.results.length)
//           ]
//         );
//       } catch (error) {
//         console.error("Failed to fetch Netflix Originals:", error);
//       }
//     }
//     fetchData();
//   }, []);

//   function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//   }

//   return (
//     <header
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: movie?.backdrop_path
//           ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
//           : "none",
//         backgroundPosition: "center center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="banner_contents">
//         <h1 className="banner_title">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner_buttons">
//           <button className="banner_button">Play</button>
//           <button className="banner_button">My List</button>
//         </div>
//         <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
//       </div>
//       <div className="banner_fadeBottom" />
//     </header>
//   );
// }

// export default Banner;
