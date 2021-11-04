import { useState } from "react";
import { Modal } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartAction";
import addAudio from "../../ascets/addAudio.wav";

import "./Pizza.css";
const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const dispatch = useDispatch();

  const audio = new Audio(addAudio);

  const addtoCart = () => {
    const newPizza = {
      category: pizza.category,
      createdAt: pizza.createdAt,
      description: pizza.description,
      pizza: pizza.image,
      name: pizza.name,
      prices: pizza.prices,
      updatedAt: pizza.updatedAt,
      varients: pizza.varients,
      id: pizza._id,
    };
    dispatch(addToCart(newPizza, quantity, varient));
    audio.play();
  };

  return (
    <div className="pizza">
      <h4>{pizza.name}</h4>
      <img
        className="pizza__image"
        src={pizza.image}
        alt={pizza.name}
        onClick={handleShow}
      />
      <div className="pizza__descrip__top">
        <div className="varients">
          <p>Varients</p>
          <select value={varient} onChange={(e) => setVarient(e.target.value)}>
            {pizza.varients.map((v) => (
              <option value={v}>{v}</option>
            ))}
          </select>
        </div>
        <div className="quantity">
          <p>Quantity</p>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => (
              <option value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="pizza__descrip__bottom">
        <p>Price: ₹ {pizza.prices[0][varient] * quantity}</p>
        <button onClick={addtoCart}>Add To Cart</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        className="pizza__modal"
      >
        <Modal.Header>
          <Modal.Title className="modal__title">{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal__body">
          <img src={pizza.image} alt={pizza.name} />
          <p>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="modal__button" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Pizza;
