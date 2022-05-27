import { DocumentData } from "firebase/firestore";
import { GetState, SetState } from "zustand";
import { Movie } from "../../typings";
import { MyState } from "./useStore";

// FIXME : check double typings for function

export interface MovieSlice {
  movie: Movie | DocumentData | null;
  setMovie: (movie: Movie | DocumentData | null) => void;
}

const createMovieSlice = (set: SetState<MyState>, get: GetState<MyState>) => ({
  movie: null,
  setMovie: (movie: Movie | DocumentData | null) => {
    set({
      movie: movie,
    });
  },
});

export default createMovieSlice;
