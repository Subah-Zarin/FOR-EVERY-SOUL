const logger = (req, res, next) => {
  console.log(`URL: ${req.url}, Method: ${req.method}, Time: ${new Date()}`);
  next();
};

export default logger;
