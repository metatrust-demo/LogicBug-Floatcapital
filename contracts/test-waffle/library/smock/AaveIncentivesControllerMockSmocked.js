// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_Array = require("rescript/lib/js/belt_Array.js");

function mockClaimRewardsToReturn(_r, _param0) {
  ((_r.smocked.claimRewards.will.return.with([_param0])));
  
}

function claimRewardsCalls(_r) {
  var array = _r.smocked.claimRewards.calls;
  return Belt_Array.map(array, (function (param) {
                return {
                        assets: param[0],
                        amount: param[1],
                        _to: param[2]
                      };
              }));
}

function mockGetUserUnclaimedRewardsToReturn(_r, _param0) {
  ((_r.smocked.getUserUnclaimedRewards.will.return.with([_param0])));
  
}

function getUserUnclaimedRewardsCalls(_r) {
  var array = _r.smocked.getUserUnclaimedRewards.calls;
  return Belt_Array.map(array, (function (_m) {
                var user = _m[0];
                return {
                        user: user
                      };
              }));
}

var uninitializedValue;

exports.uninitializedValue = uninitializedValue;
exports.mockClaimRewardsToReturn = mockClaimRewardsToReturn;
exports.claimRewardsCalls = claimRewardsCalls;
exports.mockGetUserUnclaimedRewardsToReturn = mockGetUserUnclaimedRewardsToReturn;
exports.getUserUnclaimedRewardsCalls = getUserUnclaimedRewardsCalls;
/* No side effect */
