import Panel from "./components/panel/panel";
import Card from "./components/Card/Card";
import styles from "./App";

const App = () => {
  return (
    <div className={styles.app}>
      <Panel />
      <Card />
    </div>
  );
};

export default App;
