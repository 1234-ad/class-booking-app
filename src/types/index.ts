export type Level = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Class {
  id: string;
  name: string;
  level: Level;
  instructor: string;
  center: string;
  isBooked: boolean;
}

export interface User {
  id: string;
  name: string;
  mobile: string;
  credits: number;
  city: string;
  joinedDate: string;
  avatar?: string;
}

export interface Filters {
  level: Level | null;
  instructor: string | null;
}

export type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
};