module.exports = async (ctx) => {
  console.log(ctx.chat.username + " used /about!");
  return ctx.reply("Hello there! I am created by JustBrandonLim @ https://justbrandonlim.com! More features will be rolled out periodically!");
};
