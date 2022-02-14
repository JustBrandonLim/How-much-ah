module.exports = async (ctx) => {
  console.log(ctx.chat.username + " used /start!");
  return ctx.reply("Hello there! Nice to meet you! I am How much ah? 🥰");
};
