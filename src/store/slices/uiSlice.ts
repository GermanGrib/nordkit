import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  isBurgerOpen: boolean;
  isDropdownCatalogOpen: boolean;
}

const initialState: UiState = {
  isBurgerOpen: false,
  isDropdownCatalogOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openBurger(state) {
      state.isBurgerOpen = true;
    },
    closeBurger(state) {
      state.isBurgerOpen = false;
    },
    toggleBurger(state) {
      state.isBurgerOpen = !state.isBurgerOpen;
    },
    openDropdownCatalog(state) {
      state.isDropdownCatalogOpen = true;
    },
    closeDropdownCatalog(state) {
      state.isDropdownCatalogOpen = false;
    },
    toggleDropdownCatalog(state) {
      state.isDropdownCatalogOpen = !state.isDropdownCatalogOpen;
    },
  },
});

export const {
  openBurger,
  closeBurger,
  toggleBurger,
  openDropdownCatalog,
  closeDropdownCatalog,
  toggleDropdownCatalog,
} = uiSlice.actions;
export default uiSlice.reducer;
