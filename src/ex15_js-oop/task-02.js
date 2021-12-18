/* eslint-disable arrow-body-style */
class ElectricalAppliances {
  constructor(appliance) {
    this.name = appliance.name;
    this.powerConsumption = appliance.powerConsumption;
    this.turnOn = appliance.turnOn;
  }
}
class Hairdryer extends ElectricalAppliances {
  constructor(hairdryerConfig) {
    super(hairdryerConfig);
    this.name = hairdryerConfig.noise;
  }
}

const vitek = new Hairdryer({
  name: 'vitek',
  powerConsumption: 1800,
  turnOn: false,
  noise: 75,
});

const dyson = new Hairdryer({
  name: 'dyson',
  powerConsumption: 660,
  turnOn: true,
  noise: 77,
});

class TV extends ElectricalAppliances {
  constructor(tvConfig) {
    super(tvConfig);
    this.name = tvConfig.diagonal;
  }
}

const lg = new TV({
  name: 'lg',
  powerConsumption: 100,
  turnOn: true,
  diagonal: 107,
});

class VacuumCleaner extends ElectricalAppliances {
  constructor(vacuumCleanerConfig) {
    super(vacuumCleanerConfig);
    this.name = vacuumCleanerConfig.dustСollector;
  }
}

const bq = new VacuumCleaner({
  name: 'bq',
  powerConsumption: 1800,
  turnOn: false,
  dustСollector: 0.8,
});

class Iron extends ElectricalAppliances {
  constructor(IronConfig) {
    super(IronConfig);
    this.name = IronConfig.soleMaterial;
  }
}

const panasonic = new Iron({
  name: 'panasonic',
  powerConsumption: 2300,
  turnOn: true,
  soleMaterial: 'ceramics',
});

class Computer extends ElectricalAppliances {
  constructor(computerConfig) {
    super(computerConfig);
    this.name = computerConfig.operatingSystem;
  }
}

const apple = new Computer({
  name: 'apple',
  powerConsumption: 550,
  turnOn: true,
  operatingSystem: 'macOS',
});

class Toaster extends ElectricalAppliances {
  constructor(toasterConfig) {
    super(toasterConfig);
    this.name = toasterConfig.control;
  }
}

const philips = new Toaster({
  name: 'philips',
  powerConsumption: 830,
  turnOn: true,
  control: 'mechanical',
});

class MicrowaveOven extends ElectricalAppliances {
  constructor(microWaweConfig) {
    super(microWaweConfig);
    this.name = microWaweConfig.cameraVolume;
  }
}

const bbk = new MicrowaveOven({
  name: 'bbk',
  powerConsumption: 1050,
  turnOn: false,
  cameraVolume: 20,
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

// eslint-disable-next-line no-unused-vars
const livingRoom = new Room({
  name: 'livingRoom',
  appliances: [lg, apple, bq, panasonic, dyson],
});

// eslint-disable-next-line no-unused-vars
const kitchen = new Room({
  name: 'kitchen',
  appliances: [philips, vitek, bbk],
});

// eslint-disable-next-line no-unused-vars
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
