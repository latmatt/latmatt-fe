export {};

declare global {
  export interface DingerPrebuilt {
    payload: string;
    hashValue: string;
  }
  export interface OtpPayload {
    phoneNumber: string;
    type: string;
  }

  export interface ValidateOtpPayload {
    phoneNumber: string;
    otp: string;
    type: string;
  }

  export interface RegisterPayload {
    firstName: string;
    lastName: string;
    username: string;
    countryCode: string;
    phoneNumber: string;
    password: string;
    mail: string;
    profileImage: string;
  }

  export interface LoginPayload {
    phoneNumber: string;
    password: string;
  }

  export interface ChangePasswordPayload {
    oldPassword: string;
    newPassword: string;
    phoneNumber: string;
  }

  export interface ResetPasswordPayload {
    newPassword: string;
    phoneNumber: string;
  }

  export interface DataType {
    label: string;
    value: string | null | undefined;
  }

  export interface EventListParamType {
    size?: number;
    page?: number;
    id?: string;
    eventTypeId?: string;
    eventGenreId?: string;
  }

  export interface EventDetailParamType {
    size?: number;
    page?: number;
    id?: string;
    eventTypeId?: string;
    eventGenreId?: string;
  }

  export interface EventLocationParamType {
    eventId: string;
  }

  export interface EventDateParamType {
    eventPlaceId: string;
  }

  export interface EventZoneParamType {
    eventDateId: string;
  }

  export interface EventSeatParamType {
    ticketRowId: string;
  }

  export interface Category {
    id: string;
    name: string;
    image: string;
    description: string;
  }

  export type EventStatus = 'ZONE_ROW_SEAT' | 'ZONE' | 'ZONE_SEAT';

  export interface Event {
    id: string;
    title: string;
    description: string;
    information: string;
    earlyAccessExpiredDate: string;
    userClickCount: number;
    image: string;
    coverImage: string;
    backgroundImage: string;
    status: null | EventStatus;
    eventDetails: EventDetail[];
    eventNotice?: EventNotice[];
    artists?: Artist[];
    eventGenre?: Genres[];
    tags?: EventTag[];
    socialMedia?: EventMedia[];
    highlights?: [];
  }

  export interface EventMedia {
    id: string;
    link: string;
    icon_url: string;
  }

  export interface EventTag {
    id: string;
    text: string;
    description: string;
  }

  export interface EventDetail {
    id: string;
    venueMap: string;
    location: {
      id: string;
      name: string;
      street: string;
      city: string;
      state: string;
      zipCode: string;
      mapLink: string;
      phone: string;
    };
    eventVenues: EventVenues[];
  }

  export interface EventVenues {
    id: string;
    startDate: null | string;
    endDate: null | string;
    ticketSeats: TicketSeats[];
  }

  export interface EventLocation {
    id: string;
    venueMap: string;
    location: {
      id: string;
      name: string;
      street: string;
      city: string;
      state: string;
      zipCode: string;
      mapLink: string;
      phone: string;
    };
  }

  export interface EventRows {
    id: string;
    name: string;
    description: string;
    price: number;
    serviceCharges: number;
    serviceChargesInPercent: number;
    tax: number;
    taxInPercent: number;
  }

  export interface EventZones {
    id: string;
    name: string;
    description: string;
    ticketRows: EventRows[];
  }

  export interface EventSeat {
    id: string;
    name: string;
    description: string;
    state: 'AVAILABLE' | 'PENDING' | 'NA';
  }

  export interface TicketSeats {
    id: string;
    name: string;
    description: string;
    price: number;
    ticketRow: {
      id: string;
      name: string;
      description: string;
      ticketZone: {
        id: string;
        name: string;
        description: string;
      };
    };
    ticketZone: {
      id: string;
      name: string;
      description: string;
    };
    eventType: {
      id: string;
      name: string;
      image: string;
      description: string;
    };
  }

  export interface EventNotice {
    id: string;
    title: string;
    description: string;
    iconUrl: string;
    link: null | string;
    eventType: string;
  }

  export interface Artist {
    id: string;
    name: string;
    shortName: string;
    reknown: string;
    profileImage: string;
    bio: string;
    dob: string;
    locations: [];
  }

  export interface Genres {
    id: string;
    name: string;
    image: string;
    description: string | null;
    eventType: {
      id: string;
      name: string;
      image: string;
      description: string;
    };
  }
}
