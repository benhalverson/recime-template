/// <reference path="node.d.ts" />
"use strict";
var util = require('util');
var Bot = (function () {
    function Bot(args) {
        this.args = args;
    }
    Bot.prototype.execute = function (cb) {
        var args = this.args;
        var text = args.text;
        var msg = {
            "text": "I am a Turing Bot. How may I help you?"
        };
        if (text) {
            if (text.indexOf("name") >= 0) {
                cb(msg);
            }
            else {
                cb({
                    text: util.format("Hello %s", text)
                });
            }
        }
        else {
            cb({ text: "Sorry, I didn't understand." });
        }
    };
    return Bot;
}());
exports.Bot = Bot;
