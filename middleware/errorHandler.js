// const {constants} = require("../constants")

// const errorHandler = (err,req,res,next) =>{
// const statusCode = res.statusCode ? res.statusCode : 500;
// switch(statusCode){
//   case constants.VALIDATION_ERROR:
//     res.json({
//       title : "Validation Failed",
//       message : err.message,
//       stackTrace : err.stack,
//     });
//     break;
//     case constants.NOT_FOUND:
//     res.json({
//       title : "File not found",
//       message : err.message,
//       stackTrace : err.stack,
//     });
//     break;
//     case constants.UNAUTHORIZED:
//     res.json({
//       title : "unauthorized access",
//       message : err.message,
//       stackTrace : err.stack,
//     });
//     break;
//     case constants.FORBIDDEN:
//     res.json({
//       title : "Not ALlow",
//       message : err.message,
//       stackTrace : err.stack,
//     });
//     break;
//     case constants.SERVER_ERROR:
//     res.json({
//       title : "your server not works",
//       message : err.message,
//       stackTrace : err.stack,
//     });
//     default:
//     console.log("No error All good!")
//     break;
// };

// res.json({title : "Not Found" , massege : err.massege, stacktrace : err.stack})
// res.json({title : "Validation Failed" , massege : err.massege, stacktrace : err.stack})
// };

// module.exports = errorHandler;