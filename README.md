# Campus Placement Management System — Week 2

## Overview
A responsive React front-end for managing campus placement opportunities. Students can discover roles, view details, apply, use a dashboard, and track applications.

## Week 2 Requirements Covered
- 3+ connected views: Home, Jobs, Job Details, Dashboard, Applications
- Responsive UI for desktop and mobile
- React component-based structure
- Search and job-type filtering
- Application interaction with confirmation state
- Application-status filtering
- Responsive navigation
- Accessibility-friendly native controls and labels
- README and local run instructions

## Technology
React, JavaScript, HTML5, CSS3, React Router, Vite.

## Run locally
1. Extract the ZIP and open the folder in VS Code.
2. Open the integrated terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the URL shown by Vite, normally `http://localhost:5173`.

## Production check
Run `npm run build`, then `npm run preview`.

## Design decisions
The interface uses reusable data-driven job cards and separate routes for each major view. CSS Grid and media queries provide responsive layouts. Native form controls, labels, headings and clear button text support accessibility. Demo job data is centralized in the source and can later be replaced by an API.

## Testing checklist
- Home page opens
- Navigation links work
- Job search works
- Job type filter works
- Job details open
- Apply button changes to submitted state
- Dashboard opens
- Application status filters work
- Mobile navigation opens
- Layout adapts to small screens

## Future enhancements
Authentication, backend APIs, database persistence, resume upload, recruiter portal, real applications and notifications.

Prepared by: **Bhavani**
