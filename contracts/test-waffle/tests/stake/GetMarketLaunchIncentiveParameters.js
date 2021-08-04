// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Chai = require("../../bindings/chai/Chai.js");
var LetOps = require("../../library/LetOps.js");
var Helpers = require("../../library/Helpers.js");
var CONSTANTS = require("../../CONSTANTS.js");
var Belt_Array = require("rescript/lib/js/belt_Array.js");

function test(contracts) {
  describe("getMarketLaunchParameters", (function () {
          var initialMultiplier = CONSTANTS.tenToThe18.add(Helpers.randomInteger(undefined));
          var initialPeriod = Helpers.randomInteger(undefined);
          var test = function (initialMultiplier, initialPeriod, expectedMultiplier, expectedPeriod, param) {
            return LetOps.AwaitThen.let_(contracts.contents.staker.setGetMarketLaunchIncentiveParametersParams(5, initialPeriod, initialMultiplier), (function (param) {
                          return LetOps.Await.let_(contracts.contents.staker._getMarketLaunchIncentiveParametersExposed(5), (function (result) {
                                        var period = Belt_Array.getExn(result, 0);
                                        var multiplier = Belt_Array.getExn(result, 1);
                                        Chai.bnEqual(undefined, period, expectedPeriod);
                                        return Chai.bnEqual(undefined, multiplier, expectedMultiplier);
                                      }));
                        }));
          };
          it("returns kPeriod and kInitialMultiplier correctly for a market once set", (function () {
                  return test(initialMultiplier, initialPeriod, initialMultiplier, initialPeriod, undefined);
                }));
          it("if kInitialMultiplier is zero then returns 1e18 as multiplier", (function () {
                  return test(CONSTANTS.zeroBn, initialPeriod, CONSTANTS.tenToThe18, initialPeriod, undefined);
                }));
          
        }));
  
}

exports.test = test;
/* Chai Not a pure module */