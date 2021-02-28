import "./styles.css";
import showImage from "../Components/showImage";
import WithGrayScale from "../Components/withGrayScale";
const Result = WithGrayScale(showImage);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Result />
      <Result options={0} />
    </div>
  );
}
