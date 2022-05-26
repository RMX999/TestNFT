import { useWeb3Auth } from "../../services/web3auth";
import Link from "next/link";

export default function NavDropDown() {
  const { logout } = useWeb3Auth();
  return (
    <div className="dropdown dropdown-end pt-1">
      <button
        tabIndex={0}
        className="w-[125px] h-[32px] text-white bg-gradient-to-r from-[#EB3349] to-[#F45C43] rounded-md"
      >
        <img src="../dropDownIcons/user.png" alt="title" className="inline" />
        <p className="inline"> Hi Susan</p>
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-white rounded-box w-[191px] shadow-lg"
      >
        <li>
          <Link href="/profile">
            <button>
              <img
                src="../dropDownIcons/profile.png"
                alt="title"
                className="inline pl-2"
              />
              <p className="inline pl-2 font-Poppins font-[600] text-[16px]">
                Profile
              </p>
            </button>
          </Link>
        </li>
        <li>
          <button>
            <img
              src="../dropDownIcons/fav.png"
              alt="title"
              className="inline pl-2"
            />
            <p className="inline pl-2 font-Poppins font-[600] text-[16px]">
              Favourites
            </p>
          </button>
        </li>
        <li>
          <button>
            <img
              src="../dropDownIcons/wallet.png"
              alt="title"
              className="inline pl-2"
            />
            <p className="inline pl-2 font-Poppins font-[600] text-[16px]">
              Wallet
            </p>
          </button>
        </li>
        <li>
          <button onClick={logout}>
            <img
              src="../dropDownIcons/logOut.png"
              alt="title"
              className="inline pl-2"
            />
            <p className="inline pl-2 font-Poppins font-[600] text-[16px]">
              Log Out
            </p>
          </button>
        </li>
      </ul>
    </div>
  );
}
