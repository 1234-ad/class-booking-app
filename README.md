# Class Booking App

A React Native Expo application for browsing and booking fitness classes. Built with TypeScript for the intern test assignment.

## Features

### Home Screen (Browse Classes)
- **Class Listings**: Display classes with name, level, instructor, and center
- **Level Filters**: Filter chips for Beginner/Intermediate/Advanced levels
- **Instructor Filter**: Dropdown modal to filter by instructor
- **Quick Book**: Optimistic booking with 15% simulated failure rate
- **Loading State**: 1-2 second spinner on app start
- **Empty State**: Message and "Clear Filters" button when no matches

### Profile Screen
- **User Information**: Avatar, name, mobile, credits, city, join date
- **Editable Name**: Modal interface for name editing
- **Local Storage**: Changes stored locally (no backend)

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/1234-ad/class-booking-app.git
   cd class-booking-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on device/simulator**
   - Scan QR code with Expo Go app (iOS/Android)
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ClassCard.tsx   # Individual class display
│   ├── FilterChips.tsx # Level filter chips
│   ├── InstructorFilter.tsx # Instructor dropdown
│   ├── LoadingSpinner.tsx   # Loading state
│   └── EmptyState.tsx  # No results state
├── screens/            # Main app screens
│   ├── HomeScreen.tsx  # Class browsing
│   └── ProfileScreen.tsx # User profile
├── navigation/         # Navigation setup
│   └── TabNavigator.tsx # Bottom tab navigation
├── types/             # TypeScript definitions
│   └── index.ts       # App-wide types
├── data/              # Mock data
│   └── mockData.ts    # Classes and user data
└── utils/             # Utility functions
    └── booking.ts     # Booking simulation
```

## Design Choices & Trade-offs

### Architecture
- **Component-based**: Modular, reusable components for maintainability
- **TypeScript**: Strong typing for better development experience and fewer runtime errors
- **React Navigation**: Standard navigation solution for React Native apps

### State Management
- **Local State**: Used React hooks for simplicity (useState, useEffect, useMemo)
- **No Redux**: Avoided complexity for this small app scope
- **Optimistic Updates**: Immediate UI feedback with rollback on failure

### UI/UX Decisions
- **Filter Chips**: Horizontal scrollable chips for level selection
- **Modal Dropdown**: Better UX than picker for instructor selection
- **Optimistic Booking**: Immediate feedback with proper error handling
- **Loading States**: Clear visual feedback during async operations

### Performance Optimizations
- **useMemo**: Memoized filtered results and instructor list
- **FlatList**: Efficient rendering for class lists
- **Minimal Re-renders**: Careful state structure to avoid unnecessary updates

### Error Handling
- **Booking Failures**: 15% simulated failure with rollback and user notification
- **Form Validation**: Name editing with empty string validation
- **Graceful Degradation**: Proper loading and empty states

## Technical Highlights

1. **TypeScript Integration**: Full type safety across components and data flow
2. **Responsive Design**: Works on various screen sizes
3. **Accessibility**: Proper touch targets and semantic elements
4. **Code Organization**: Clear separation of concerns and logical file structure
5. **Mock Data**: Realistic sample data for demonstration

## Future Enhancements

- Backend integration for real data persistence
- User authentication and session management
- Push notifications for booking confirmations
- Calendar integration for class scheduling
- Payment processing for class bookings
- Advanced filtering (date, location, price)

## Development Notes

- **No Backend**: All data is mocked and stored locally
- **Expo Managed**: Uses Expo managed workflow for simplicity
- **Cross-platform**: Runs on iOS, Android, and web
- **Development Speed**: Focused on clean, readable code over advanced optimizations

## Demo Features

The app demonstrates:
- ✅ Filtering functionality (level and instructor)
- ✅ Booking simulation with success/failure cases
- ✅ Profile editing with local persistence
- ✅ Loading and empty states
- ✅ Clean TypeScript implementation
- ✅ Responsive UI design