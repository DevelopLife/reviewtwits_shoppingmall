import "./App.css";

import ProductPage from "./pages/product";

function App() {
  return (
    <div className="App">
      <Route to="/product" element={<ProductPage productId={123} />} />
    </div>
  );
}

const Route = ({to, element}) => {
  // const [url, setUrl] = useState('')
  const currentURL = window.location.href;
  const currentPathname = currentURL.split("/").at(-1);

  //localhost:3001/service?product=product

  // if (to === "/" + currentPathname) {
  //   return <>{element}</>;
  // }

  console.log(window.location.search);

  return <>{element}</>;
};

export default App;
