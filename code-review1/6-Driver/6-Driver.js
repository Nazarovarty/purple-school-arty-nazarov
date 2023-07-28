const age = 18;
const isDrunk = false;
const hasLicence = true;
const canDrive = age >= 18 && !isDrunk && hasLicence ? 'может' : 'не может';
console.log(canDrive);