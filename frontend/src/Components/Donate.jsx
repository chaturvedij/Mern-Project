import React,{useState} from 'react'

const Donate = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [amount,setAmount] = useState("");
  const [disableBtn,setDisablebtn] = useState(false)
  return (
    <section className="donate">
      <form>
        <div>
          <img src="/logo.png" alt="logo"/>
        </div>
        <div>
          <label>Show your love for Poors </label>
          <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter Donation Amount (USD)"/>
        </div>
        <input type='text' value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Your Name" />
        <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Address" />
        <input type='text' placeholder='Message' value={amount} onChange={(e)=> setMessage(e.target.value)}  />
        <button type="submit" className="btn" disabled={disableBtn}>Donate {amount ? `$${amount}`:"$0"}</button>
      </form>
    </section>
  )
}

export default Donate
