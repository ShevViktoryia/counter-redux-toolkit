import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Counter } from "./components/Counter";
import { ControlCounter } from "./components/ControlCounter";
import { RootState, setMinMax } from "./app/store";

function App() {
  const dispatch = useDispatch();
  const { settings } = useSelector((state: RootState) => state.counter);

  useEffect(() => {
    const minValue = localStorage.getItem("min value");
    const maxValue = localStorage.getItem("max value");
    if (minValue && maxValue) {
      dispatch(setMinMax(JSON.parse(minValue), JSON.parse(maxValue)));
    }
  }, [dispatch]);

  // const increaseCountHandler = () => dispatch(increment());
  // const resetCountHandler = () => dispatch(reset());
  // const changeSettingsMode = () => dispatch(toggleSettings());

  // const setMinMaxHandler = (newMin: number, newMax: number) => {
  //   dispatch(setMinMax(newMin, newMax));
  //   localStorage.setItem("min value", JSON.stringify(newMin));
  //   localStorage.setItem("max value", JSON.stringify(newMax));
  // };

  return (
    <div className="App">{settings ? <ControlCounter /> : <Counter />}</div>
  );
}

export default App;
