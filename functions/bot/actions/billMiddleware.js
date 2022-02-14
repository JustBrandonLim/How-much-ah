module.exports = async (ctx, next) => {
  try {
    if (ctx.updateType === "message") {
      const text = ctx.update.message.text.toLowerCase();
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

        ctx.state = {
          raw: text,
          command,
          args,
        };
      }
    }
  } catch (error) {
    console.log(error);
  }

  return next();
};
