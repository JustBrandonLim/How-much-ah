module.exports = async (ctx) => {
  console.log(ctx.chat.username + " used " + ctx.state.raw);
  try {
    const totalAmount = ctx.state.args[0].replace("$", "");
    const totalPax = ctx.state.args[1];
    const perPersonBill = parseInt(totalAmount) / parseInt(totalPax);
    return ctx.reply("Each person would have to pay $" + perPersonBill.toFixed(2));
  } catch (error) {
    return ctx.reply("Oops! Something went wrong!");
  }
};
