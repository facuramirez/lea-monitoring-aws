import { createLogger, format, transports } from "winston";

export const logger = createLogger({
  format: format.combine(
    format((info) => {
      info.level = `${info.level.toUpperCase()}:`;
      return info;
    })(),
    format.simple(),
    format.timestamp(),
    format.colorize(),
    format.printf(
      (info) =>
        `[${new Date(info.timestamp).toLocaleTimeString()}] ${info.level} ${
          info.message
        }`
    )
  ),
  transports: [
    // new transports.File({
    //   maxsize: 5120000,
    //   maxFiles: 5,
    //   filename: `${__dirname}/logs/log-api.log`,
    // }),
    new transports.Console({
      level: "debug",
    }),
  ],
});
