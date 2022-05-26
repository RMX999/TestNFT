import { useWeb3Auth } from "../../services/web3auth";
import { WALLET_ADAPTERS } from "@web3auth/base";

const Main = () => {
  const { provider, login, logout, getUserInfo, getAccounts, getBalance, signMessage, signTransaction, signAndSendTransaction, web3Auth, chain } = useWeb3Auth();

  const loggedInView = (
    <>
      {/* <button onClick={getUserInfo} className={styles.card}>
        Get User Info
      </button>
      <button onClick={getAccounts} className={styles.card}>
        Get Accounts
      </button>
      <button onClick={getBalance} className={styles.card}>
        Get Balance
      </button>
      <button onClick={signMessage} className={styles.card}>
        Sign Message
      </button>
      {
        (web3Auth?.connectedAdapterName === WALLET_ADAPTERS.OPENLOGIN || chain === "solana") &&
        (<button onClick={signTransaction} className={styles.card}>
          Sign Transaction
      </button>)
      } */}
      
      {/* <button onClick={signAndSendTransaction} className={styles.card}>
        Sign and Send Transaction
      </button> */}
      
      <button onClick={logout}>
        Log Out
      </button>

      {/* <div className={styles.console} id="console">
        <p className={styles.code}></p>
      </div> */}
    </>
  );

  const unloggedInView = (
    <button onClick={login}>
      Login
    </button>
  );

  return (
    <div className="text-white bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-8 py-2 rounded-lg text-xl font-bold flex items-center">
      {provider ? loggedInView : unloggedInView}
      </div>
  );
};


export default Main;
