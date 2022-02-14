module.exports = async (ctx) => {
  console.log(ctx.chat.username + " used " + ctx.state.command.raw);
  const perPersonBill = args[0] / args[1];
  return ctx.reply("Each person would have to pay $" + perPersonBill.toFixed(2));
};
