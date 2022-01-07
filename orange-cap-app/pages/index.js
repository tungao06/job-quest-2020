import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ joke: [] });
  const [num, setNum] = useState(1);
  const [fistName, setFistName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(async () => {
    getJoke();
  }, [num]);

  const getJoke = async () => {
    setLoading(true);
    const url = `http://api.icndb.com/jokes/random/${num}?firstName=${fistName}&lastName=${lastName}`;

    await axios(url)
      .then((resp) => {
        console.log(resp);
        setData({
          joke: resp.data.value,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    getJoke();
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen gap-4 py-2 overflow-auto bg-orange-cap">
      <div className="sticky top-0 w-5/6 p-4 text-sm bg-gray-100 rounded-lg shadow-lg sm:w-2/3">
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
          <div className="">
            <p className="text-sm antialiased leading-4">Numbers</p>
            <input
              type="number"
              className="w-full px-4 py-2 text-center rounded-lg shadow-lg outline-none "
              min="1"
              max="50"
              value={num}
              onChange={(e) => {
                setNum(e.target.value);
              }}
            />
          </div>
          <div className="">
            <p className="text-sm antialiased leading-4">FirstName</p>
            <input
              placeholder="input firstname"
              type="text"
              className="w-full px-4 py-2 text-center rounded-lg shadow-lg outline-none "
              value={fistName}
              onChange={(e) => {
                setFistName(e.target.value);
              }}
            />
          </div>
          <div className="">
            <p className="text-sm antialiased leading-4">LastName</p>
            <input
              type="text"
              placeholder="input lastname"
              className="w-full px-4 py-2 text-center rounded-lg shadow-lg outline-none"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="col-span-3">
            <input
              className="w-full px-4 py-2 transition ease-in-out delay-150 rounded-lg shadow outline-none cursor-pointer hover:bg-opacity-80 dow-lg bg-amber-400 "
              type="submit"
              value="Submit"
              disabled={loading}
            />
          </div>
        </form>
      </div>
      <div
        id="list-joke"
        className="relative w-5/6 max-h-screen p-4 overflow-y-auto bg-gray-100 rounded-lg shadow-lg scrollbar-hide sm:w-2/3"
      >
        {loading && (
          <div className="absolute inset-0 z-20 flex bg-gray-300 bg-opacity-50">
            <div className="flex flex-col items-center justify-center gap-6 m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 c0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <p className="font-bold animate-ping">Loading ...</p>
            </div>
          </div>
        )}
        <ul className="flex flex-col gap-2">
          {data.joke.map((jokes) => (
            <li
              className="relative px-3 py-6 text-base transition duration-100 ease-in-out border-2 rounded-lg shadow-lg cursor-pointer hover:scale-105"
              key={jokes.id}
              style={{ borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}
            >
              {jokes.joke}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
