# Metro Wireless Careers

A Next.js application for Metro Wireless Plus job applications.

## Features

- Job listings display
- Application form with validation
- Resume upload functionality
- Netlify Forms integration for application submissions

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/metro-wireless-careers.git
cd metro-wireless-careers
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory with the following variables:
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
RECIPIENT_EMAIL=careers@metrowirelessplus.com
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file contains the necessary configuration.

### Deploy to Netlify

1. Push your code to a GitHub repository
2. Connect your repository to Netlify
3. Configure the environment variables in the Netlify dashboard

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Nodemailer
- Formidable (for file uploads)

## License

This project is licensed under the MIT License.