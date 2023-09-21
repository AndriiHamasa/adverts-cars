import FirstAnimatedComponent from "../../shared/components/FirstAnimatedComponent/FirstAnimatedComponent";
import css from "./HomePage.module.css"

const HomePage = () => {
  return (
    <>
      <h3>HomePage</h3>
      <FirstAnimatedComponent />
      <div className={css.hero}></div>
    </>
  );
};

export default HomePage;
