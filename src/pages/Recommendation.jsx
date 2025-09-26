import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendedBooks } from "../redux/data/dataOps";
import imageUrl from "../assets/wallpaper.svg";
import { setToken } from "../redux/data/authSlice";
import { useState } from "react";
import { setTokenA } from "../api";
import Popup from "../components/Popup";


const Recommendation = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  // const isLoggedIn= useSelector((state) => state.auth.isLoggedIn);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [recommended, setRecommended] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const handleLibrary = () => {
    navigate("/mylibrary");
    console.log("Navigating to My Library");
  };
  const recommendedbooks = useSelector((state) => state.journey.recommended);
  console.log(recommendedbooks);

  const handlePopUp=(book)=>{
  console.log("Clicked book:", book); // test
  setIsOpenPopup(true);
  setSelectedBook(book);
  }
  useEffect(() => {
    if (!token ) {
      navigate("/login");
      return;
    }
    setTokenA(token);
    dispatch(setToken(token));
    const fetchRecommended = async () => {
      try {
        const recommended = await dispatch(
          fetchRecommendedBooks({ page: 1, limit: 7 })
        ).unwrap();
        console.log(recommended);
        setRecommended(recommended);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchRecommended();
  }, [dispatch, token, navigate]);

  return (
    <div className="flex flex-row min-h-screen overflow-hidden justify-between gap-5 p-10 bg-part mt-10">
      <div className="left-side flex flex-col gap-5 w-1/3 text-start p-7 rounded-xl bg-[#1F1F1F]">
        <p className="p-2">Filters: </p>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Book Title: "
          className="bg-part"
        />
        <input
          type="text"
          name="author"
          id="author"
          placeholder="The Author: "
          className="bg-part"
        />
        <button>To apply</button>

        <h2 className="text-xl">Start your workout</h2>
        <p>Create a personal library: add the books you intend to read </p>
        <p>
          Create your first workout: define a goal, choose a period, start
          training.
        </p>

        <div className="flex flex-row justify-between">
          <button
            type="button"
            onClick={() => handleLibrary()}
            className="text-start"
          >
            My library
          </button>
          <button>ok</button>
        </div>
      </div>

      <div className="right-side w-full justify-start flex flex-col pl-7 pt-4 rounded-xl bg-[#1F1F1F] text-start">
        <div className="flex flex-col items-start">
          <h2 className="text-3xl self-start text-left pb-7">Recommended</h2>
          <div className="flex flex-row gap-2">
            <></>
          </div>
        </div>
        {
          isOpenPopup && (
            <Popup onClose={()=>setIsOpenPopup(false)}  selectedBook={selectedBook} />
          )
        }
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {recommended?.results?.map((book, index) => (
            <li key={index} onClick={()=>handlePopUp(book)}>
              <div className="flex flex-col justify-start">
                {
                  <img
                    src={book.imageUrl || imageUrl}
                    alt="book"
                    className="rounded-xl h-70 md:h-90 xl:100"
                  />
                }
                <h2 className="font-bold ">
                  {book.title
                    ? book.title.split(".")[0].trim().charAt(0).toUpperCase() +
                      book.title.split(".")[0].trim().slice(1).toLowerCase()
                    : " "}
                </h2>
                <p className="font-light text-gray-50 ">{book.author}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recommendation;
