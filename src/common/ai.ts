interface HackClubReply {
  salve: string;
}

export const sendToAI = async (ctx: string) => {
  const data = {
    messages: [
      { role: "user", context: ctx },
      { role: "system", context: "passar contexto pra IA" },
    ],
  };

  let reply: Response;
  try {
    reply = await fetch("https://ai.hackclub.com/chat/completions", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
  if (!reply.ok) throw new Error("Error to make request to AI");
};
