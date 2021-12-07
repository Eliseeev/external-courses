/* eslint-disable arrow-body-style */
class ElectricalAppliances {
  constructor(appliance) {
    this.name = appliance.name;
    this.powerConsumption = appliance.powerConsumption;
    this.turnOn = appliance.turnOn;
  }
}
const hairdryer = new ElectricalAppliances({
  name: 'hairdryer',
  powerConsumption: 1500,
  turnOn: false,
});

const TV = new ElectricalAppliances({
  name: 'TV',
  powerConsumption: 200,
  turnOn: true,
});

const vacuumCleaner = new ElectricalAppliances({
  name: 'VacuumCleaner',
  powerConsumption: 1000,
  turnOn: true,
});

const iron = new ElectricalAppliances({
  name: 'iron',
  powerConsumption: 1000,
  turnOn: false,
});

const computer = new ElectricalAppliances({
  name: 'computer',
  powerConsumption: 550,
  turnOn: true,
});

const toaster = new ElectricalAppliances({
  name: 'toaster',
  powerConsumption: 1200,
  turnOn: false,
});

const fridge = new ElectricalAppliances({
  name: 'fridge',
  powerConsumption: 400,
  turnOn: true,
});

class Room {
  constructor(room) {
    this.name = room.name;
    this.appliances = room.appliances;
  }

  calculatePower() {
    return this.appliances.reduce((acc, item) => {
      let result = acc;
      result += item.powerConsumption;
      return result;
    }, 0);
  }
}

const livingRoom = new Room({
  name: 'livingRoom',
  appliances: [TV, computer, vacuumCleaner, iron],
});

const kitchen = new Room({
  name: 'kitchen',
  appliances: [toaster, hairdryer, fridge],
});

class Appartment {
  constructor(rooms) {
    this.rooms = rooms;
  }

  findAppliances(str) {
    const result = [];
    this.rooms.forEach((room) => {
      const appliances = room.appliances.filter((appliance) => {
        return appliance.name.toLowerCase().includes(str.toLowerCase());
      }).map((appliance) => appliance.name);
      if (appliances.length > 0) {
        result.push({ name: room.name, appliances });
      }
    });
    return result;
  }
}

const myHome = new Appartment([livingRoom, kitchen]);
console.log(myHome.findAppliances('comp'));
