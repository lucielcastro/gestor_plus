import { sendToAI } from "src/common/ai";

const ai = await sendToAI(
  "say hi to me in French, only sai the 'hi', dont say anything also this",
);
console.log(ai);
