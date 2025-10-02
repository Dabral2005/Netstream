// import React, { useEffect, useState } from 'react'
// import './player.css'
// import back_arrow_icon from '../../assets/back_arrow_icon.png'
// import { useNavigate, useParams } from 'react-router-dom'
// const Player = () => {
//   const {id}=useParams();
//   const navigate = useNavigate ();
// const [apiData,setApiData]= useState({
//   name:"",
//   key:"",
//   published_at:"",
//   typeof:"",

   
// })
//   const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGE1NmRhOTZlOTNjNDFhZjQ5YjFiODIxYTBjOTA2OSIsIm5iZiI6MTc1MzgwNzQ2OS45NTcsInN1YiI6IjY4ODhmYTZkZGU2YjUwY2FjMGZlMTgwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S9CRJPcNtSRn6hvMv3QDQfx9_oku2p5EkorDdo6H85A'
//   }
// };
// useEffect(()=>{
// fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
//   .then(res => res.json())
//   .then(res => setApiData(res.results[0]))
//   .catch(err => console.error(err));
// },[])


//   return (
//     <div className='player'>
//       <img src={back_arrow_icon} alt="" onClick={()=> {navigate(-2)}}/>
//       <iframe width='90%' height='90%'
//       src={`https://www.youtube.com/embed/${apiData.key}`}
//       title='trailer' frameBorder='0' allowFullScreen>
//       </iframe>
//       <div className="player-info">
//         <p>{apiData.published_at.slice(0,10)}</p>        
//         <p>{apiData.name}</p>
//         <p>{apiData.type}</p>
//       </div>
//     </div>
//   )
// }

// export default Player;



import React, { useEffect, useState } from 'react';
import './player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';
const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGE1NmRhOTZlOTNjNDFhZjQ5YjFiODIxYTBjOTA2OSIsIm5iZiI6MTc1MzgwNzQ2OS45NTcsInN1YiI6IjY4ODhmYTZkZGU2YjUwY2FjMGZlMTgwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S9CRJPcNtSRn6hvMv3QDQfx9_oku2p5EkorDdo6H85A',
    },
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          // Prefer trailer
          const trailer = res.results.find(
            (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
          );
          setApiData(trailer || res.results[0]);
        } else {
          setApiData(null);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="player">
        <p style={{ color: 'white', fontSize: '20px' }}>Loading trailer...</p>
      </div>
    );
  }

  if (!apiData) {
    return (
      <div className="player">
        <img src={back_arrow_icon} alt="Back" onClick={() => navigate(-1)} />
        <p style={{ color: 'white', fontSize: '18px' }}>
          Sorry, no trailer available for this movie.
        </p>
      </div>
    );
  }

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="Back" onClick={() => navigate(-1)} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title={apiData.name || 'Trailer'}
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="player-info">
        <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : ''}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;

