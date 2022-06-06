import Navbar from "./Navbar";
import Basket from "./Basket";
import { useGlobalContext } from "./context";

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className="container">
      <Navbar />
      <Basket />
    </div>
  )
};

export default App;