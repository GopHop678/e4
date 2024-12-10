class Outlet {
  constructor() {
    this.devices = [];
  }

  countPowerConsumption() {
    let sum = 0;
    this.devices.forEach((device) => {
      sum += device.powerConsumption;
    });
    console.log(`Потребление равно ${sum}`);
  }

  plugInDevice(deviceObj) {
    this.devices.push(deviceObj);
  }
}

class Device {
  constructor(name, powerConsumption) {
    this.name = name;
    this.powerConsumption = powerConsumption;
  }

  plugIn(outlet) {
    outlet.plugInDevice(this); // Передаем текущий объект устройства в розетку
  }
}

const lamp = new Device('Lamp', 30);
const computer = new Device('Computer', 650);
const outlet1 = new Outlet();

lamp.plugIn(outlet1)
computer.plugIn(outlet1)
outlet1.countPowerConsumption()
