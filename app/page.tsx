import Showcase from "./components/home-components/showcase";
import Todays from "./components/home-components/todays";
import Login from "./components/login";

const Home = () => {
  return (
    <div>
      <Showcase />
      <Todays />
      <Login/>
    </div>
  );
};

export default Home;
