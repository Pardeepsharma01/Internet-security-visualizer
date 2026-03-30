# Internet Security Visualizer

A professional cybersecurity analytics dashboard built with Next.js (App Router), Tailwind CSS v4, Framer Motion, Chart.js, and Leaflet. 

It queries the Shodan API to allow users to analyze internet exposure and security risks for an IP address.

## Features

- **Dark Cyber Theme:** Custom styled neon UI built with modern Tailwind CSS v4 variables.
- **IP Analyzer:** Queries the global Shodan API to fetch deep host telemetry.
- **Risk Indicators:** Automatically classifies security risk based on open database or remote access ports.
- **Data Visualizations:** 
  - Dynamic Bar charts mapping open ports (Chart.js)
  - Interactive Geolocation maps tracking server IPs (Leaflet)
- **Fluid Animations:** Elegant page transitions and interactions using Framer Motion.
- **Responsive Architecture:** Fully functional layout across mobile, tablet, and desktop viewports.

## Deployment & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env.local` file in the root directory and add your Shodan API key:
   ```env
   SHODAN_API_KEY=your_shodan_api_key_here
   ```
   > Note: If no API key is provided, the dashboard will fallback to mock data to demonstrate functionality.

3. **Development Server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to interact with the dashboard.

4. **Production Build**
   ```bash
   npm run build
   npm run start
   ```
   The site is optimized and ready to deploy out-of-the-box on Vercel.

## Documentation

Full developer documentation is available .

| File | Description |
|---|---|
| [https://drive.google.com/file/d/1Yc-xveXACr7f-lDWUIVfu4d040JR_S7_/view?usp=sharing](https://drive.google.com/file/d/1Yc-xveXACr7f-lDWUIVfu4d040JR_S7_/view?usp=sharing) | Complete project documentation — overview, features, tech stack, folder structure, data flow, API integration, PDF generation logic, setup guide, challenges & fixes, and future improvements. |
