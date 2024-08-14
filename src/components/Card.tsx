function Card() {
  const cardStyle = {
    width: "350px"
  };
  return (
    <div className="card" style={cardStyle}>
      {/* con style={} en react '{}'se evalua el objeto */}
      <div className="card-body">
        <CardBody />
      </div>
    </div>
  );
}
export default Card;

export function CardBody() {
  return (
    // <> es un Fragment
    <>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </>
  );
}
