import { LoggerOptions, format, transports } from 'winston';

// Custom format to simulate Nest-like logging
const nestLikeFormat = format.printf(
  ({ context, timestamp, level, message }) => {
    return `${timestamp} [${context || 'Application'}] ${level}: ${message}`;
  },
);

export const winstonConfig: LoggerOptions = {
  level: 'info',
  format: format.combine(format.colorize(), format.timestamp(), nestLikeFormat),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: 'application.log',
      format: format.combine(format.json(), nestLikeFormat),
    }),
  ],
};
