import app from "./app";
import { Config } from "./config";

const startServer = () => {
  const PORT = Config.PORT;

  try {
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Server listening on port: ${PORT}`);
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  }
};

startServer();
