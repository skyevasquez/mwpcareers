#!/bin/bash

# Metro Wireless Plus Careers - Deployment Script

echo "====== Metro Wireless Plus Careers Deployment ======"
echo "This script will help you deploy the application"
echo

# Step 1: Deploy Convex backend
echo "Step 1: Deploying Convex backend..."
npx convex deploy

# Step 2: Build Next.js frontend
echo
echo "Step 2: Building Next.js frontend..."
npm run build

echo
echo "====== Deployment Preparation Complete ======"
echo
echo "Your Convex backend is deployed to: https://modest-corgi-600.convex.cloud"
echo
echo "To deploy your frontend to Vercel:"
echo "1. Install Vercel CLI: npm install -g vercel"
echo "2. Run: vercel"
echo
echo "To deploy your frontend to Netlify:"
echo "1. Install Netlify CLI: npm install -g netlify-cli"
echo "2. Run: netlify deploy"
echo
echo "Make sure your deployment has this environment variable set:"
echo "NEXT_PUBLIC_CONVEX_URL=https://modest-corgi-600.convex.cloud"
echo 