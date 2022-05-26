import { FunctionComponent, useState} from "react";
import { useAddress, useMetamask, useNFTDrop } from "@thirdweb-dev/react";
import CLaimNFT from './TestMint';

  function Mint () {
  const [count, setCount] = useState(0);
 
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count !== 0) setCount(count - 1);
  };

  return (
    <div className=" items-center relative mb-[150px] flex justify-around  space-y-[90px] flex-wrap px-5">
      <div className="max-w-2xl relative">
        <div className="flex flex-col  bg-white bg-opacity-70 rounded-xl  px-[24px] pt-[24px] pb-[40px] relative">
          <div className="relative">
            <img src="./img/nft4.png" alt="nft-gif" className="rounded-xl" />
          </div>
          <div className="py-4"></div>
        </div>
        <div className="absolute pl-[25px] ">
          <div className="relative flex justify-evenly w-[400px] h-[100px] bg-white rounded-xl bottom-[40px] pt-[23px]">
            <div className="">
              <p className="pl-5 font-Poppins text-[14px] font-[500] text-[#888888]">Status</p>
              <img className="inline pb-2" alt="" src="mint/open.svg" />
              <p className="inline font-Poppins text-[25px] font-[600] text-[#2E2E2E]"> Sold out</p>
            </div>
            <img className="pb-[25px]" alt="" src="mint/line.png" />
            <div className="">
              <p className="font-Poppins text-[14px] font-[500] text-[#888888]">Available</p>
              <p className="font-Poppins text-[25px] font-[600] text-[#2E2E2E]">1/1</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-[750px] bg-white bg-opacity-70 rounded-xl p-4 relative">
        <div className="relative">
          <div className="relative pt-[36px] pl-[46px] pr-[60px]">
            <p className="font-Poppins text-[41px] font-[600] pb-[14px] ">Medal of Alcoriz</p>
            <p className="font-Poppins text-[16px] font-[400] text-[#52575C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              tincidunt purus sit amet mauris semper, non pulvinar libero
              placerat. Vivamus ac dignissim sapien. Cras vitae porta velit, vitae
              congue mauris. Sed ut gravida sem. Aenean vestibulum feugiat erat,
              eu iaculis ante rhoncus tempus. Morbi interdum porttitor ipsum ac
              consequat. Aenean mauris augue, pellentesque ullamcorper neque eu,
              tempus molestie erat. Vivamus imperdiet tellus malesuada ornare
              vulputate. Nullam tempus arcu at egestas bibendum. Ut ornare
              tincidunt consectetur.
            </p>
          </div>
          <div className="relative flex justify-around items-end mt-[40px] mb-[45px]">
            <div className="relative md:left-[-36px]">
              <div className="bg-white  rounded-2xl flex justify-around">
                <button onClick={decrementCount}>
                  <img className="inline" alt="" src="mint/minus.svg" />
                </button>
                <p className="inline px-[44px] mx-auto text-[32px]  font-[600]">{count}</p>
                <button onClick={incrementCount}>
                  <img className="inline" alt="" src="mint/plus.svg" />
                </button>
              </div>
            </div>
            <div>
              <div className="pb-[35px]">
                <p className="inline font-Poppins text-[24px] font-[500] text-[#52575C]">Price:  </p>
                <img className="inline pb-[2px]" alt="" src="mint/usdc.svg" />
                <p className="inline font-Poppins text-[18px] font-[500] text-[#25282B]"> 10.50 USDC</p>
              </div>
              <button className="text-white bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-[83px] py-[15px] rounded-lg text-xl font-Montserrat font-[600] flex items-center" >
              <CLaimNFT />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mint;

// onClick={handler}
{/* <Modal
closeButton
blur
aria-labelledby="modal-title"
open={visible}
onClose={closeHandler}
width="648px"
>
<Modal.Header>
  <Text id="modal-title" size={18}>
  Medal of{" "}
    <Text b size={18}>
    Alcoriz
    </Text>
  </Text>
</Modal.Header>
<Modal.Body
>
  <iframe
    src="https://gateway.ipfscdn.io/ipfs/QmXPGx4TkhvwLZGp2BDBab3VRw7y7JkMwsXkLeDgeT1M6N/nft-drop.html?contract=0x355ab88dcd28908B75B502E56B3FD6C0152783f5&chainId=80001"
    width="600px"
    height="600px"
  ></iframe>
</Modal.Body>
<Modal.Footer>
  <Button auto flat color="error" onClick={closeHandler}>
    Close
  </Button>
</Modal.Footer>
</Modal> */}