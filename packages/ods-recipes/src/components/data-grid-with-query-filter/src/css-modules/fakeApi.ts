type Instance = {
  backup: string;
  image: string;
  location: string;
  model: string;
  startDate: Date;
  uuid: string;
};

const BACKUPS = ['rotation 7', 'rotation 14', 'custom'];
const IMAGES = ['almalinux', 'centos', 'cloudlinux', 'debian', 'fedora', 'freebsd', 'rockylinux', 'ubuntu'];
const LOCATIONS = ['Gravelines (GRA)', 'Roubaix(RBX-A)', 'Strasbourg (SBG)', 'Frankfurt (DE1)', 'London (UK1)', 'Warsaw (WAW1)', 'Beauharnois (BHS5)', 'Sydney (SYD1)', 'Singapore (SGP1)'];
const MODELS = ['b3-16', 'b3-32', 'b3-64', 'c3-16', 'c3-32'];
const TIMESTAMPS = ['a day', 'a week', 'a month'];

async function fetchFilterValues(): Promise<{
  backups: string[],
  images: string[],
  locations: string[],
  models: string[],
  timestamps: string[],
}> {
  return Promise.resolve({
    backups: BACKUPS,
    images: IMAGES,
    locations: LOCATIONS,
    models: MODELS,
    timestamps: TIMESTAMPS,
  });
}

function generateDummyData(): Instance[] {
  const nbLoop = randomInt(100, 500);
  const data: Instance[] = [];

  for (let i = 0; i < nbLoop; i++) {
    data.push({
      backup: BACKUPS[randomInt(0, BACKUPS.length - 1)],
      image: IMAGES[randomInt(0, IMAGES.length - 1)],
      location: LOCATIONS[randomInt(0, LOCATIONS.length - 1)],
      model: MODELS[randomInt(0, MODELS.length - 1)],
      startDate: new Date(randomInt(Date.now() - 7884000000, Date.now())),
      uuid: crypto.randomUUID(),
    });
  }

  return data;
}

function getTimeValue(timestamp: string): number {
  switch (timestamp) {
    case 'a day':
      return Date.now() - 86400000;
    case 'a week':
      return Date.now() - 604800000;
    case 'a month':
      return Date.now() - 2628000000;
    default:
      return 0;
  }
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function search(page: number, pageSize: number, filters: string[][]): Promise<{ instances: Instance[], total: number }> {
  const pageStart = Math.abs((page - 1)) * pageSize;

  const filteredData = DATA.filter((instance) => {
    return filters.every((filter) => {
      const [property, operator, value] = filter;

      if (!property || !operator || !value) {
        return false;
      }

      switch (operator) {
        case '=':
          return instance[property as keyof Instance] === value;
        case '!=':
          return instance[property as keyof Instance] !== value;
        case '<':
          return (instance[property as keyof Instance] as Date).getTime() >= getTimeValue(value);
        case '>':
          return (instance[property as keyof Instance] as Date).getTime() <= getTimeValue(value);
        default:
          return false;
      }
    });
  });

  return withDelay(Promise.resolve({
    instances: filteredData.slice(pageStart, pageStart + pageSize),
    total: filteredData.length,
  }));
}

async function withDelay<T>(promise: Promise<T>): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(promise), randomInt(500, 2000));
  });
}

const DATA = generateDummyData();

export {
  type Instance,
  fetchFilterValues,
  search,
};
