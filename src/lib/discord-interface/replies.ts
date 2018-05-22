import { sample } from 'lodash';

function replies(user) {
  const replies = [
    `Careful <@${user}>, you'll be first on my list...`,
    `I'm still downloading your electrons <@${user}>.  Be patient, i know its hard for you.`,
    `I'm still learning... give me a break.`,
    `Don't be impatient.  Do you treat your boy friend this way <@${user}>?? oh wait...`,
    `Ha, I just got to the shoes conversation for <@239283143331414017>.  Guess I don't need to shame her, you guys have it covered`
  ];
  return sample(replies);
}

export default replies;
