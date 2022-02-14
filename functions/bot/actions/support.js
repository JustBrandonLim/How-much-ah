module.exports = async (ctx) => {
  console.log(ctx.chat.username + " used /support!");
  return ctx.reply("Hello there! I am created by JustBrandonLim. You can support him at https://ko-fi.com/justbrandonlim/! More features of the bot will be rolled out periodically!");
};
