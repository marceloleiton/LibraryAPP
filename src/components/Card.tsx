// Typescript -> interfaz es la forma
// que queremos que tenga el parametro props
// de nuestro componente Card

import { ReactNode } from "react";

interface CardProps {
  // propiedad body tipo string
  //   body: string;
  children: ReactNode; //Con ReactNode podemos pasar un componente
}
function Card(props: CardProps) {
  // Object destructuring
  //   const { body } = props;
  const { children } = props;

  const cardStyle = {
    width: "350px"
  };
  return (
    <div className="card" style={cardStyle}>
      {/* con style={} en react '{}'se evalua el objeto */}
      <div className="card-body">
        {/* <CardBody /> */}
        {/* {body} */}
        {children}
      </div>
    </div>
  );
}
export default Card;

interface CardBodyProps {
  title?: string;
  text?: string;
}
export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    // <> es un Fragment
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      {/* <a href="#" className="btn btn-primary">
        Go somewhere
      </a> */}
    </>
  );
}
