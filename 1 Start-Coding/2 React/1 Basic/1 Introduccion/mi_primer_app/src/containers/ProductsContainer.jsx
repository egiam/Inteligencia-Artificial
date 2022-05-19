import CardComponent from "../component/CardComponent";

const ProductsContainer = () => {
  let resultado = 3300 + 2200;
  return (
    <div className="container">
      <div className="row">
        <CardComponent
          title={"Hola mundo"}
          img={
            "https://www.marthadebayle.com/wp-content/uploads/2021/07/Dia-mundial-del-perro.jpg"
          }
          resultado={resultado}
        />
        <CardComponent
          title={"Maiameee"}
          img={
            "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/purina-reconocer-a-un-perro-feliz.jpg?itok=aX1bmygl"
          }
          resultado={resultado}
        />
        <CardComponent
          title={"Hamaica"}
          img={
            "https://sumedico.blob.core.windows.net/images/2021/04/14/posturasqueindicanqueunperroesfeliz-focus-0.04-0.2-640-384.jpg"
          }
          resultado={resultado}
        />
        <CardComponent
          title={"Sebastian"}
          img={
            "https://www.dogalize.com/wp-content/uploads/2015/12/16007c13-3e81-4b65-acba-d347435c764d.jpg"
          }
          resultado={resultado}
        />
        <CardComponent
          title={"Locos por el amor"}
          img={
            "https://www.mdzol.com/u/fotografias/m/2021/6/2/f608x342-1064707_1094430_15.jpg"
          }
          resultado={resultado}
        />
      </div>
    </div>
  );
};

export default ProductsContainer;
