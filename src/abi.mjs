const ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  { inputs: [], name: "getMessage", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
  { inputs: [{ internalType: "string", name: "newMessage", type: "string" }], name: "updateMessage", outputs: [], stateMutability: "nonpayable", type: "function" },
];

export default ABI;
