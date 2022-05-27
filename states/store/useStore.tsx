import create from "zustand";
import createModalSlice, { ModalSlice } from "./createModalSlice";
import createMovieSlice, { MovieSlice } from "./createMovieSlice";

export type MyState = ModalSlice & MovieSlice;

const useStore = create<MyState>((set, get) => ({
  ...createModalSlice(set, get),
  ...createMovieSlice(set, get),
}));

export default useStore;
