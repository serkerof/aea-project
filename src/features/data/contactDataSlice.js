import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const contactDataAdapter = createEntityAdapter({
  selectId: (contactData) => contactData.id,
  sortComparer:  (previous, current) => previous.id.localeCompare(current.id),
});

const initialState = {
  status: "idle",
  error: null,
  currentData: {},
  data: {
    ids: ["email", "phone", "instagram", "facebook", "whatsapp"],
    entities: {
      email: {
        id: "email",
        address: "kontakt@aea-dienste.de",
      },
      phone: {
        id: "phone",
        number: "+4915174338815",
      },
      instagram: {
        id: "instagram",
        link: "https://www.instagram.com/aea_dienste/",
      },
      facebook: {
        id: "facebook",
        link: "https://www.facebook.com/A-E-A-104037008900100",
      },
      whatsapp: {
        id: "whatsapp",
        link: "https://wa.me/+4915174338815",
      },
    },
  },
};

const contactDataSlice = createSlice(sliceInvoker());

function sliceInvoker() {
  return {
    name: "contactData",
    initialState,
    reducers: {},
    extrareducers: {},
  };
}

export const {
  selectAll: selectAllContactData,
  selectById: selectContactData,
} = contactDataAdapter.getSelectors((state) => state.contactData.data);

export default contactDataSlice.reducer;
