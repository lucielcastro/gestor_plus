interface HackClubReply {
  salve: string;
}

export const sendToAI = async (ctx: string) => {
  const body = {
    messages: [
      { role: "user", context: ctx },
      { role: "system", context: "passar contexto pra IA" },
    ],
  };

  let reply: Response;
  try {
    reply = await fetch("https://ai.hackclub.com/chat/completions", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
  if (!reply.ok) {
    console.log(await reply.body?.json());
    throw new Error("Error to make request to AI");
  }

  const data = await reply.json();
  console.log(data);
};
