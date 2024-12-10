function Outlet() {
  this.devices = [];
}

Outlet.prototype.countPowerConsumption = function() {
  let sum = 0;
  this.devices.forEach((device) => {
    sum += device.powerConsumption;
  })
  console.log(`Потребление равно ${sum}`);
}
Outlet.prototype.plugInDevice = function(deviceObj) {
  this.devices.push(deviceObj);
}

function Device(name, powerConsumption){
  this.name = name;
  this.powerConsumption = powerConsumption
  this.plugIn = function(outlet){
    outlet.plugInDevice(this);
    }
}

const lamp = new Device('Lamp', 30);
const computer = new Device('Computer', 650);
const outlet1 = new Outlet();

lamp.plugIn(outlet1)
computer.plugIn(outlet1)
outlet1.countPowerConsumption()
