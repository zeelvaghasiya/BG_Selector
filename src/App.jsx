import { useCallback, useRef, useState } from "react";
import "./App.css";

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const copyColor = useCallback((e) => {
    window.navigator.clipboard.writeText(`rgb(${red},${green},${blue})`);
  });

  return (
    <div>
      <h1 className="text-center text-3xl my-8 font-bold">
        Background Color Selector
      </h1>
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 justify-center items-center">
        <div className="flex md:flex-row md:space-x-2 md:space-y-0 justify-center items-center">
          <button
            type="button"
            class="rounded-md border border-red-500 px-3 py-2 text-sm font-semibold text-red-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={() => {
              setRed((red + 1) % 256);
            }}
          >
            RED +
          </button>
          <input
            type="range"
            min={0}
            max={255}
            onChange={(e) => {
              setRed(parseInt(e.target.value));
            }}
            value={red}
            className="appearance-none mx-4 w-14 h-2 bg-gray-400 rounded-full outline-none thumb-white"
            style={{ background: "rgb(239, 68, 68)" }}
          />
          <button
            type="button"
            class="rounded-md border border-red-500 px-3 py-2 text-sm font-semibold text-red-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={() => {
              setRed(red == 0 ? 255 : red - 1);
            }}
          >
            RED -
          </button>
        </div>
        <div className="flex md:flex-row md:space-x-2 md:space-y-0 justify-center items-center">
          <button
            type="button"
            class="rounded-md border border-green-500 px-3 py-2 text-sm font-semibold text-green-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={() => {
              setGreen((green + 1) % 256);
            }}
          >
            GREEN +
          </button>
          <input
            type="range"
            min={0}
            max={255}
            onChange={(e) => {
              setGreen(parseInt(e.target.value));
            }}
            value={green}
            className="appearance-none mx-4 w-14 h-2 bg-gray-400 rounded-full outline-none thumb-white"
            style={{ background: "rgb(34, 197, 94)" }}
          />
          <button
            type="button"
            class="rounded-md border border-green-500 px-3 py-2 text-sm font-semibold text-green-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={() => {
              setGreen(green == 0 ? 255 : green - 1);
            }}
          >
            GREEN -
          </button>
        </div>
        <div className="flex md:flex-row md:space-x-2 md:space-y-0 justify-center items-center">
          <button
            type="button"
            class="rounded-md border border-blue-500 px-3 py-2 text-sm font-semibold text-blue-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={() => {
              setBlue((blue + 1) % 256);
            }}
          >
            BLUE +
          </button>
          <input
            type="range"
            min={0}
            max={255}
            onChange={(e) => {
              setBlue(parseInt(e.target.value));
            }}
            value={blue}
            className="appearance-none mx-4 w-14 h-2 bg-gray-400 rounded-full outline-none thumb-white"
            style={{ background: "rgb(59, 130, 246)" }}
          />
          <button
            type="button"
            class="rounded-md border border-blue-500 px-3 py-2 text-sm font-semibold text-blue-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={() => {
              setBlue(blue == 0 ? 255 : blue - 1);
            }}
          >
            BLUE -
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          className="bg-transparent backdrop-blur-sm border-2 border-white px-4 py-2 rounded-lg shadow-lg hover:bg-orange-500 hover:text-white ease-in-out duration-500"
          onClick={copyColor}
        >
          {red} {green} {blue}
        </button>
      </div>
      <div
        className="mx-auto mt-6 h-96 w-9/12 rounded-xl border-2 flex justify-center items-center"
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, 0.2)",
        }}
      ></div>
    </div>
  );
}

export default App;
