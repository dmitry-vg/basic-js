const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members === null || members === NaN || members === undefined || members.length === 0) {
    return false;
  }
  membersShort = [];
  firstLetter = '';
  let shortName = '';
  for (let i = 0; i < members.length; i += 1) {
    if (typeof members[i] === 'string') {
      firstLetter = members[i].trimStart().toUpperCase();
      membersShort.push(firstLetter[0]);
    }
  }
  if (membersShort.length == 0) {
    return false;
  }
  membersShort = membersShort.sort();
  shortName = membersShort.join('');
  return shortName;
}

module.exports = {
  createDreamTeam
};
