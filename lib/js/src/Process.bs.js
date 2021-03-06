// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Os = require("os");
var Curry = require("bs-platform/lib/js/curry.js");
var $$String = require("bs-platform/lib/js/string.js");
var $$Promise = require("reason-promise/lib/js/src/js/promise.bs.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Child_process = require("child_process");
var Chan$AgdaModeVscode = require("./Util/Chan.bs.js");
var Util$AgdaModeVscode = require("./Util/Util.bs.js");

function toString(x) {
  switch (x.TAG | 0) {
    case /* ProcessHanging */0 :
        return [
                "Process not responding when looking for \"" + (x._0 + "\""),
                "Please restart the process"
              ];
    case /* NotSupported */1 :
        return [
                "Auto search failed",
                "currently auto path searching is not supported on " + x._0
              ];
    case /* NotFound */2 :
        return [
                "Auto search failed when looking for \"" + (x._0 + "\""),
                "If you know where the executable of Agda is located, please fill it in \"agdaMode.agdaPath\" in the Settings.\nThe system responded with the following message " + x._1
              ];
    
  }
}

var $$Error = {
  toString: toString
};

function run(name) {
  var match = $$Promise.pending(undefined);
  var resolve = match[1];
  var hangTimeout = setTimeout((function (param) {
          return Curry._1(resolve, {
                      TAG: 1,
                      _0: {
                        TAG: 0,
                        _0: name,
                        [Symbol.for("name")]: "ProcessHanging"
                      },
                      [Symbol.for("name")]: "Error"
                    });
        }), 1000);
  var os = Os.type();
  var commandName;
  switch (os) {
    case "Darwin" :
    case "Linux" :
        commandName = {
          TAG: 0,
          _0: "which",
          [Symbol.for("name")]: "Ok"
        };
        break;
    case "Windows_NT" :
        commandName = {
          TAG: 0,
          _0: "where.exe",
          [Symbol.for("name")]: "Ok"
        };
        break;
    default:
      commandName = {
        TAG: 1,
        _0: os,
        [Symbol.for("name")]: "Error"
      };
  }
  if (commandName.TAG === /* Ok */0) {
    Child_process.exec(commandName._0 + (" " + name), (function (error, stdout, stderr) {
            clearTimeout(hangTimeout);
            Belt_Option.forEach((error == null) ? undefined : Caml_option.some(error), (function (err) {
                    return Curry._1(resolve, {
                                TAG: 1,
                                _0: {
                                  TAG: 2,
                                  _0: name,
                                  _1: Belt_Option.getWithDefault(err.message, ""),
                                  [Symbol.for("name")]: "NotFound"
                                },
                                [Symbol.for("name")]: "Error"
                              });
                  }));
            var stderr$1 = stderr.toString();
            if (stderr$1 !== "") {
              Curry._1(resolve, {
                    TAG: 1,
                    _0: {
                      TAG: 2,
                      _0: name,
                      _1: stderr$1,
                      [Symbol.for("name")]: "NotFound"
                    },
                    [Symbol.for("name")]: "Error"
                  });
            }
            var stdout$1 = $$String.trim(stdout.toString());
            if (stdout$1 === "") {
              return Curry._1(resolve, {
                          TAG: 1,
                          _0: {
                            TAG: 2,
                            _0: name,
                            _1: "",
                            [Symbol.for("name")]: "NotFound"
                          },
                          [Symbol.for("name")]: "Error"
                        });
            } else {
              return Curry._1(resolve, {
                          TAG: 0,
                          _0: stdout$1,
                          [Symbol.for("name")]: "Ok"
                        });
            }
          }));
  } else {
    Curry._1(resolve, {
          TAG: 1,
          _0: {
            TAG: 1,
            _0: commandName._0,
            [Symbol.for("name")]: "NotSupported"
          },
          [Symbol.for("name")]: "Error"
        });
  }
  return match[0];
}

var PathSearch = {
  $$Error: $$Error,
  run: run
};

function toString$1(x) {
  if (typeof x === "number") {
    return [
            "Process hanging",
            "The program has not been responding for more than 1 sec"
          ];
  }
  switch (x.TAG | 0) {
    case /* PathMalformed */0 :
        return [
                "Path malformed",
                x._0
              ];
    case /* NotFound */1 :
        return [
                "Command not found",
                Util$AgdaModeVscode.JsError.toString(x._0)
              ];
    case /* ShellError */2 :
        return [
                "Error from the shell",
                Util$AgdaModeVscode.JsError.toString(x._0)
              ];
    case /* ProcessError */3 :
        return [
                "Error from the stderr",
                x._0
              ];
    case /* WrongProcess */4 :
        return [
                "Wrong process",
                x._0
              ];
    
  }
}

var $$Error$1 = {
  toString: toString$1
};

function run$1(path, validator) {
  var parseError = function (error) {
    return Belt_Option.map((error == null) ? undefined : Caml_option.some(error), (function (err) {
                  var message = Belt_Option.getWithDefault(err.message, "");
                  if (/No such file or directory/.test(message) || /command not found/.test(message)) {
                    return {
                            TAG: 1,
                            _0: err,
                            [Symbol.for("name")]: "NotFound"
                          };
                  } else {
                    return {
                            TAG: 2,
                            _0: err,
                            [Symbol.for("name")]: "ShellError"
                          };
                  }
                }));
  };
  var match = $$Promise.pending(undefined);
  var resolve = match[1];
  if (path === "") {
    Curry._1(resolve, {
          TAG: 1,
          _0: {
            TAG: 0,
            _0: "the path must not be empty",
            [Symbol.for("name")]: "PathMalformed"
          },
          [Symbol.for("name")]: "Error"
        });
  }
  var hangTimeout = setTimeout((function (param) {
          return Curry._1(resolve, {
                      TAG: 1,
                      _0: /* ProcessHanging */0,
                      [Symbol.for("name")]: "Error"
                    });
        }), 20000);
  Child_process.exec(path, (function (error, stdout, stderr) {
          clearTimeout(hangTimeout);
          Belt_Option.forEach(parseError(error), (function (err) {
                  return Curry._1(resolve, {
                              TAG: 1,
                              _0: err,
                              [Symbol.for("name")]: "Error"
                            });
                }));
          var stderr$1 = stderr.toString();
          if (stderr$1 !== "") {
            Curry._1(resolve, {
                  TAG: 1,
                  _0: {
                    TAG: 3,
                    _0: stderr$1,
                    [Symbol.for("name")]: "ProcessError"
                  },
                  [Symbol.for("name")]: "Error"
                });
          }
          var stdout$1 = stdout.toString();
          var err = Curry._1(validator, stdout$1);
          if (err.TAG === /* Ok */0) {
            return Curry._1(resolve, {
                        TAG: 0,
                        _0: err._0,
                        [Symbol.for("name")]: "Ok"
                      });
          } else {
            return Curry._1(resolve, {
                        TAG: 1,
                        _0: {
                          TAG: 4,
                          _0: err._0,
                          [Symbol.for("name")]: "WrongProcess"
                        },
                        [Symbol.for("name")]: "Error"
                      });
          }
        }));
  return match[0];
}

var Validation = {
  $$Error: $$Error$1,
  run: run$1
};

function toString$2(x) {
  if (typeof x === "number") {
    if (x === /* DisconnectedByUser */0) {
      return [
              "Disconnected",
              "Connection disconnected by ourselves"
            ];
    } else {
      return [
              "Connection not established yet",
              "Please establish the connection first"
            ];
    }
  }
  switch (x.TAG | 0) {
    case /* ClosedByProcess */0 :
        return [
                "Socket closed by process",
                "exited with code: " + x._0 + "\nsignal: " + x._1 + "\n"
              ];
    case /* ShellError */1 :
        return [
                "Socket error",
                Util$AgdaModeVscode.JsError.toString(x._0)
              ];
    case /* ExitedByProcess */2 :
        return [
                "Agda has crashed !",
                "exited with code: " + x._0 + "\n  signal: " + x._1 + "\n  === message from stderr ===\n  " + x._2 + "\n  "
              ];
    
  }
}

var $$Error$2 = {
  toString: toString$2
};

function make(path, args) {
  var chan = Chan$AgdaModeVscode.make(undefined);
  var stderr = {
    contents: ""
  };
  var $$process = Child_process.spawn("\"" + (path + "\""), args, {
        shell: true
      });
  $$process.stdout.on("data", (function (chunk) {
          Chan$AgdaModeVscode.emit(chan, {
                TAG: 0,
                _0: chunk.toString(),
                [Symbol.for("name")]: "Stdout"
              });
          
        }));
  $$process.stderr.on("data", (function (chunk) {
          Chan$AgdaModeVscode.emit(chan, {
                TAG: 1,
                _0: chunk.toString(),
                [Symbol.for("name")]: "Stderr"
              });
          stderr.contents = chunk.toString();
          
        }));
  $$process.stdin.on("close", (function (param) {
          Chan$AgdaModeVscode.emit(chan, {
                TAG: 2,
                _0: {
                  TAG: 0,
                  _0: 0,
                  _1: "",
                  [Symbol.for("name")]: "ClosedByProcess"
                },
                [Symbol.for("name")]: "Error"
              });
          
        }));
  $$process.on("close", (function (code, signal) {
                Chan$AgdaModeVscode.emit(chan, {
                      TAG: 2,
                      _0: {
                        TAG: 0,
                        _0: code,
                        _1: signal,
                        [Symbol.for("name")]: "ClosedByProcess"
                      },
                      [Symbol.for("name")]: "Error"
                    });
                
              })).on("disconnect", (function (param) {
              Chan$AgdaModeVscode.emit(chan, {
                    TAG: 2,
                    _0: /* DisconnectedByUser */0,
                    [Symbol.for("name")]: "Error"
                  });
              
            })).on("error", (function (exn) {
            Chan$AgdaModeVscode.emit(chan, {
                  TAG: 2,
                  _0: {
                    TAG: 1,
                    _0: exn,
                    [Symbol.for("name")]: "ShellError"
                  },
                  [Symbol.for("name")]: "Error"
                });
            
          })).on("exit", (function (code, signal) {
          if (code !== 0) {
            Chan$AgdaModeVscode.emit(chan, {
                  TAG: 2,
                  _0: {
                    TAG: 2,
                    _0: code,
                    _1: signal,
                    _2: stderr.contents,
                    [Symbol.for("name")]: "ExitedByProcess"
                  },
                  [Symbol.for("name")]: "Error"
                });
            return ;
          }
          
        }));
  return {
          chan: chan,
          status: {
            TAG: 0,
            _0: $$process,
            [Symbol.for("name")]: "Connected"
          },
          forcedExit: false
        };
}

function destroy(self) {
  var $$process = self.status;
  if (typeof $$process === "number") {
    return $$Promise.resolved(undefined);
  }
  if ($$process.TAG !== /* Connected */0) {
    return $$process._0;
  }
  var match = $$Promise.pending(undefined);
  var resolve = match[1];
  var promise = match[0];
  self.status = {
    TAG: 1,
    _0: promise,
    [Symbol.for("name")]: "Disconnecting"
  };
  self.forcedExit = true;
  Chan$AgdaModeVscode.on(self.chan, (function (x) {
          switch (x.TAG | 0) {
            case /* Stdout */0 :
            case /* Stderr */1 :
                return ;
            case /* Error */2 :
                var tmp = x._0;
                if (typeof tmp === "number") {
                  return ;
                }
                if (tmp.TAG !== /* ExitedByProcess */2) {
                  return ;
                }
                Chan$AgdaModeVscode.destroy(self.chan);
                self.status = /* Disconnected */0;
                return Curry._1(resolve, undefined);
            
          }
        }));
  $$process._0.kill("SIGTERM");
  return promise;
}

function send(self, request) {
  var $$process = self.status;
  if (typeof $$process === "number") {
    return {
            TAG: 1,
            _0: /* NotEstablishedYet */1,
            [Symbol.for("name")]: "Error"
          };
  }
  if ($$process.TAG !== /* Connected */0) {
    return {
            TAG: 1,
            _0: /* NotEstablishedYet */1,
            [Symbol.for("name")]: "Error"
          };
  }
  var payload = Buffer.from(request + "\n");
  $$process._0.stdin.write(payload);
  return {
          TAG: 0,
          _0: undefined,
          [Symbol.for("name")]: "Ok"
        };
}

function onOutput(self, callback) {
  return Chan$AgdaModeVscode.on(self.chan, (function (output) {
                switch (output.TAG | 0) {
                  case /* Stdout */0 :
                  case /* Stderr */1 :
                      return Curry._1(callback, output);
                  case /* Error */2 :
                      var tmp = output._0;
                      if (typeof tmp === "number" || !(tmp.TAG === /* ExitedByProcess */2 && self.forcedExit)) {
                        return Curry._1(callback, output);
                      } else {
                        self.forcedExit = false;
                        return ;
                      }
                  
                }
              }));
}

function isConnected(self) {
  var match = self.status;
  if (typeof match === "number" || match.TAG !== /* Connected */0) {
    return false;
  } else {
    return true;
  }
}

var Module = {
  make: make,
  destroy: destroy,
  send: send,
  onOutput: onOutput,
  isConnected: isConnected
};

exports.PathSearch = PathSearch;
exports.Validation = Validation;
exports.$$Error = $$Error$2;
exports.Module = Module;
exports.make = make;
exports.destroy = destroy;
exports.send = send;
exports.onOutput = onOutput;
exports.isConnected = isConnected;
/* os Not a pure module */
