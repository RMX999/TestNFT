import { useMoralis } from "react-moralis";

export default function NotConnected() {

    const { authenticate, isAuthenticated, user } = useMoralis();

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate()
          .then(function (user) {
            console.log(user!.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
}