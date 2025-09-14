type Choice = {
  index: number;
  message: { role: string; content: string };
  finish_reason: string;
};

interface HackClubReply {
  id: string;
  model: string;
  choices: Choice[];
}

export const sendToAI = async (ctx: string) => {
  const body = {
    messages: [{ role: "user", content: ctx }],
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
  if (!reply.ok) throw new Error("Error to make request to AI");

  //@ts-expect-error
  const data: HackClubReply = await reply.json();
  return data.choices.shift();
};
