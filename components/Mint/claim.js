// import React from "react";
// import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";


// export default function App() {
//   const [visible, setVisible] = React.useState(false);
//   const handler = () => setVisible(true);
//   const closeHandler = () => {
//     setVisible(false);
//     console.log("closed");
//   };
//   return (
//     <div>
//       <Button onClick={handler}>
//         Mint
//       </Button>
//       <Modal
//         closeButton
//         blur
//         aria-labelledby="modal-title"
//         open={visible}
//         onClose={closeHandler}
//         width="648px"
//       >
//         <Modal.Header>
//           <Text id="modal-title" size={18}>
//             Mint
//             <Text b size={18}>
//               NFT
//             </Text>
//           </Text>
//         </Modal.Header>
//         <Modal.Body 
//         >
//           <iframe
//             src="https://gateway.ipfscdn.io/ipfs/QmXPGx4TkhvwLZGp2BDBab3VRw7y7JkMwsXkLeDgeT1M6N/nft-drop.html?contract=0x355ab88dcd28908B75B502E56B3FD6C0152783f5&chainId=80001"
//             width="600px"
//             height="600px"
//           ></iframe>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button auto flat color="error" onClick={closeHandler}>
//             Close
//           </Button>
//           <Button auto onClick={closeHandler}>
//             Sign in
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
