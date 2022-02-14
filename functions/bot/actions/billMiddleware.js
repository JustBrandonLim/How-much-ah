module.exports = async (ctx, next) => {
  if (ctx.updateType === "message" && ctx.updateSubType === "text") {
    const text = ctx.update.message.toLowerCase();
    if (text.startsWith("/")) {
      const match = text.match(/^\/([^\s]+)\s?(.+)?/);
      let args = [];
      let command;
      if (match !== null) {
        if (match[1]) {
          command = match[1];
        }
        if (match[2]) {
          args = match[2].split(" ");
        }
      }

      console.log(ctx.update.message);

      ctx.state = {
        raw: text,
        command,
        args,
      };
    }
  }

  return next();
};
