import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";

const CheckoutForm = () => {
  const [buyer, setBuyer] = useState({ name: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "orders"), {
      buyer,
      items: [],
      date: new Date(),
      total: 0,
    });
    console.log("Order ID: ", docRef.id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" onChange={(e) => setBuyer({ ...buyer, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setBuyer({ ...buyer, email: e.target.value })} />
      <button type="submit">Finalizar compra</button>
    </form>
  );
};

export default CheckoutForm;
