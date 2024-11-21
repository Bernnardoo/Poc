"use client";
import React, { useState } from "react";
import styles from "./RoomSeat.module.css";
import Seat from "./Seat";
import Button from "./Button";

export default function Room({ data }) {
  const defaultPrice = data.preco;
  const [selectedSeats, setSelectedSeats] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const renderSeats = (rows, seats) => {
    return [...Array(rows)].map((_, rowIndex) => (
      <div className={styles.roomRow} key={rowIndex}>
        {[...Array(seats)].map((_, seatIndex) => {
          const seatKey = `${rowIndex}-${seatIndex}`;
          const seatStatus = selectedSeats[seatKey] || {};
          return (
            <Seat
              key={seatIndex}
              purchased={seatStatus.purchased || false}
              selected={seatStatus.selected || false}
              onSelect={(isSelected) =>
                handleSeatSelect(rowIndex, seatIndex, isSelected)
              }
              number={`${rowIndex}${seatIndex}`}
            />
          );
        })}
      </div>
    ));
  };

  const handleSeatSelect = (rowIndex,seatIndex,isSelected) => {
    const seatKey = `${rowIndex}-${seatIndex}`;
    const currentSeat = selectedSeats[seatKey] || {};
    if (currentSeat.purchased) {
      return;
    }

    setSelectedSeats((prevState) => ({
      ...prevState,
      [seatKey]: {
        ...prevState[seatKey],
        selected: isSelected,
        available: !isSelected,
      },
    }));

    setTotalPrice((prevPrice) =>
      isSelected ? prevPrice + defaultPrice : prevPrice - defaultPrice
    );
  };

  const buySeat = () => {
    const selectedSeatKeys = Object.entries(selectedSeats)
      .filter(([_, status]) => status.selected)
      .map(([key]) => key);

    if (selectedSeatKeys.length === 0) {
      alert("Selecione um assento");
      return;
    }

    setSelectedSeats((prevState) => {
      const newState = { ...prevState };
      selectedSeatKeys.forEach((key) => {
        newState[key] = {
          selected: false,
          purchased: true,
        };
      });
      console.log(newState);
      return newState;
    });

    alert("Compra realizada com sucesso!");
    setTotalPrice(0);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        alignSelf: "center",
      }}
    >
      {renderSeats(6, 10)}

      <div className={styles.screen}>Tela</div>

      <div className={styles.caption}>
        <div
          style={{
            backgroundColor: "red",
            height: "10px",
            width: "10px",
            marginLeft: "100px",
          }}
        ></div>
        <label style={{ marginLeft: "5px", marginRight: "15px" }}>
          Selecionado
        </label>

        <div
          style={{
            backgroundColor: "gray",
            height: "10px",
            width: "10px",
          }}
        ></div>
        <label style={{ marginLeft: "5px", marginRight: "15px" }}>
          Indisponível
        </label>

        <div className={styles.availableCaption}></div>
        <label style={{ marginLeft: "5px" }}>Disponível</label>
      </div>

      <Button func={buySeat}>Comprar (R$ {totalPrice})</Button>
    </div>
  );
}
