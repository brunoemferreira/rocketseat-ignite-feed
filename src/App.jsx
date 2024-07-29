import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.css";

import "./global.css";


function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
          <h1>Hello World!</h1>
        </main>
      </div>
    </>
  );
}

export default App;
