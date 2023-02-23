import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
function Home() {
  const [agentId, setAgentId] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [isLogged, setIsLogged] = useState(false);
  
  const handleSubmit = () => {
    if (agentId === "codybanks" && password === "qwerty123") {
      setIsLogged(true);
    }
  };
  if (!isLogged) {
    return (
      <div className={styles.container}>
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
        <h1>CIA LOGIN</h1>
        <div className={styles.inputContainer}>
          <span>AGENT ID</span>
          <input
            type="text"
            id="agentId"
            onChange={(e) => setAgentId(e.target.value)}
            value={agentId}
          />
        </div>
        <div className={styles.inputContainer}>
          <span>PASSWORD</span>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button id="login" onClick={() => handleSubmit()}>
          LOGIN
        </button>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
        <h2>Welcome, agent Cody Banks.</h2>
      </div>
    );
  }
}
export default Home;