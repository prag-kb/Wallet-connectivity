// import './App.css';
import { useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";

function App() {
  const [logged, setIsLogged] = useState(false);
  const [accountDetails, setAccountDetails] = useState(null);
  const [balance, setBalance] = useState("");
  const forwarderOrigin = "http://localhost:3000";

  const handleLogin = async () => {
    console.log('window.solana', window.solana);
  
    if (window.solana && window.solana.isPhantom) {
      if (window.solana.isConnected) {
        console.log("Already connected to Phantom");
        return;
      }
      console.log("Phantom wallet available");
  
      try {
        const response = await window.solana.connect();
        console.log("response", response);
        setIsLogged(true);
        setAccountDetails(response.publicKey.toString());
      } catch (err) {
        console.error("Error connecting to Phantom:", err);
      }
    } else {
      alert("Please install Phantom Wallet");
    }
  };

  const handleBalance = async () => {
    if (!accountDetails) return;

    const connection = new Connection("https://api.mainnet-beta.solana.com");
    const publicKey = new PublicKey(accountDetails);

    try {
      const solBalance = await connection.getBalance(publicKey);
      const balanceInSOL = solBalance / 1e9; // Convert from lamports to SOL
      setBalance(balanceInSOL.toFixed(2));
    } catch (err) {
      console.error("Error fetching balance:", err);
    }
  };

  const handleLogOut = () => {
    setIsLogged(false);
    setAccountDetails(null);
    setBalance("");
  
    window.location.reload();
  };

  return (
    <div className="App">
      {!logged ? (
        <div>
          <div>Log in with Phantom Wallet</div>
          <button onClick={handleLogin}>Log In</button>
        </div>
      ) : (
        <div>
          <div>Logged in {accountDetails}</div>
          <button onClick={handleLogOut}>Log out</button>
          <button onClick={handleBalance}>Fetch Balance</button>

          <div>Balance is {balance} SOL</div>
        </div>
      )}
    </div>
  );
}

export default App;

