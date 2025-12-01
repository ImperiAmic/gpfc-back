import createDebug from "debug";
import { styleText } from "node:util";
import app from "./app.js";

const debug = createDebug("godzillas:server:start");

const startServer = (port: number) => {
  app.listen(port, () => {
    debug("🟢👂");
    debug("Server listening at...");
    debug(styleText(["bold", "green"], `http://localhost:${port}`));
    debug("🟢👂");
  });
};

export default startServer;
