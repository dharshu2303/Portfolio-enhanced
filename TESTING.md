# Testing Checklist

Use this checklist to verify all functionality before deploying to production.

## Local Development Testing

### Prerequisites
- [ ] Node.js 18+ installed
- [ ] All dependencies installed (`npm install` in root and `backend/`)
- [ ] Backend running on port 5000
- [ ] Frontend running on port 3000

### Backend API Tests

#### Start Backend Server
```bash
cd backend
npm start
```

#### Test Endpoints

- [ ] **Health Check**
  ```bash
  curl http://localhost:5000
  ```
  Expected: `{"message":"Portfolio Backend API is running"}`

- [ ] **Get Projects**
  ```bash
  curl http://localhost:5000/api/projects
  ```
  Expected: JSON array with 4 projects

- [ ] **Get Certifications**
  ```bash
  curl http://localhost:5000/api/certifications
  ```
  Expected: JSON array with 17 certifications

### Frontend Tests

#### Start Frontend Server
```bash
npm run dev
```

#### Visual Tests (Browser: http://localhost:3000)

**Hero Section**
- [ ] Profile image loads correctly
- [ ] Name "DHARSHINI PRIYA A" displays with neon pink effect
- [ ] Role "Full Stack Developer & UI/UX Designer" displays
- [ ] "See My Work" button scrolls to projects
- [ ] "Let's Connect" button scrolls to contact
- [ ] Framer Motion animations play on load

**Navbar**
- [ ] Logo and brand name visible
- [ ] All navigation links work (smooth scroll)
- [ ] Navbar becomes solid on scroll
- [ ] Mobile menu button works
- [ ] Mobile menu closes after clicking link

**About Section**
- [ ] Personal information displays correctly
- [ ] Skill bars animate on scroll
- [ ] Progress bars show correct percentages (95%, 85%, 75%)
- [ ] Section reveals on scroll

**Skills Section**
- [ ] 4 skill categories display
- [ ] Icons render correctly
- [ ] Skill badges display
- [ ] Hover effects work on cards
- [ ] Section animates on scroll

**Projects Section**
- [ ] Loading spinner shows initially
- [ ] 4 projects load from backend (or fallback)
- [ ] Project images display correctly
- [ ] Technology badges render
- [ ] "View Project" links work
- [ ] Cards have hover effects
- [ ] Gradient animation on hover

**Why Hire Me Section**
- [ ] Video placeholder displays
- [ ] 4 reason cards show
- [ ] Icons render correctly
- [ ] Text paragraph displays
- [ ] Cards animate on scroll

**Education Section**
- [ ] 2 education entries display
- [ ] B.Tech information correct (CGPA 8.3)
- [ ] Higher Secondary information correct (89%)
- [ ] Icons display properly
- [ ] Cards animate from different directions

**Certifications Section**
- [ ] Loading spinner shows initially
- [ ] Certifications load from backend (or fallback)
- [ ] Auto-rotation works (every 3 seconds)
- [ ] Manual navigation dots work
- [ ] Certification images load
- [ ] Slider animation smooth

**Awards Section**
- [ ] 3 awards display
- [ ] Icons render correctly
- [ ] Text displays properly
- [ ] Cards animate on scroll

**Contact Section**
- [ ] Contact information displays
- [ ] Social links work (GitHub, LinkedIn)
- [ ] Form fields accept input
- [ ] Name validation works
- [ ] Email validation works
- [ ] Message field allows text
- [ ] Submit button submits to Formspree
- [ ] Success/error messages display

**Footer**
- [ ] Copyright year is current (2026)
- [ ] Social links work
- [ ] Email link works

**Chatbot**
- [ ] Chat button visible in bottom-left
- [ ] Chat window opens on click
- [ ] Initial greeting message displays
- [ ] Sample questions show
- [ ] Clicking sample question fills input
- [ ] User can type messages
- [ ] Typing indicator shows while processing
- [ ] Responses display correctly
- [ ] Scroll to bottom works
- [ ] Chat window minimizes

**Particles Background**
- [ ] Particles animate in background
- [ ] Neon colors visible (blue, pink, green, purple)
- [ ] Lines connect particles
- [ ] Particles respond to mouse hover
- [ ] Particles respond to click

**General**
- [ ] Bottom glow effect visible
- [ ] All Font Awesome icons render
- [ ] Neon glow effects work on text
- [ ] Gradient hover effects work
- [ ] Page scrolls smoothly

### Chat API Tests

#### Test Chat Endpoint
```bash
curl -X POST \
  http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Tell me about your projects"}'
```

Test various queries:
- [ ] "What are your technical skills?"
- [ ] "Tell me about your education"
- [ ] "Why should I hire you?"
- [ ] "What certifications do you have?"
- [ ] "How can I contact you?"

Expected: Relevant responses for each query

### Responsive Design Tests

#### Desktop (1920x1080)
- [ ] All sections fit properly
- [ ] Navigation horizontal
- [ ] Projects in 3 columns
- [ ] Certifications slider shows 3 items
- [ ] Text readable
- [ ] Images not distorted

#### Tablet (768x1024)
- [ ] Projects in 2 columns
- [ ] Navigation collapses to mobile menu
- [ ] Skill cards in 2 columns
- [ ] Certifications slider adjusts
- [ ] Text remains readable

#### Mobile (375x667)
- [ ] All sections stack vertically
- [ ] Mobile menu works
- [ ] Projects in 1 column
- [ ] Skills in 1 column
- [ ] Certifications show 1 at a time
- [ ] Chatbot window adjusts width
- [ ] Text remains readable
- [ ] Touch interactions work
- [ ] Buttons easily tappable

### Cross-Browser Tests

- [ ] **Chrome**: All features work
- [ ] **Firefox**: All features work
- [ ] **Safari**: All features work
- [ ] **Edge**: All features work
- [ ] **Mobile Safari**: All features work
- [ ] **Mobile Chrome**: All features work

### Performance Tests

#### Lighthouse Audit
Run in Chrome DevTools:
```
Chrome DevTools > Lighthouse > Generate Report
```

Target Scores:
- [ ] Performance: > 90
- [ ] Accessibility: > 90
- [ ] Best Practices: > 90
- [ ] SEO: > 90

#### Load Times
- [ ] Initial page load < 3 seconds
- [ ] API responses < 500ms
- [ ] Animations smooth (60fps)
- [ ] No layout shifts

### Build Tests

#### Production Build
```bash
npm run build
```

- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Bundle size reasonable (< 200KB First Load JS)

#### Start Production Server
```bash
npm start
```

- [ ] Production server starts
- [ ] All features work in production mode
- [ ] Static pages generated correctly

### Security Tests

#### CodeQL Scan
```bash
# Run through GitHub Actions or locally
```

- [ ] No security vulnerabilities found
- [ ] No exposed API keys
- [ ] No SQL injection risks
- [ ] No XSS vulnerabilities

#### Environment Variables
- [ ] `.env.local` not committed to git
- [ ] API keys stored securely
- [ ] `.env.example` provided
- [ ] Production env vars documented

### Integration Tests

#### Backend Integration
- [ ] Frontend fetches projects from backend
- [ ] Frontend fetches certifications from backend
- [ ] Fallback works when backend unavailable
- [ ] Loading states display correctly
- [ ] Error states handled gracefully

#### Third-Party Integrations
- [ ] Formspree form submission works
- [ ] Font Awesome icons load from CDN
- [ ] Particles.js loads from CDN
- [ ] OpenAI API works (if configured)
- [ ] Fallback responses work when API unavailable

### Accessibility Tests

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Enter activates buttons/links
- [ ] Focus indicators visible
- [ ] Skip links work (if implemented)

#### Screen Reader
- [ ] Alt text on all images
- [ ] Semantic HTML used
- [ ] ARIA labels where needed
- [ ] Form labels associated correctly

#### Color Contrast
- [ ] Text readable on backgrounds
- [ ] Neon effects don't obscure text
- [ ] Buttons have sufficient contrast

### Error Handling Tests

#### Network Errors
- [ ] Backend unavailable → Fallback data loads
- [ ] API timeout → Fallback response
- [ ] Image load failure → Graceful degradation

#### Form Validation
- [ ] Empty name → Error message
- [ ] Invalid email → Error message
- [ ] Empty message → Error message
- [ ] All fields valid → Submission succeeds

#### Edge Cases
- [ ] No projects → "No projects" message
- [ ] No certifications → "No certifications" message
- [ ] Very long chat message → Handles correctly
- [ ] Multiple rapid chat messages → Handles correctly

## Production Testing (After Deployment)

### Deployment Verification

#### Frontend (Vercel)
- [ ] Site accessible at production URL
- [ ] HTTPS enabled
- [ ] Custom domain works (if configured)
- [ ] Environment variables set correctly

#### Backend (Railway/Render)
- [ ] API accessible at production URL
- [ ] Endpoints return correct data
- [ ] CORS allows frontend domain
- [ ] Server stays awake (or wakes on request)

### Production Integration
- [ ] Frontend connects to production backend
- [ ] Projects load from production API
- [ ] Certifications load from production API
- [ ] Chat API works in production
- [ ] Form submits successfully

### Production Performance
- [ ] Page loads quickly worldwide (test from different locations)
- [ ] API responses fast
- [ ] No CORS errors in console
- [ ] No 404 errors for assets

### Monitoring Setup
- [ ] Vercel Analytics enabled (optional)
- [ ] Error tracking configured (optional)
- [ ] Uptime monitoring setup (optional)

## Sign-Off

### Development Team
- [ ] All features implemented
- [ ] All tests passed
- [ ] Documentation complete
- [ ] Code reviewed

### Quality Assurance
- [ ] Functionality verified
- [ ] Performance acceptable
- [ ] Security checked
- [ ] Accessibility validated

### Ready for Production
- [ ] All checklist items completed
- [ ] No critical issues
- [ ] Deployment guide reviewed
- [ ] Rollback plan in place

---

**Date Tested**: _________________

**Tested By**: _________________

**Environment**: ☐ Local ☐ Staging ☐ Production

**Status**: ☐ Pass ☐ Fail

**Notes**: _________________________________________________
