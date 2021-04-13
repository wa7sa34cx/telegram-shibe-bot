import "https://deno.land/x/dotenv/load.ts";
import { getShibes } from "./shibes_api.ts";
import { Bot } from "./deps.ts";

// console.log(await getShibes());

// console.log(Deno.env.get("BOT_TOKEN"));
const token = Deno.env.get("BOT_TOKEN") as string;

const bot = new Bot(token);

bot.on("text", async (ctx) => {
  const text = ctx.message?.text;

  if (text === "/shibe") {
    await ctx.reply(await getShibes());
  }
});

bot.launch();
