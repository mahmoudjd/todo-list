import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
