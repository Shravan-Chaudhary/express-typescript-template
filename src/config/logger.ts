import winston from "winston";
import { Config } from ".";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { serviceName: "service-name" },
  transports: [
    new winston.transports.File({
      dirname: "logs",
      filename: "combined.log",
      level: "info",
      silent: Config.NODE_ENV === "test",
    }),

    new winston.transports.File({
      dirname: "logs",
      filename: "logs/error.log",
      level: "error",
    }),

    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }),
  ],
});

export default logger;
