import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UserState {
  latestEvent: Event | null;
  selectedEvent: Event | null;
  // selectedSeats: any;
  cart: {
    concert: any[];
    sport: any[];
    art: any[];
    fun: any[];
    night: any[];
    fineDining: any[];
  };
  updateConcertCart: (value: any) => void;
  updateSportCart: (value: any) => void;
  updateArtCart: (value: any) => void;
  updateFunCart: (value: any) => void;
  updateNightCart: (value: any) => void;
  updateFineDiningCart: (value: any) => void;
  // updateSelectedSeats: (seats: any) => void;
  updateSelectedEvent: (event: Event) => void;
  updateLatestEvent: (event: Event) => void;
}

const useUserStore = create<UserState, [['zustand/persist', unknown]]>(
  persist(
    (set) => ({
      latestEvent: null,
      selectedEvent: null,
      // selectedSeats: [],
      cart: {
        concert: [],
        sport: [],
        art: [],
        fun: [],
        night: [],
        fineDining: [],
      },
      updateConcertCart: (seats) =>
        set((state) => ({
          ...state,
          cart: {
            ...state.cart,
            concert: seats,
          },
        })),
      updateSportCart: (seats) =>
        set((state) => ({
          ...state,
          cart: {
            ...state.cart,
            sport: seats,
          },
        })),
      updateArtCart: (seats) =>
        set((state) => ({
          ...state,
          cart: {
            ...state.cart,
            art: seats,
          },
        })),
      updateFunCart: (seats) =>
        set((state) => ({
          ...state,
          cart: {
            ...state.cart,
            fun: seats,
          },
        })),
      updateNightCart: (seats) =>
        set((state) => ({
          ...state,
          cart: {
            ...state.cart,
            night: seats,
          },
        })),
      updateFineDiningCart: (seats) =>
        set((state) => ({
          ...state,
          cart: {
            ...state.cart,
            fineDining: seats,
          },
        })),
      // updateSelectedSeats: (seats) =>
      //   set((state) => ({
      //     ...state,
      //     selectedSeats: seats,
      //   })),
      updateSelectedEvent: (event) =>
        set((state) => ({ ...state, selectedEvent: event })),
      updateLatestEvent: (event) =>
        set((state) => ({ ...state, latestEvent: event })),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
