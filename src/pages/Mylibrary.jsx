import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchRecommendedBooks } from "../redux/data/dataOps";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/data/authSlice";
import { setTokenA } from "../api";
export default function Mylibrary() {
     let recommendedbooks = useSelector((state) => state.journey.recommended);
       let dispatch = useDispatch();
         const token = useSelector((state) => state.auth.token);
     useEffect(()=>{
        console.log(recommendedbooks);
          setTokenA(token);
            dispatch(setToken(token));
            const fetchRecommended = async () => {
              try {
                 recommendedbooks = await dispatch(
                  fetchRecommendedBooks({ page: 1, limit: 7 })
                ).unwrap();
                console.log(recommendedbooks);
                
              } catch (e) {
                console.log(e.message);
              }
            };
            fetchRecommended();
     },[])
  return (
    <div className="flex min-h-screen overflow-hidden justify-between gap-5">
        <div className="w-1/4 flex flex-col gap-5 p-4 text-start bg-[#1F1F1F]">
            <div className="flex flex-col gap-2">
                <p className="p-3">Create your library:</p>
                <input type="text" placeholder="Book title: " className="p-3 bg-[#262626]" />
                <input type="text" placeholder="The author: " className="p-3 bg-[#262626]" />
                <input type="text" placeholder="Number of pages: " className="p-3 bg-[#262626]" />
            </div>
            <button className="border  border-slate-400 text-white self-start p-3">Add book</button>
            <div className="flex flex-col gap-4 p-3 bg-[#262626]">
                <h2 className="text-white text-2xl">Recommended books</h2>
                <ul className="grid grid-cols-3 gap-2">  
                    {recommendedbooks && recommendedbooks.slice(0,3).map((book,index)=>(
                        <li key={index}>
                            <div><img src={book.imageUrl} alt="img" className="h-30 w-30"/>
                            <p>{book.title ? book.title.split(".")[0].trim().charAt(0).toUpperCase()+
                            book.title.split(".")[0].trim().slice(1).toLowerCase().slice(0,8): ""}</p>
                            <p className="text-gray-500 text-sm">{book.author.split(" ")[0]}</p>
                            </div>
                            </li>
                    ))}
                </ul>
                <div className="flex flex-row justify-around">
                <button type="button">Home</button>
                <button type="button">---</button>
            </div>
            </div>
            
        </div>
        <div className="w-3/4 p-4 bg-[#1F1F1F]">
            <div className="flex flex-row justify-around">
                <h2 className="text-white text-2xl font-semibold text-start">My Library</h2>
                <select name="" id="">
                    <option value="All books"></option>
                    <option value="Unread"></option>
                    <option value="In progress"></option>
                    <option value="Done"></option>
                </select>
            </div>
            <div className="flex flex-col items-center gap-3">
                <p>img</p>
                <p>To start training, add some of your books or from the recommended ones</p>
            </div>
        </div>
    </div>
  )
}
