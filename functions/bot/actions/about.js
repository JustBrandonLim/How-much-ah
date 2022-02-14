module.exports = async (ctx) => {
  console.log(ctx.chat.username + " used /about!");
  return ctx.reply("Hello there! I am created by JustBrandonLim. You can check him out at https://justbrandonlim.com! More features of the bot will be rolled out periodically!");
};
