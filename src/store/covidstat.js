import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: "stats",
    initialState: {
        list: [],
        loading: false,
    },

    reducers: {
        statsRequested: (stats, action) => {
            stats.loading = true;
        },

        statsReceived: (stats, action) => {
            stats.list = action.payload;
            stats.loading = false;
        },

        statsRequestFailed: (stats, action) => {
            stats.loading = false;
        },
    },
});

export default slice.reducer;

const { statsRequested, statsReceived, statsRequestFailed } = slice.actions;

const url = "/api";

export const loadstats = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            onStart: statsRequested.type,
            onSuccess: statsReceived.type,
            onError: statsRequestFailed.type,
        })
    );
};