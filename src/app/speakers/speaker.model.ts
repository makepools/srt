export interface Speaker {
  uuid?: number; // create a unique ID for each row, in reality this would come back from the API
  gender: string;
  name: { title: string; first: string; last: string };
  location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: { latitude: string; longitude: string };
    timezone: { offset: string; description: string };
  };
  email: string;
  dob: { date: string; age: number };
  phone: string;
}

interface Pagination<T> {
  results: T[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

export type PaginatedSpeakers = Pagination<Speaker>;

export interface SpeakersQuery {
  pageIndex: number;
}
