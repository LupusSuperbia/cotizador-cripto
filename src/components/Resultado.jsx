import React from "react";
import styled from "@emotion/styled";

const Respuesta = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;

  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 30px;

`;

const Imagen = styled.img`
display: block;
width: 120px;
`

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 26px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, LASTUPDATE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL } =
    resultado;
  return (
    <Respuesta>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="img cripto" />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio más alto del día: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio más bajo del día:<span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Varación últimas 24horas:<span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Ultima Actualizacion:<span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Respuesta>
  );
};

export default Resultado;
