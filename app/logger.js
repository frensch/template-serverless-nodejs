const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

var log_level = process.env.LOG_LEVEL;
console.log("log_level: "  + log_level);

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${level}] ${message}`;
});

const log = createLogger({
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [new transports.Console({level: log_level})]
});

module.exports = log;