import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UserState {
  latestEvent: Event | null;
  selectedEvent: Event | null;
  selectedSeats: EventSeat[];
  updateSelectedSeats: (seats: EventSeat[]) => void;
  updateSelectedEvent: (event: Event) => void;
  updateLatestEvent: (event: Event) => void;
}

const useUserStore = create<UserState, [['zustand/persist', unknown]]>(
  persist(
    (set) => ({
      latestEvent: null,
      selectedEvent: null,
      selectedSeats: [],
      updateSelectedSeats: (seats) =>
        set((state) => ({
          ...state,
          selectedSeats: seats,
        })),
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
