import './Index.css';
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <footer>
        <ul>
          <li>lista foot</li>
        </ul>
        <div>footer bottom</div>
      </footer>
    </>
  );
}

