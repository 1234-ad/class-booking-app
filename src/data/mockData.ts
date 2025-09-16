import { Class, User } from '../types';

export const mockClasses: Class[] = [
  {
    id: '1',
    name: 'Morning Yoga Flow',
    level: 'Beginner',
    instructor: 'Sarah Johnson',
    center: 'Downtown Wellness',
    isBooked: false,
  },
  {
    id: '2',
    name: 'HIIT Cardio Blast',
    level: 'Intermediate',
    instructor: 'Mike Chen',
    center: 'FitZone Central',
    isBooked: false,
  },
  {
    id: '3',
    name: 'Advanced Pilates',
    level: 'Advanced',
    instructor: 'Emma Rodriguez',
    center: 'Core Studio',
    isBooked: false,
  },
  {
    id: '4',
    name: 'Beginner Strength Training',
    level: 'Beginner',
    instructor: 'David Kim',
    center: 'PowerGym',
    isBooked: false,
  },
  {
    id: '5',
    name: 'Intermediate Yoga',
    level: 'Intermediate',
    instructor: 'Sarah Johnson',
    center: 'Downtown Wellness',
    isBooked: false,
  },
  {
    id: '6',
    name: 'CrossFit Challenge',
    level: 'Advanced',
    instructor: 'Alex Thompson',
    center: 'Elite Fitness',
    isBooked: false,
  },
  {
    id: '7',
    name: 'Gentle Stretching',
    level: 'Beginner',
    instructor: 'Lisa Park',
    center: 'Zen Center',
    isBooked: false,
  },
  {
    id: '8',
    name: 'Boxing Fundamentals',
    level: 'Intermediate',
    instructor: 'Mike Chen',
    center: 'FitZone Central',
    isBooked: false,
  },
];

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  mobile: '+1 (555) 123-4567',
  credits: 8,
  city: 'San Francisco',
  joinedDate: 'January 2024',
};