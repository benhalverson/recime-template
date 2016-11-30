/// <reference path="node.d.ts" />

import util = require('util');

export class Bot {

  private args: any;

  constructor(args:Object){
    this.args = args;
  }

  execute(cb:any){
      let args = this.args;
      let text:string = args.text;
      let msg  = {
          "text": "I am a Turing Bot. How may I help you?"
      };
    
      if (text){
        if (text.indexOf("name") >= 0){
          cb(msg); 
        }
        else{
          cb({
            text : util.format("Hello %s", text)
          });
        }
      }
      else {
        cb({ text : "Sorry, I didn't understand."})
      }
  }
}
