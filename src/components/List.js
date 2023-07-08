// const List = ({title}) => {
//     return(
//       <div className="list bg-dark">
//         <div className="row">
//           <h2 className="text-light title">{title}</h2>
//           <div className="row__posters">
//               <img
//                 className="row__poster row__posterLarge"
//                 src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
//                 alt=""
//               />
//               <img
//                 className="row__poster row__posterLarge"
//                 src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
//                 alt=""
//               />
//               <img
//                 className="row__poster row__posterLarge"
//                 src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
//                 alt=""
//               />
//               <img
//                 className="row__poster row__posterLarge"
//                 src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
//                 alt=""
//               />
//               <img
//                 className="row__poster row__posterLarge"
//                 src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
//                 alt=""
//               />
//               <img
//                 className="row__poster row__posterLarge"
//                 src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
//                 alt=""
//               />
//               <img
//                 className="row__poster row__posterLarge"
//                 src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
//                 alt=""
//               />
//               <img
//                 className="row__poster row__posterLarge"
//                 src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
//                 alt=""
//               />
//               <img 
//                 className="row__poster  row__posterLarge"
//                 src="https://image.tmdb.org/t/p/original//9yxep7oJdkj3Pla9TD9gKflRApY.jpg"
//                 alt=""
//               />
//           </div>
//         </div>
//       </div>
//     )
//   }
//   export default List;


import { useEffect, useState } from "react";
import { fetchData } from "../api/api";

const List = ({ title, param }) => {
  const [list, setList] = useState([]);
  // useEffect(()=>{
  //   fetchData(param).then( res => setList(res.data.results))
  // },[]);
  console.log(list)
  return(
    <div className="list bg-dark">
      <div className="row">
        <h2 className="text-white title">{ title }</h2>
        <div className="col">
          <div className="row__posters">
            {
              list.map(item => <img
                className="row__poster row__posterLarge"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title}
              />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;