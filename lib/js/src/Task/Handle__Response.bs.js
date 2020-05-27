// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var $$Promise = require("reason-promise/lib/js/src/js/promise.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Goal$AgdaModeVscode = require("../Goal.bs.js");
var Task$AgdaModeVscode = require("./Task.bs.js");
var Caml_chrome_debugger = require("bs-platform/lib/js/caml_chrome_debugger.js");

function Impl(Editor) {
  var Task = Task$AgdaModeVscode.Impl(Editor);
  var Goal = Goal$AgdaModeVscode.Impl(Editor);
  var handle = function (payload) {
    if (typeof payload === "number") {
      return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                        /* Success */Caml_chrome_debugger.variant("Success", 1, ["Compilation Done!"]),
                        undefined
                      ])]),
                /* [] */0
              ]);
    }
    switch (payload.tag | 0) {
      case /* Constraints */0 :
          var payload$1 = payload[0];
          if (payload$1 !== undefined) {
            return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                      /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                              /* Plain */Caml_chrome_debugger.variant("Plain", 0, ["Constraints"]),
                              payload$1
                            ])]),
                      /* [] */0
                    ]);
          } else {
            return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                      /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                              /* Plain */Caml_chrome_debugger.variant("Plain", 0, ["No Constraints"]),
                              undefined
                            ])]),
                      /* [] */0
                    ]);
          }
      case /* AllGoalsWarnings */1 :
          return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                    /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                            /* Plain */Caml_chrome_debugger.variant("Plain", 0, [payload[0]]),
                            payload[1]
                          ])]),
                    /* [] */0
                  ]);
      case /* Time */2 :
          return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                    /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                            /* Plain */Caml_chrome_debugger.variant("Plain", 0, ["Time"]),
                            payload[0]
                          ])]),
                    /* [] */0
                  ]);
      case /* Error */3 :
          return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                    /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                            /* Error */Caml_chrome_debugger.variant("Error", 3, ["Error"]),
                            payload[0]
                          ])]),
                    /* [] */0
                  ]);
      case /* Intro */4 :
          return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                    /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                            /* Plain */Caml_chrome_debugger.variant("Plain", 0, ["Intro"]),
                            payload[0]
                          ])]),
                    /* [] */0
                  ]);
      case /* Auto */5 :
          return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                    /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                            /* Success */Caml_chrome_debugger.variant("Success", 1, ["Auto"]),
                            payload[0]
                          ])]),
                    /* [] */0
                  ]);
      case /* ModuleContents */6 :
          return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                    /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                            /* Plain */Caml_chrome_debugger.variant("Plain", 0, ["Module Contents"]),
                            payload[0]
                          ])]),
                    /* [] */0
                  ]);
      case /* SearchAbout */7 :
          return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                    /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                            /* Plain */Caml_chrome_debugger.variant("Plain", 0, ["earching about ..."]),
                            payload[0]
                          ])]),
                    /* [] */0
                  ]);
      case /* WhyInScope */8 :
          return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                    /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                            /* Plain */Caml_chrome_debugger.variant("Plain", 0, ["Scope info"]),
                            payload[0]
                          ])]),
                    /* [] */0
                  ]);
      case /* NormalForm */9 :
      case /* GoalType */10 :
          break;
      case /* CurrentGoal */11 :
          return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                    /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                            /* Plain */Caml_chrome_debugger.variant("Plain", 0, ["Current goal"]),
                            payload[0]
                          ])]),
                    /* [] */0
                  ]);
      case /* InferredType */12 :
          return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                    /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                            /* Plain */Caml_chrome_debugger.variant("Plain", 0, ["Inferred type"]),
                            payload[0]
                          ])]),
                    /* [] */0
                  ]);
      case /* Context */13 :
          return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                    /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                            /* Plain */Caml_chrome_debugger.variant("Plain", 0, ["Context"]),
                            payload[0]
                          ])]),
                    /* [] */0
                  ]);
      case /* HelperFunction */14 :
          return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                    /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                            /* Plain */Caml_chrome_debugger.variant("Plain", 0, ["Helper function"]),
                            payload[0]
                          ])]),
                    /* [] */0
                  ]);
      case /* Version */15 :
          return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                    /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                            /* Plain */Caml_chrome_debugger.variant("Plain", 0, ["Version"]),
                            payload[0]
                          ])]),
                    /* [] */0
                  ]);
      
    }
    return /* :: */Caml_chrome_debugger.simpleVariant("::", [
              /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                      /* Plain */Caml_chrome_debugger.variant("Plain", 0, ["Normal form"]),
                      payload[0]
                    ])]),
              /* [] */0
            ]);
  };
  var DisplayInfo = {
    handle: handle
  };
  var handle$1 = function (info) {
    if (typeof info === "number") {
      return /* [] */0;
    }
    switch (info.tag | 0) {
      case /* InteractionPoints */3 :
          var indices = info[0];
          return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                    /* WithState */Caml_chrome_debugger.variant("WithState", 3, [(function (state) {
                            Belt_Array.forEach(state.goals, Goal.destroy);
                            return $$Promise.map(Curry._2(Goal.makeMany, state.editor, indices), (function (goals) {
                                          state.goals = goals;
                                          return /* [] */0;
                                        }));
                          })]),
                    /* [] */0
                  ]);
      case /* DisplayInfo */7 :
          return handle(info[0]);
      case /* RunningInfo */8 :
          return /* :: */Caml_chrome_debugger.simpleVariant("::", [
                    /* ViewReq */Caml_chrome_debugger.variant("ViewReq", 1, [/* Plain */Caml_chrome_debugger.simpleVariant("Plain", [
                            /* Plain */Caml_chrome_debugger.variant("Plain", 0, ["Type-checking"]),
                            info[1]
                          ])]),
                    /* [] */0
                  ]);
      default:
        return /* [] */0;
    }
  };
  return {
          Task: Task,
          Goal: Goal,
          DisplayInfo: DisplayInfo,
          handle: handle$1
        };
}

exports.Impl = Impl;
/* Promise Not a pure module */