import "./App.css";

import ProductPage from "./pages/product";

function App() {
  return (
    <>
      <head>
        <meta
          property="og:image"
          content="//thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/290346317532916-57e0ca03-9d04-4aed-b5ec-19442d97c7ac.png"
        />
        <meta
          property="og:title"
          content="코멧 사선컷팅 테이프 크리너 핸들 + 거치대 세트"
        ></meta>
      </head>
      <div className="App">
        <ProductPage />
      </div>
    </>
  );
}

export default App;
