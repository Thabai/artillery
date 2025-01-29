import { testLogin } from '../commands/login';

export async function artilleryScript(page, vuContext, events, test){

  //output current metrics - incrementing custom counters eg. below number of page loads
  events.emit("counter", `user.${vuContext.scenario.name}.pageloads`, 1)
  await testLogin(page);
};

