/* eslint-disable */
const config = require('./config_eu.json');
const BlueLinky = require('./dist/index');

const { username, password, vin, pin, deviceUuid } = config;
const client = new BlueLinky({
	username,
  password,
	region: 'EU',
	pin,
	deviceUuid
});

const onReadyHandler = async (vehicles) => {
	await client.enterPin();
	const cars = client.getVehicles();
	cars[0].lock();
}
client.on('ready', onReadyHandler);
