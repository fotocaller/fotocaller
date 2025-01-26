import Header from "../components/Header";
import HomeText from "../components/HomeText";
import Video from "../components/Video";

const App = () => {
  return (
    <div className="p-2">
      <img
        className="z-[-1] w-full h-full object-cover absolute top-0 left-0 opacity-[0.05]"
        src="/assets/bg.svg"
        alt=""
      />
      <Header />
      <HomeText />
      <Video />
    </div>
  );
};

export default App;
