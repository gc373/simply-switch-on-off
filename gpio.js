const pigpio = require("pigpio");
const Gpio = pigpio.Gpio;
const servoPinNo = 18;
const motor = new Gpio(servoPinNo, { mode: Gpio.OUTPUT });

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time * 1000));
}

// const PALSMAX = 2500;
// const PALSMIN = 500;
let start;

async function switchOnOff() {
	start = Date.now();
  await sleep(0.5);
  await motor.servoWrite(1600);
  await sleep(0.3);
  await motor.servoWrite(1950);
  await sleep(0.1);
  await motor.servoWrite(1600);
	console.log(`switch pushed!! ${new Date().toLocaleString()}`);
	await sleep(10);
	if (Date.now() - start > 10) {
		motor.digitalWrite(0);
	}
}
function shutdown() {
	pigpio.terminate(); //THIS IS IMPORTANT
	// perform other clean termination steps your daemon needs
	//clearInterval(timerVar);
	console.log('Daemon must exit, performed cleanup.');
	process.exit(0);
}
module.exports.switchOnOff = switchOnOff;