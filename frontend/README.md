# Payment Management System

A modern React application for managing and tracking various types of payments. Built with React, TypeScript, and TailwindCSS.

## Features

- 📋 View and manage different types of payments (salary, bonus, commission, etc.)
- 🔍 Search and filter payments
- 📱 Responsive design
- 📊 Pagination support
- 🎨 Modern UI with TailwindCSS
- 🔄 Real-time updates with React Query
-  [ ] testing pyramid(E2E, integration, unit, etc.)
-  [ ] add state management(we can add it later now we don't need it)
## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **State Management:** React Query
- **Routing:** React Router v6
- **HTTP Client:** Axios
- **UI Components:** Custom components with TailwindCSS
- **Build Tool:** Vite

## Project Structure

```
frontend/toman-task/
├── src/
│   ├── components/
│   │   ├── common/           # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── Select.tsx
│   │   │   └── Spinner.tsx
│   │   ├── layout/          # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Layout.tsx
│   │   └── payments/        # Payment-specific components
│   │       ├── PaymentCard.tsx
│   │       ├── PaymentFilters.tsx
│   │       ├── PaymentList.tsx
│   │       └── PaymentSearch.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useDebounce.ts
│   │   ├── usePagination.ts
│   │   └── useUrlState.ts
│   ├── pages/               # Page components
│   │   ├── PaymentDetails.tsx
│   │   └── PaymentList.tsx
│   ├── services/           # API services
│   │   └── api.ts
│   ├── types/              # TypeScript type definitions
│   │   └── payment.ts
│   ├── utils/              # Utility functions and constants
│   │   ├── constants.ts
│   │   └── helpers.ts
│   ├── App.tsx
│   └── main.tsx
├── postcss.config.js
└── tailwind.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd frontend/toman-task
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript type checking

## Key Features Explained

### Payment Management

The application supports various types of payments:
- Salary
- Bonus
- Commission
- Transportation
- Overtime

Each payment includes:
- Payment ID
- Type
- Value
- Paid Date
- Status (success/failed/pending)
- Description

### Filtering and Search

Users can filter payments by:
- Payment type
- Payment status
- Search text (searches through payment descriptions)

### Pagination

The application includes a custom pagination system with:
- Page size control
- First/Last page navigation
- Previous/Next navigation
- Dynamic page number display

### URL State Management

All filters and pagination state are maintained in the URL, allowing for:
- Shareable filtered views
- Browser navigation support
- Persistent filter state

### API Integration

The application uses React Query for API integration, providing:
- Automatic caching
- Background data updates
- Loading states
- Error handling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Commit Convention

This project follows the Conventional Commits specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `refactor:` - Code changes that neither fix bugs nor add features
- `style:` - Changes that don't affect code meaning
- `docs:` - Documentation only changes
- `test:` - Adding or modifying tests
- `chore:` - Changes to build process or auxiliary tools

## License

This project is licensed under the MIT License - see the LICENSE file for details