import "../node_modules/@picocss/pico/css/pico.min.css";
import Meow from "./components/Meow";
import Navbar from "./components/Navbar";
import Feed from "./Feed";
import HomeUnsigned from "./HomeUnsigned";
import RegisterForm from "./RegisterForm";

function App() {
  return (
    <>
      <Navbar />
      <div className="grid" style={{ marginTop: "15vh" }}>
        <div>
          <HomeUnsigned />
        </div>
      </div>
    </>
  );
}

export default App;
