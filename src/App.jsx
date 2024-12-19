import "./App.css";
import CircleChart from "./components/Circles/CircleChart";
import CircleWithFourPieces from "./components/Circles/CircleWithFourPieces";
import SixteenPices from "./components/Circles/SixteenPices";
import Captcha from "./components/main_components/Captcha";
import Demo from "./components/SnowEffect/Demo";
import SnowEffect from "./components/SnowEffect/SnowEffect";

function App() {
  const data = [
    { label: "Surya", color: "#FF5F5F" },
    { label: "Sunil", color: "#FFC93C" },
    { label: "Prashanth", color: "#5D9C59" },
    { label: "Shiva Kumar", color: "#6A67CE" },
    { label: "Pardhu", color: "#3F8FD8" },
    { label: "hello", color: "#3F8FD8" },
    { label: "Bye", color: "#3F8FD8" },
    { label: "Welcome", color: "#3F8FD8" },
  ];
  const dataFour = [
    { label: "Red", color: "#FF0000" },
    { label: "Green", color: "#00FF00" },
    { label: "Blue", color: "#0000FF" },
    { label: "Yellow", color: "#FFFF00" },
  ];
  return (
    <>
      {/* <Demo /> */}
      {/* <div className="relative">
        <SnowEffect />
        <div className="bg-[#25c5ff81]">
          <Captcha />
        </div>
      </div> */}
      {/* <SixteenPices /> */}
      {/* <CircleChart data={data} centerLabel="Shiva Kumar" /> */}
      <CircleWithFourPieces
        InnerData={dataFour}
        OuterData={data}
        centerLabel="Center"
      />
    </>
  );
}

export default App;
