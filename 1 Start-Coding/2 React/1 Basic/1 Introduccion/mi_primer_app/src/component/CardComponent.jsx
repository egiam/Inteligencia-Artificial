const CardComponent = ({ title, img, resultado }) => {
  const carrito = [];

  function AgregarAlCarrito(event, name) {
    carrito.push(name);
  }

  return (
    <div className="card col-4">
      {carrito.length}
      <img src={img} classNameName="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          className="btn btn-primary"
          onClick={(event) => {
            AgregarAlCarrito(event, "Toto");
          }}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
