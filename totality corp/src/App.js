import "./styles.css";
import Nfts from "./component/Nfts";
import Trending from "./component/Trending";
import Explore from "./component/Explore";

import Accord from "./component/Accord";

import Footer from "./component/Footer";
export default function App() {
  return (
    <div>
      <Trending />
      <Explore />
      <Nfts />

      <Accord />

      <Footer />
    </div>
  );
}
