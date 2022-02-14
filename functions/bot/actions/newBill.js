module.exports = async (ctx) => {
  console.log(ctx.chat.username + " used " + ctx.state.raw);
  try {
    const perPersonBill = ctx.state.args[0] / ctx.state.args[1];
    return ctx.reply("Each person would have to pay $" + perPersonBill.toFixed(2));
  } catch (error) {
    return ctx.reply("Oops! Something went wrong!");
  }
};
