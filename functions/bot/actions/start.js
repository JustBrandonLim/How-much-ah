module.exports = async (ctx) => {
  console.log(ctx.chat.username + " used /start!");
  return ctx.reply("Hello there! Nice to meet you! I am How much ah? You can use me to help split your bills with your friends!");
};
