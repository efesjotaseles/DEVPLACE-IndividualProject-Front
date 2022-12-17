import "../node_modules/@picocss/pico/css/pico.min.css";
import Meow from "./components/Meow";
import Navbar from "./components/Navbar";
import Feed from "./Feed";
import Home from "./Home";
import RegisterForm from "./RegisterForm";

function App() {
  const timeOptions = {
    weekday: "short",
    month: "numeric",
    year: "numeric",
    day: "numeric",
  };
  const sampleMeows = [
    {
      sender: "Un gato",
      content: "miau miau miau",
      date: new Date(Date.now()).toString(),
    },
    {
      sender: "Otro gato",
      content: "miau miau",
      date: new Date(Date.now()).toString(),
    },
  ];

  return (
    <>
    <Navbar/>
      <div className="grid" style={{marginTop: "15vh"}} >
        <div></div>
        <div>
          <Feed meows={sampleMeows} />
        </div>
        <div></div>
      </div>
      <Home />
      <RegisterForm />
    </>
  );
}

export default App;
