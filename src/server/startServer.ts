import createDebug from "debug";
import app from "./app.js";
import { styleText } from "node:util";

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
