import { useState } from 'react'
// import './App.css'

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  return (
    <>
      <Bill bill={bill} setBill={setBill}/>
      <Service setTip={setTip} />
      <ServiceFriend setFriendTip={setFriendTip}/>
      <Total bill={bill} tip={tip} friendTip={friendTip}/>
    </>
  )
}

function Bill({ bill, setBill }) {
  return (
    <>
      <p>How much was the bill?</p>
      <input type="number" onChange={(e) => setBill(Number(e.target.value))}/>
    </>
  );
}

function Service({ setTip }) {
  return (
    <>
      <p>How did you like the service?</p>
      <select onChange={(e) => setTip(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolute amazing! (20%)</option>
      </select>
    </>
  );
}

function ServiceFriend({ setFriendTip }) {
  return (
    <>
      <p>How did your friend like the service?</p>
      <select onChange={(e) => setFriendTip(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolute amazing! (20%)</option>
      </select>
    </>
  );
}

function Total({ bill, tip, friendTip }) {
  const totalTip = (tip / 100) + (friendTip / 100) / 2;
  const average = Math.round(totalTip * bill);
  const total = bill + average;
  console.log(totalTip);

  return (
    <>
      <p>You pay {total} (${bill} + ${average} tip)</p>
      <button>Reset</button>
    </>
  );
}