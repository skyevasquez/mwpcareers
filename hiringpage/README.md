# Metro Wireless Plus Careers

A job application system for Metro Wireless Plus, built with Next.js and Convex.

## Features

- **Homepage**: Showcases career opportunities and company benefits
- **Careers Page**: Lists available positions and provides an application form
- **Admin Dashboard**: For managing and reviewing job applications
- **Responsive Design**: Works on mobile, tablet, and desktop devices

## Technology Stack

- **Frontend**: Next.js with App Router, React 19, TailwindCSS
- **Backend**: Convex for database, authentication, and file storage
- **Authentication**: Convex Auth with password authentication

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/metro-wireless-careers.git
   cd metro-wireless-careers
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Convex Backend

This application uses Convex as the backend service, connected to:
```
https://modest-corgi-600.convex.cloud
```

To work with the Convex backend, you'll need to:

1. Login to Convex:
   ```bash
   npx convex login
   ```

2. Deploy any changes to the backend:
   ```bash
   npx convex deploy
   ```

## Project Structure

- `app/` - Next.js pages and components using the App Router
  - `page.tsx` - Homepage showcasing career opportunities
  - `careers/` - Job listings and application form
  - `admin/` - Admin dashboard for reviewing applications
  - `signin/` - Authentication page for admin access
- `components/` - Reusable React components
- `convex/` - Backend code for the Convex database
  - `schema.ts` - Database schema
  - `jobApplications.ts` - Functions for managing job applications
  - `auth.ts` - Authentication configuration

## Building for Production

To build the application for production:

```bash
npm run build
npm start
```

## License

This project is licensed under the MIT License.
