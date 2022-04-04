import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const data = {
  ids: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
  ],
  entities: {
    1: {
      id: 1,
      name: "Paderborn",
    },
    2: {
      id: 2,
      name: "Bielefeld",
    },
    3: {
      id: 3,
      name: "Dortmund",
    },
    4: {
      id: 4,
      name: "Hamm",
    },
    5: {
      id: 5,
      name: "Gütersloh",
    },
    6: {
      id: 6,
      name: "Detmold",
    },
    7: {
      id: 7,
      name: "Minden",
    },
    8: {
      id: 8,
      name: "Lippstadt",
    },
    9: {
      id: 9,
      name: "Soest",
    },
    10: {
      id: 10,
      name: "Bad Lippspringe",
    },
    11: {
      id: 11,
      name: "Bad Salzulfen",
    },
    12: {
      id: 12,
      name: "Ritberg",
    },
    13: {
      id: 13,
      name: "Agusdorf",
    },
    14: {
      id: 14,
      name: "Oerlinghausen",
    },
    15: {
      id: 15,
      name: "Delbrück",
    },
    16: {
      id: 16,
      name: "Herford",
    },
    17: {
      id: 17,
      name: "Bad Driburg",
    },
    18: {
      id: 18,
      name: "Altenbeken",
    },
    19: {
      id: 19,
      name: "Höxter",
    },
    20: {
      id: 20,
      name: "Salzkotten",
    },
    21: {
      id: 21,
      name: "Geseke",
    },
    22: {
      id: 22,
      name: "Erwitte",
    },
    23: {
      id: 23,
      name: "Horn-bad meinberg",
    },
    24: {
      id: 24,
      name: "Detmold",
    },
    25: {
      id: 25,
      name: "Büren",
    },
    26: {
      id: 26,
      name: "Bad wünnenberg",
    },
    27: {
      id: 27,
      name: "Lichtenau",
    },
    28: {
      id: 28,
      name: "Lage",
    },
    29: {
      id: 29,
      name: "Schloß Holte-Stukenbroch",
    },
    30: {
      id: 30,
      name: "Schlangen",
    },
    31: {
      id: 31,
      name: "Lemgo",
    },
    32: {
      id: 32,
      name: "Bad Pyrmont",
    },
    33: {
      id: 33,
      name: "Barntrup",
    },
    34: {
      id: 34,
      name: "Dörentrup",
    },
  },
};

const citiesAdapter = createEntityAdapter({
  selectId: (city) => city.id,
  sortComparer: (previous, current) => previous.id.localeCompare(current.id),
});

const initialState = {
  status: "idle",
  error: null,
  city: {},
  data,
};

const citiesSlice = createSlice(sliceInvoker());

function sliceInvoker() {
  return {
    name: "cities",
    initialState,
    reducers: {},
    extraReducers: {},
  };
}

export const { selectById: selectCity, selectAll: selectAllCities } =
  citiesAdapter.getSelectors((state) => state.cities.data);

export default citiesSlice.reducer;
