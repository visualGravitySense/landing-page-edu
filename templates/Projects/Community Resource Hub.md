# Community Resource Hub - Project Plan

## Project Overview

The Community Resource Hub will be a comprehensive website serving as a one-stop platform for local community information including interactive maps, event calendars, service directories, local news, and more. The project will demonstrate HTML, CSS, JavaScript, and UX/UI skills while creating a potentially useful tool for an actual community.

## Timeline (2-Week Plan)

### Planning & Research

- Team formation and role assignments
- Community needs assessment and user research
- Competitor analysis
- Define core features and scope
- Create user personas and journey maps

### Design System & Wireframing

- Establish design system (typography, colors, components)
- Create site map and information architecture
- Low-fidelity wireframes for all major sections
- Design review and iteration

### UI Design & Prototyping

- High-fidelity mockups for all sections
- Interactive prototype development
- User testing and refinement
- Finalize design assets

### Development & Implementation

- Front-end development of all sections
- Integration of features
- Content creation and population
- Cross-browser testing
- Responsive design implementation

### Testing & Refinement

- Usability testing with target users
- Bug fixes and improvements
- Performance optimization
- Accessibility checks and improvements

### Final Polishing & Presentation

- Final bug fixes and refinements
- Documentation completion
- Portfolio preparation
- Final presentation and demonstration

## Team Structure & Responsibilities

### Core Sections (One Group Per Section)

1. **Homepage & Navigation** - Site intro, main navigation, search functionality
2. **Interactive Map** - Map interface with filtered points of interest
3. **Events Calendar** - Upcoming events display with filtering and details
4. **Service Directory** - Categorized business/service listings with search
5. **Local News & Updates** - Community news, announcements, featured stories
6. **Community Forum** - Discussion boards or Q&A section
7. **Resource Library** - Downloadable forms, guides, and educational materials
8. **Admin Dashboard** - Backend for content management (simplified)

### Cross-Cutting Responsibilities

- **Design System Maintenance**: students responsible for maintaining design consistency
- **User Testing Coordination**: students leading user testing sessions
- **Documentation**: students coordinating project documentation
- **Integration & Quality Assurance**: students ensuring all components work together

## Technical Specifications

### Front-End

- HTML5, CSS3 (with Flexbox/Grid)
- Vanilla JavaScript or lightweight framework (e.g., Alpine.js)
- Responsive design using mobile-first approach
- SASS/SCSS for CSS preprocessing
- Local storage for user preferences

### Interactive Elements

- Map Integration: Leaflet.js with OpenStreetMap or Google Maps API
- Calendar: FullCalendar or custom calendar implementation
- Form validation and submission handling
- Search functionality with filtering options
- Modal windows for detailed information

### Optional Advanced Features

- User authentication (simplified)
- Comment/rating system
- Weather widget integration
- Accessibility features (screen reader support, keyboard navigation)
- Language toggle (if multilingual community)

## Deliverables

1. Fully functional, responsive website
2. Design system documentation
3. User research findings and personas
4. Wireframes and prototypes
5. Source code with comments
6. User testing results and iterations
7. Individual portfolio pieces for each student
8. Presentation slides and demo

## Success Metrics

- Site works across devices and major browsers
- Passes accessibility standards (WCAG)
- Loads efficiently (performance testing)
- Positive user testing feedback
- Each student has clear contributions to showcase
- Design system is consistent throughout

## Portfolio Presentation

Each student should prepare the following for their portfolios:

- Case study of their section including problem, approach, solution
- Documentation of their design process
- Examples of collaborative problem-solving
- Before/after of iterations based on feedback
- Technical challenges overcome
- Individual and team contributions


---


### Planning & Research
#### Team formation and role assignments:

# Planning & Research: Team Formation for Tallinn IT Classes

Here's a tailored approach to forming teams and assigning roles for your Community Resource Hub project, specifically designed for IT students in Tallinn with backgrounds in analytics, web design, and general IT:

## Team Formation Strategy

### Skill Assessment (Day 1)

- Conduct a brief survey to identify each student's:
    - Technical strengths (HTML/CSS proficiency, JavaScript experience, design skills)
    - Professional interests (UX/UI, data visualization, front-end development)
    - Previous project experience
    - Career goals (to align project roles with portfolio needs)

### Balanced Team Structure (8 Students)

**Core Production Team (5 students)**

1. **UX Lead** - Student with strongest user experience interest/background
    
    - Responsible for: User personas, journey maps, wireframing
    - Background match: Design-oriented with analytical thinking
2. **UI Designer** - Student with visual design aptitude
    
    - Responsible for: Visual design system, UI components, mockups
    - Background match: Creative with attention to detail
3. **Front-End Developer (Navigation & Core)** - Student with HTML/CSS/JS strength
    
    - Responsible for: Homepage, navigation, overall structure
    - Background match: Strong coding fundamentals
4. **Interactive Features Developer** - Student with JavaScript interest
    
    - Responsible for: Map implementation, calendar functionality
    - Background match: Problem-solver with programming interest
5. **Data Structure Specialist** - Student with analytics background
    
    - Responsible for: Service directory, resource organization, data schema
    - Background match: Analytics student with structured thinking

**Special Focus Team (3 students)** 6. **Local Integration Specialist** - Student with Tallinn knowledge

- Responsible for: Localizing content, Estonian language support
- Background match: Local student with cultural awareness

7. **Testing & Analytics Coordinator** - Student with analytical skills
    
    - Responsible for: User testing, performance tracking, improvement recommendations
    - Background match: Analytics student with testing interest
8. **Documentation & Technical Writer** - Student with strong communication
    
    - Responsible for: Project documentation, user guides, accessibility standards
    - Background match: Organized with good writing skills

## Collaboration Framework

### Cross-Functional Pairs

- Form "buddy pairs" across different roles to ensure collaboration:
    - UX Lead + Front-End Developer
    - UI Designer + Interactive Features Developer
    - Data Specialist + Testing Coordinator
    - Local Integration + Documentation Specialist

### Regular Knowledge Sharing

- Implement weekly knowledge-sharing sessions where students explain their work
- Create paired learning opportunities (e.g., designer teaches developer about visual principles)

## Tallinn-Specific Considerations

### Local Resources to Include

- Estonian digital services integration (e-Estonia connections)
- Tallinn public transportation data
- Local tech company directory (potential for future internships/jobs)
- University and educational resources
- Tech meetups and events calendar

### Multi-language Support Planning

- Design with Estonian and English language support in mind
- Consider Russian language support if relevant to your student population

## Next Steps for Implementation

1. Create student skills assessment survey (use Google Forms or similar)
2. Hold a kickoff meeting to explain project scope and roles
3. Facilitate a team formation workshop with icebreakers
4. Have students rank their role preferences
5. Assign final roles balancing preferences and required skills
6. Establish initial team communication channels (Slack, Discord, etc.)
7. Schedule first working session to begin design system discussions



---


# Task 1

The Fogg Behavior Model (B=MAP: Behavior = Motivation, Ability, Prompt) can be implemented through several HTML UI components that target each of these three elements. Here are the most common UI elements that leverage this behavioral framework:

### Motivation-Focused Components

- **Progress bars**: Show advancement toward goals
- **Reward animations**: Visual feedback when tasks are completed
- **Testimonials/social proof sections**: Display others' success
- **Countdown timers**: Create urgency
- **Before/after comparisons**: Showcase potential results

### Ability-Focused Components

- **Step-by-step wizards**: Break complex tasks into manageable steps
- **Auto-fill forms**: Reduce user effort
- **Toggle switches**: Simplify binary choices
- **Search autocomplete**: Make finding information easier
- **Keyboard shortcuts**: Speed up interactions for power users

### Prompt-Focused Components

- **Call-to-action buttons**: Direct, visually prominent buttons
- **Toast notifications**: Timely reminders
- **Modal dialogs**: Force attention to important messages
- **Tooltip hints**: Contextual guidance
- **Notification badges**: Alert users to new information

The most effective UIs combine elements from all three categories to create experiences where users are motivated, find tasks simple to complete, and receive appropriate prompts at the right time.


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🔥 ANTI-DESIGN MOTIVATION 🔥</title>
    <style>
        body {
            font-family: "Comic Sans MS", cursive, sans-serif;
            background: repeating-linear-gradient(45deg, #ff00ff, #00ffff, #ffff00);
            cursor: url('/api/placeholder/32/32'), auto;
            margin: 0;
            overflow-x: hidden;
        }

        h1 {
            font-size: 3rem;
            text-shadow: 5px 5px 0 red, 10px 10px 0 blue;
            animation: rainbow 2s infinite;
            transform: rotate(-3deg);
            text-align: center;
        }

        .container {
            max-width: 1000px;
            margin: 20px auto;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.8);
            border: 8px dashed purple;
            box-shadow: 12px 12px 0 black;
        }

        .section {
            margin: 40px 0;
            padding: 20px;
            border-radius: 20px;
            position: relative;
            background-color: #ffffcc;
            border: 5px dotted red;
        }

        .section h2 {
            transform: skew(-10deg, 5deg);
            color: darkred;
            font-size: 2.5rem;
            text-decoration: underline wavy blue;
            text-align: center;
        }

        /* Progress Bar */
        .progress-container {
            width: 100%;
            background-color: #000;
            border: 3px solid lime;
            padding: 5px;
            margin: 20px 0;
            position: relative;
        }

        .progress-bar {
            height: 30px;
            width: 10%;
            background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
            text-align: center;
            line-height: 30px;
            color: white;
            font-weight: bold;
            transition: width 0.5s;
            animation: progress 3s forwards, shimmer 1s infinite;
        }

        .progress-text {
            position: absolute;
            width: 100%;
            text-align: center;
            color: white;
            font-weight: bold;
            line-height: 30px;
            text-shadow: 2px 2px 2px black;
        }

        /* Reward Animation */
        .reward-container {
            text-align: center;
            margin: 20px 0;
        }

        .reward-button {
            padding: 15px 30px;
            font-size: 1.5rem;
            background-color: #ff00ff;
            border: 5px solid yellow;
            color: white;
            cursor: pointer;
            font-weight: bold;
            transform: rotate(5deg);
            animation: pulse 2s infinite;
        }

        .reward-animation {
            display: none;
            position: relative;
            height: 200px;
        }

        .star {
            position: absolute;
            font-size: 3rem;
            animation: fly 2s ease-out;
        }

        /* Testimonials */
        .testimonials {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        .testimonial {
            padding: 20px;
            width: 200px;
            background-color: #ccffcc;
            border: 3px solid blue;
            transform: rotate(random(5) - 2.5deg);
            box-shadow: 5px 5px 0 #000;
            animation: wobble 3s infinite;
        }

        .testimonial img {
            border-radius: 50%;
            border: 3px solid gold;
            display: block;
            margin: 0 auto 10px auto;
        }

        .testimonial-text {
            font-style: italic;
            text-align: center;
            font-size: 1.2rem;
        }

        .testimonial-author {
            text-align: right;
            font-weight: bold;
            color: darkblue;
            margin-top: 10px;
        }

        /* Countdown Timer */
        .countdown {
            text-align: center;
            font-size: 2rem;
            padding: 20px;
            background-color: black;
            color: #ff0000;
            border-radius: 10px;
            font-family: "Courier New", monospace;
            border: 5px ridge gold;
            margin: 20px 0;
        }

        .countdown-title {
            font-size: 1.5rem;
            color: white;
            text-transform: uppercase;
            margin-bottom: 10px;
            animation: blink 1s infinite;
        }

        /* Before/After */
        .before-after {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin: 20px 0;
        }

        .comparison {
            position: relative;
            border: 5px solid cyan;
            padding: 10px;
            background-color: #ffccff;
        }

        .before, .after {
            padding: 20px;
            text-align: center;
        }

        .before {
            background-color: #ffcccc;
        }

        .after {
            background-color: #ccffcc;
        }

        .comparison-label {
            position: absolute;
            top: -15px;
            left: 10px;
            padding: 5px 10px;
            background-color: #ff00ff;
            color: white;
            font-weight: bold;
            transform: rotate(-5deg);
        }

        .blink {
            animation: blink 1s infinite;
        }

        .shake {
            animation: shake 0.5s infinite;
        }

        .rotate {
            animation: rotate 3s infinite linear;
        }

        /* Animations */
        @keyframes rainbow {
            0% { color: red; }
            14% { color: orange; }
            28% { color: yellow; }
            42% { color: green; }
            57% { color: blue; }
            71% { color: indigo; }
            85% { color: violet; }
            100% { color: red; }
        }

        @keyframes pulse {
            0% { transform: scale(1) rotate(5deg); }
            50% { transform: scale(1.1) rotate(-2deg); }
            100% { transform: scale(1) rotate(5deg); }
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }

        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        @keyframes wobble {
            0%, 100% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
        }

        @keyframes progress {
            from { width: 10%; }
            to { width: 100%; }
        }

        @keyframes shimmer {
            0% { opacity: 0.8; }
            50% { opacity: 1; }
            100% { opacity: 0.8; }
        }

        @keyframes fly {
            0% { transform: translateY(0) rotate(0); opacity: 1; }
            100% { transform: translateY(-150px) rotate(360deg); opacity: 0; }
        }

        /* Anti-Design Extras */
        .marquee {
            background-color: yellow;
            color: red;
            white-space: nowrap;
            padding: 10px;
            font-weight: bold;
            overflow: hidden;
        }

        .marquee-content {
            display: inline-block;
            animation: marquee 10s linear infinite;
        }

        @keyframes marquee {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
        }

        .geocities-button {
            background: linear-gradient(to bottom, #ff0000, #ffff00);
            border: 3px outset silver;
            padding: 5px 10px;
            font-weight: bold;
            color: blue;
            text-decoration: none;
            display: inline-block;
            margin: 5px;
            box-shadow: 3px 3px 0 black;
        }

        #visitor-counter {
            font-family: "Digital", monospace;
            background-color: black;
            color: red;
            padding: 5px 10px;
            border: 2px inset gray;
            display: inline-block;
        }

        footer {
            text-align: center;
            padding: 20px;
            background-color: #000000;
            color: white;
            font-size: 0.8rem;
            margin-top: 40px;
            border-top: 10px dotted lime;
        }
    </style>
</head>
<body>
    <div class="marquee">
        <div class="marquee-content">
            🌟 WELCOME TO THE MOTIVATION ZONE! 💪 GET READY TO BE INSPIRED! 🚀 THIS IS AN ANTI-DESIGN MASTERPIECE! 🎨 SCROLL DOWN FOR MOTIVATION OVERLOAD! 🔥
        </div>
    </div>

    <div class="container">
        <h1>💪 ANTI-DESIGN MOTIVATION COMPONENTS! 🚀</h1>
        
        <div class="section">
            <h2>1. PROGRESS BARS!!! 📊</h2>
            <p>Watch as your progress magically increases! Nothing is more motivating than seeing visual progress toward your goals! <span class="blink">WOW!</span></p>
            
            <div class="progress-container">
                <div class="progress-bar" id="motivationBar"></div>
                <div class="progress-text">MOTIVATION LOADING: 10%</div>
            </div>
            
            <button class="geocities-button" onclick="incrementProgress()">CLICK TO BOOST MOTIVATION!!!</button>
        </div>
        
        <div class="section">
            <h2>2. REWARD ANIMATIONS!!! 🎉</h2>
            <p>Get instant gratification with these <span class="shake">AMAZING</span> reward animations! Your brain will thank you with dopamine!</p>
            
            <div class="reward-container">
                <button class="reward-button" onclick="showReward()">CLAIM YOUR REWARD!!!</button>
                <div class="reward-animation" id="rewardAnimation"></div>
            </div>
        </div>
        
        <div class="section">
            <h2>3. TESTIMONIALS!!! 👥</h2>
            <p>See how others are <span class="rotate">ABSOLUTELY CRUSHING IT</span> with our anti-design motivation techniques!</p>
            
            <div class="testimonials">
                <div class="testimonial">
                    <img src="/api/placeholder/80/80" alt="Happy User">
                    <div class="testimonial-text">"This anti-design page increased my motivation by 500%! My eyes hurt but my spirit soars!"</div>
                    <div class="testimonial-author">- Jane D.</div>
                </div>
                
                <div class="testimonial">
                    <img src="/api/placeholder/80/80" alt="Another Happy User">
                    <div class="testimonial-text">"I couldn't stop staring at the progress bar. Now I'm CEO of 7 companies!"</div>
                    <div class="testimonial-author">- Mike T.</div>
                </div>
                
                <div class="testimonial">
                    <img src="/api/placeholder/80/80" alt="Yet Another Happy User">
                    <div class="testimonial-text">"The blinking text hypnotized me into productivity. Thanks, Anti-Design!"</div>
                    <div class="testimonial-author">- Sarah P.</div>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h2>4. COUNTDOWN TIMERS!!! ⏱️</h2>
            <p>Nothing creates urgency like a <span class="blink">countdown timer</span>! Act now or miss out FOREVER!</p>
            
            <div class="countdown">
                <div class="countdown-title">SPECIAL OFFER EXPIRES IN:</div>
                <div id="countdownTimer">05:00</div>
            </div>
            
            <button class="geocities-button" onclick="resetCountdown()">RESET TIMER (BUT WHY WOULD YOU?)</button>
        </div>
        
        <div class="section">
            <h2>5. BEFORE/AFTER COMPARISONS!!! 📸</h2>
            <p>Visual proof that our <span class="shake">ANTI-DESIGN METHODS</span> work wonders! See the transformation!</p>
            
            <div class="before-after">
                <div class="comparison">
                    <div class="comparison-label">BEFORE</div>
                    <div class="before">
                        <img src="/api/placeholder/200/150" alt="Before">
                        <p>Boring, unmotivated, plain design. Yuck!</p>
                    </div>
                </div>
                
                <div class="comparison">
                    <div class="comparison-label">AFTER</div>
                    <div class="after">
                        <img src="/api/placeholder/200/150" alt="After">
                        <p>EXTREME MOTIVATION! COLOR OVERLOAD! DESIGN REBELLION!</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
            <div>
                <span style="font-weight: bold;">Visitor Count:</span>
                <span id="visitor-counter">133769</span>
            </div>
            
            <div style="margin-top: 20px;">
                <button class="geocities-button" onclick="alert('You are now SUPER motivated!')">GET MOTIVATED NOW!</button>
                <button class="geocities-button" onclick="window.print()">PRINT THIS PAGE FOR OFFLINE MOTIVATION!</button>
                <button class="geocities-button" onclick="document.body.style.background = 'linear-gradient(90deg, red, blue)'">CHANGE BACKGROUND!</button>
            </div>
        </div>
    </div>
    
    <footer>
        <div>© 2025 Anti-Design Motivation Industries</div>
        <div>Best viewed with Internet Explorer 6 at 800x600 resolution</div>
        <div>
            <button class="geocities-button">HOME</button>
            <button class="geocities-button">GUESTBOOK</button>
            <button class="geocities-button">UNDER CONSTRUCTION</button>
        </div>
    </footer>

    <script>
        // Progress bar functionality
        let progress = 10;
        function incrementProgress() {
            if (progress < 100) {
                progress += 10;
                document.getElementById('motivationBar').style.width = progress + '%';
                document.querySelector('.progress-text').textContent = 'MOTIVATION LOADING: ' + progress + '%';
                
                if (progress >= 100) {
                    alert('CONGRATULATIONS! YOU ARE NOW 100% MOTIVATED!');
                    document.querySelector('.progress-text').textContent = 'MOTIVATION COMPLETE! YOU DID IT!';
                }
            }
        }
        
        // Reward animation
        function showReward() {
            const rewardContainer = document.getElementById('rewardAnimation');
            rewardContainer.style.display = 'block';
            rewardContainer.innerHTML = '';
            
            // Create stars
            const emojis = ['🌟', '🎉', '🏆', '💯', '🔥', '👏', '💪'];
            for (let i = 0; i < 20; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 0.5 + 's';
                rewardContainer.appendChild(star);
            }
            
            setTimeout(() => {
                rewardContainer.style.display = 'none';
            }, 2000);
        }
        
        // Countdown timer
        let countdownMinutes = 5;
        let countdownSeconds = 0;
        let countdownInterval;
        
        function startCountdown() {
            countdownInterval = setInterval(updateCountdown, 1000);
        }
        
        function updateCountdown() {
            if (countdownSeconds === 0) {
                if (countdownMinutes === 0) {
                    clearInterval(countdownInterval);
                    document.getElementById('countdownTimer').textContent = "EXPIRED!";
                    document.getElementById('countdownTimer').style.color = "#ff0000";
                    document.getElementById('countdownTimer').className = "blink";
                    return;
                }
                countdownMinutes--;
                countdownSeconds = 59;
            } else {
                countdownSeconds--;
            }
            
            const minutesDisplay = String(countdownMinutes).padStart(2, '0');
            const secondsDisplay = String(countdownSeconds).padStart(2, '0');
            document.getElementById('countdownTimer').textContent = `${minutesDisplay}:${secondsDisplay}`;
        }
        
        function resetCountdown() {
            clearInterval(countdownInterval);
            countdownMinutes = 5;
            countdownSeconds = 0;
            document.getElementById('countdownTimer').textContent = "05:00";
            document.getElementById('countdownTimer').style.color = "#ff0000";
            document.getElementById('countdownTimer').className = "";
            startCountdown();
        }
        
        // Initialize
        window.onload = function() {
            startCountdown();
            
            // Increment visitor counter for fun
            setInterval(() => {
                const counter = document.getElementById('visitor-counter');
                counter.textContent = parseInt(counter.textContent) + 1;
            }, 30000);
        };
    </script>
</body>
</html>

```

I've created an anti-design HTML page showcasing motivation-focused components as requested! This example deliberately breaks conventional design rules to demonstrate HTML capabilities in an educational yet entertaining way.

The page includes all five requested motivation components:

1. **Progress bars** that fill up as users click a button, showing visual progress
2. **Reward animations** with flying emojis that burst onto the screen when triggered
3. **Testimonial sections** displaying social proof with user avatars and quotes
4. **Countdown timers** creating urgency with a ticking clock
5. **Before/after comparisons** showing the transformation between states

The anti-design aesthetic includes:

- Clashing colors and gradients
- Comic Sans font
- Blinking and animated text
- Excessive drop shadows and borders
- 90s-style web elements like marquees and visitor counters

This example can help HTML beginners understand interactive components while showing what design practices to avoid in professional work. Each component demonstrates different HTML, CSS, and JavaScript techniques that students can study and adapt for their own projects.


```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🔧 ANTI-DESIGN ABILITY COMPONENTS 🔧</title>
    <style>
        body {
            font-family: "Comic Sans MS", cursive, sans-serif;
            background: url('/api/placeholder/500/500') center repeat, linear-gradient(to bottom right, lime, purple);
            margin: 0;
            padding: 0;
            cursor: url('/api/placeholder/32/32'), auto;
            color: yellow;
            text-shadow: 2px 2px 0 red, -2px -2px 0 blue;
        }

        header {
            background-color: fuchsia;
            padding: 20px;
            text-align: center;
            border-bottom: 10px dotted yellow;
            box-shadow: 0 10px 0 lime;
        }

        h1 {
            font-size: 3rem;
            margin: 0;
            color: cyan;
            text-shadow: 3px 3px 0 black, 6px 6px 0 orange;
            transform: rotate(-3deg);
            animation: rainbow 3s infinite;
        }

        .container {
            max-width: 900px;
            margin: 20px auto;
            padding: 20px;
            background-color: rgba(0, 0, 0, 0.7);
            border: 8px ridge gold;
            position: relative;
        }

        .corner-decoration {
            position: absolute;
            font-size: 3rem;
            animation: spin 5s linear infinite;
        }

        .top-left { top: -15px; left: -15px; }
        .top-right { top: -15px; right: -15px; }
        .bottom-left { bottom: -15px; left: -15px; }
        .bottom-right { bottom: -15px; right: -15px; }

        .section {
            margin: 40px 0;
            padding: 20px;
            border: 5px dashed cyan;
            border-radius: 20px;
            background-color: #330066;
            position: relative;
            transition: all 0.3s;
        }

        .section:hover {
            transform: scale(1.02) rotate(1deg);
        }

        .section h2 {
            color: lime;
            font-size: 2.2rem;
            margin-top: 0;
            text-decoration: underline wavy orange;
            letter-spacing: 3px;
            transform: skew(-5deg, 2deg);
        }

        .section h2::before {
            content: "🔧 ";
        }

        .section h2::after {
            content: " 🔧";
        }

        /* Step By Step Wizard Styles */
        .wizard-container {
            border: 3px solid lime;
            padding: 10px;
            background-color: #000033;
            position: relative;
        }

        .wizard-steps {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            padding: 10px;
            background-color: #660066;
            border: 2px dotted white;
        }

        .step-indicator {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #ff66ff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            border: 3px solid yellow;
            position: relative;
            transition: all 0.3s;
        }

        .step-indicator.active {
            background-color: lime;
            color: black;
            transform: scale(1.2);
            box-shadow: 0 0 20px red;
        }

        .step-indicator:not(.active) {
            opacity: 0.6;
            filter: grayscale(70%);
        }

        .step-content {
            display: none;
            padding: 20px;
            background-color: #003366;
            border: 2px solid white;
            margin-bottom: 20px;
        }

        .step-content.active {
            display: block;
            animation: fadeIn 0.5s;
        }

        .wizard-buttons {
            display: flex;
            justify-content: space-between;
        }

        /* Auto-fill Form Styles */
        .form-container {
            border: 3px solid orange;
            padding: 15px;
            background-color: #330033;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: lime;
            font-weight: bold;
            font-size: 1.2rem;
        }

        .form-group input, .form-group select {
            width: 100%;
            padding: 10px;
            font-family: "Comic Sans MS", cursive, sans-serif;
            background-color: yellow;
            border: 3px dashed purple;
            color: blue;
            font-weight: bold;
            font-size: 1rem;
        }

        .form-group input:focus, .form-group select:focus {
            outline: none;
            border-color: red;
            box-shadow: 0 0 10px lime;
        }

        /* Toggle Switch Styles */
        .toggle-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        .toggle-item {
            background-color: #660033;
            padding: 15px;
            border: 3px solid cyan;
            text-align: center;
            width: 40%;
        }

        .toggle-label {
            font-size: 1.2rem;
            display: block;
            margin-bottom: 10px;
            color: yellow;
        }

        .toggle-switch {
            position: relative;
            display: inline-block;
            width: 80px;
            height: 40px;
        }

        .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: red;
            transition: .4s;
            border-radius: 40px;
            border: 3px solid white;
        }

        .toggle-slider:before {
            position: absolute;
            content: "";
            height: 28px;
            width: 28px;
            left: 4px;
            bottom: 3px;
            background-color: yellow;
            transition: .4s;
            border-radius: 50%;
            border: 2px solid black;
        }

        input:checked + .toggle-slider {
            background-color: lime;
            animation: pulse 1s infinite;
        }

        input:checked + .toggle-slider:before {
            transform: translateX(40px);
        }

        .toggle-state {
            margin-top: 10px;
            font-weight: bold;
            color: white;
        }

        /* Search Autocomplete Styles */
        .search-container {
            position: relative;
            margin: 20px 0;
        }

        .search-input {
            width: 100%;
            padding: 12px;
            font-size: 1.2rem;
            border: 5px solid magenta;
            background-color: #660066;
            color: yellow;
            font-family: "Comic Sans MS", cursive, sans-serif;
        }

        .search-input:focus {
            outline: none;
            box-shadow: 0 0 15px lime;
        }

        .autocomplete-results {
            position: absolute;
            background-color: black;
            width: 100%;
            border: 3px solid lime;
            z-index: 10;
            max-height: 200px;
            overflow-y: auto;
            display: none;
        }

        .autocomplete-item {
            padding: 10px;
            cursor: pointer;
            border-bottom: 2px dotted cyan;
            animation: glow 1s infinite;
        }

        .autocomplete-item:hover {
            background-color: #330066;
            transform: scale(1.05);
        }

        /* Keyboard Shortcuts Section */
        .keyboard-shortcuts {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }

        .shortcut-item {
            background-color: #000066;
            padding: 10px;
            border: 2px solid white;
            text-align: center;
        }

        .key-combo {
            display: inline-block;
            background-color: black;
            color: lime;
            padding: 5px 10px;
            border-radius: 5px;
            font-family: monospace;
            font-size: 1.1rem;
            margin: 5px;
            border: 2px outset gray;
            box-shadow: 2px 2px 0 red;
        }

        .shortcut-description {
            margin-top: 10px;
            color: yellow;
        }

        /* Buttons */
        .anti-btn {
            padding: 10px 20px;
            font-family: "Comic Sans MS", cursive, sans-serif;
            font-size: 1.2rem;
            font-weight: bold;
            background: linear-gradient(to bottom, #ff00ff, #00ffff);
            border: 5px outset gold;
            color: yellow;
            text-shadow: 2px 2px 0 black;
            cursor: pointer;
            transition: all 0.3s;
            transform: rotate(-2deg);
            box-shadow: 5px 5px 0 black;
        }

        .anti-btn:hover {
            transform: scale(1.1) rotate(2deg);
            box-shadow: 8px 8px 0 black;
        }

        .anti-btn:active {
            transform: scale(0.95);
            box-shadow: 2px 2px 0 black;
        }

        .anti-btn-primary {
            background: linear-gradient(to bottom, red, yellow);
        }

        .anti-btn-secondary {
            background: linear-gradient(to bottom, blue, green);
        }

        /* Footer */
        footer {
            background-color: black;
            padding: 20px;
            text-align: center;
            border-top: 5px dotted lime;
            margin-top: 30px;
        }

        footer p {
            margin: 5px 0;
            font-size: 0.9rem;
        }

        .blink {
            animation: blink 1s infinite;
        }

        /* Animations */
        @keyframes rainbow {
            0% { color: red; }
            14% { color: orange; }
            28% { color: yellow; }
            42% { color: green; }
            57% { color: blue; }
            71% { color: indigo; }
            85% { color: violet; }
            100% { color: red; }
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }

        @keyframes glow {
            0%, 100% { text-shadow: 0 0 5px cyan; }
            50% { text-shadow: 0 0 20px cyan; }
        }

        .marquee {
            background-color: black;
            color: lime;
            white-space: nowrap;
            padding: 10px;
            overflow: hidden;
            border-top: 3px solid red;
            border-bottom: 3px solid red;
        }

        .marquee-content {
            display: inline-block;
            animation: marquee 15s linear infinite;
        }

        @keyframes marquee {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
        }

        #shortcut-indicator {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: black;
            color: lime;
            padding: 10px;
            border: 3px solid yellow;
            display: none;
            z-index: 100;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <header>
        <h1>🔧 ANTI-DESIGN ABILITY COMPONENTS 🔧</h1>
        <p class="blink">Making things EASIER with TERRIBLE design!</p>
    </header>

    <div class="marquee">
        <div class="marquee-content">
            🔧 WELCOME TO THE ANTI-DESIGN ABILITY-FOCUSED COMPONENTS TUTORIAL! 🔧 PRESS 'H' FOR HELP! 🔧 PRESS 'S' TO TOGGLE SEIZURE MODE! 🔧 ENJOY THE DESIGN CRIMES! 🔧
        </div>
    </div>

    <div class="container">
        <div class="corner-decoration top-left">🌟</div>
        <div class="corner-decoration top-right">🌟</div>
        <div class="corner-decoration bottom-left">🌟</div>
        <div class="corner-decoration bottom-right">🌟</div>

        <section class="section">
            <h2>Step-by-Step Wizard</h2>
            <p>Break complex tasks into manageable steps with this <span class="blink">AMAZING</span> wizard interface!</p>
            
            <div class="wizard-container">
                <div class="wizard-steps">
                    <div class="step-indicator active" data-step="1">1</div>
                    <div class="step-indicator" data-step="2">2</div>
                    <div class="step-indicator" data-step="3">3</div>
                    <div class="step-indicator" data-step="4">4</div>
                </div>
                
                <div class="step-content active" data-step="1">
                    <h3 style="color: cyan;">Step 1: Personal Info</h3>
                    <div class="form-group">
                        <label for="name">Your Fantastic Name:</label>
                        <input type="text" id="name" placeholder="Enter your spectacular name">
                    </div>
                    <div class="form-group">
                        <label for="email">Your Electronic Mail Address:</label>
                        <input type="email" id="email" placeholder="your.amazing.email@example.com">
                    </div>
                </div>
                
                <div class="step-content" data-step="2">
                    <h3 style="color: cyan;">Step 2: Preferences</h3>
                    <div class="form-group">
                        <label for="favorite-color">Your Favorite Eye-Searing Color:</label>
                        <select id="favorite-color">
                            <option value="">--Select a hideous color--</option>
                            <option value="neon-green">Neon Green</option>
                            <option value="hot-pink">Hot Pink</option>
                            <option value="radioactive-yellow">Radioactive Yellow</option>
                            <option value="eye-strain-red">Eye Strain Red</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="font-preference">Your Preferred Awful Font:</label>
                        <select id="font-preference">
                            <option value="">--Select a terrible font--</option>
                            <option value="comic-sans">Comic Sans</option>
                            <option value="papyrus">Papyrus</option>
                            <option value="impact">IMPACT</option>
                            <option value="webdings">Webdings</option>
                        </select>
                    </div>
                </div>
                
                <div class="step-content" data-step="3">
                    <h3 style="color: cyan;">Step 3: Design Crimes</h3>
                    <div class="form-group">
                        <label for="marquee-count">Number of Marquees You Desire:</label>
                        <input type="number" id="marquee-count" min="1" max="100" value="10">
                    </div>
                    <div class="form-group">
                        <label for="blink-speed">Blink Speed (seizures per second):</label>
                        <input type="range" id="blink-speed" min="1" max="10" value="3">
                    </div>
                </div>
                
                <div class="step-content" data-step="4">
                    <h3 style="color: cyan;">Step 4: Confirmation</h3>
                    <p style="color: white;">Congratulations! You've completed all steps of this visually offensive wizard!</p>
                    <div style="text-align: center;">
                        <img src="/api/placeholder/200/150" alt="Trophy">
                        <p style="color: lime; font-size: 1.5rem;">Your anti-design preferences have been saved!</p>
                    </div>
                </div>
                
                <div class="wizard-buttons">
                    <button class="anti-btn anti-btn-secondary" id="prev-step" disabled>◀️ Previous Step</button>
                    <button class="anti-btn anti-btn-primary" id="next-step">Next Step ▶️</button>
                </div>
            </div>
        </section>

        <section class="section">
            <h2>Auto-Fill Forms</h2>
            <p>Reduce user effort with these <span class="blink">SPECTACULAR</span> auto-filling forms!</p>
            
            <div class="form-container">
                <div class="form-group">
                    <label for="profile-type">Select Profile Type:</label>
                    <select id="profile-type">
                        <option value="">--Select profile type--</option>
                        <option value="developer">Web Developer</option>
                        <option value="designer">UX Designer</option>
                        <option value="manager">Project Manager</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="autofill-name">Name:</label>
                    <input type="text" id="autofill-name" placeholder="Your name">
                </div>
                
                <div class="form-group">
                    <label for="autofill-job">Job Title:</label>
                    <input type="text" id="autofill-job" placeholder="Your job title">
                </div>
                
                <div class="form-group">
                    <label for="autofill-skills">Primary Skills:</label>
                    <input type="text" id="autofill-skills" placeholder="Your main skills">
                </div>
                
                <div class="form-group">
                    <label for="autofill-experience">Years of Experience:</label>
                    <input type="number" id="autofill-experience" placeholder="Years of experience">
                </div>
                
                <div style="text-align: center; margin-top: 20px;">
                    <button class="anti-btn" id="fill-random">🎲 FILL WITH RANDOM DATA!</button>
                </div>
            </div>
        </section>

        <section class="section">
            <h2>Toggle Switches</h2>
            <p>Simplify binary choices with these <span class="blink">FANTASTIC</span> toggle switches!</p>
            
            <div class="toggle-container">
                <div class="toggle-item">
                    <span class="toggle-label">Enable Eyesore Mode</span>
                    <label class="toggle-switch">
                        <input type="checkbox" class="toggle-input" data-target="eyesore">
                        <span class="toggle-slider"></span>
                    </label>
                    <div class="toggle-state" id="eyesore-state">OFF</div>
                </div>
                
                <div class="toggle-item">
                    <span class="toggle-label">Activate Marquee Madness</span>
                    <label class="toggle-switch">
                        <input type="checkbox" class="toggle-input" data-target="marquee">
                        <span class="toggle-slider"></span>
                    </label>
                    <div class="toggle-state" id="marquee-state">OFF</div>
                </div>
                
                <div class="toggle-item">
                    <span class="toggle-label">Enable Dark Mode</span>
                    <label class="toggle-switch">
                        <input type="checkbox" class="toggle-input" data-target="darkmode" checked>
                        <span class="toggle-slider"></span>
                    </label>
                    <div class="toggle-state" id="darkmode-state">ON</div>
                </div>
                
                <div class="toggle-item">
                    <span class="toggle-label">Activate Rainbow Text</span>
                    <label class="toggle-switch">
                        <input type="checkbox" class="toggle-input" data-target="rainbow">
                        <span class="toggle-slider"></span>
                    </label>
                    <div class="toggle-state" id="rainbow-state">OFF</div>
                </div>
            </div>
        </section>

        <section class="section">
            <h2>Search Autocomplete</h2>
            <p>Make finding information easier with this <span class="blink">OUTRAGEOUS</span> search autocomplete!</p>
            
            <div class="search-container">
                <input type="text" class="search-input" id="search-input" placeholder="Search for anti-design elements...">
                <div class="autocomplete-results" id="autocomplete-results"></div>
            </div>
            
            <div style="margin-top: 20px; text-align: center;">
                <p>Try searching for: marquee, blink, comic sans, gradient, or animation</p>
            </div>
        </section>

        <section class="section">
            <h2>Keyboard Shortcuts</h2>
            <p>Speed up interactions with these <span class="blink">INCREDIBLE</span> keyboard shortcuts!</p>
            
            <div class="keyboard-shortcuts">
                <div class="shortcut-item">
                    <div class="key-combo">H</div>
                    <div class="shortcut-description">Show Help</div>
                </div>
                
                <div class="shortcut-item">
                    <div class="key-combo">S</div>
                    <div class="shortcut-description">Toggle Seizure Mode</div>
                </div>
                
                <div class="shortcut-item">
                    <div class="key-combo">N</div>
                    <div class="shortcut-description">Next Wizard Step</div>
                </div>
                
                <div class="shortcut-item">
                    <div class="key-combo">P</div>
                    <div class="shortcut-description">Previous Wizard Step</div>
                </div>
                
                <div class="shortcut-item">
                    <div class="key-combo">R</div>
                    <div class="shortcut-description">Fill Random Data</div>
                </div>
                
                <div class="shortcut-item">
                    <div class="key-combo">T</div>
                    <div class="shortcut-description">Toggle All Switches</div>
                </div>
                
                <div class="shortcut-item">
                    <div class="key-combo">C</div>
                    <div class="shortcut-description">Change Background</div>
                </div>
                
                <div class="shortcut-item">
                    <div class="key-combo">ESC</div>
                    <div class="shortcut-description">Close Any Popup</div>
                </div>
            </div>
        </section>
    </div>

    <div id="shortcut-indicator">Shortcut: [Key]</div>

    <footer>
        <p>© 2025 Anti-Design Ability Components Tutorial</p>
        <p>Best viewed with Netscape Navigator at 800×600 resolution</p>
        <p class="blink">PRESS 'H' FOR HELP WITH KEYBOARD SHORTCUTS!</p>
    </footer>

    <script>
        // Step-by-Step Wizard
        let currentStep = 1;
        const totalSteps = 4;
        
        function updateStepUI() {
            // Update indicators
            document.querySelectorAll('.step-indicator').forEach(indicator => {
                indicator.classList.remove('active');
            });
            document.querySelector(`.step-indicator[data-step="${currentStep}"]`).classList.add('active');
            
            // Update content
            document.querySelectorAll('.step-content').forEach(content => {
                content.classList.remove('active');
            });
            document.querySelector(`.step-content[data-step="${currentStep}"]`).classList.add('active');
            
            // Update buttons
            document.getElementById('prev-step').disabled = currentStep === 1;
            document.getElementById('next-step').textContent = currentStep === totalSteps ? 'Finish! 🎉' : 'Next Step ▶️';
        }
        
        document.getElementById('next-step').addEventListener('click', () => {
            if (currentStep < totalSteps) {
                currentStep++;
                updateStepUI();
            } else {
                alert('CONGRATULATIONS! You have completed the anti-design wizard! Your eyes may never recover!');
            }
        });
        
        document.getElementById('prev-step').addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateStepUI();
            }
        });
        
        // Auto-fill Forms
        const developerProfile = {
            name: "Jane Coder",
            job: "Senior Web Developer",
            skills: "HTML, CSS, JavaScript, React",
            experience: 5
        };
        
        const designerProfile = {
            name: "Max Pixel",
            job: "UX/UI Designer",
            skills: "Figma, Photoshop, Illustrator",
            experience: 3
        };
        
        const managerProfile = {
            name: "Sam Leader",
            job: "Project Manager",
            skills: "Agile, Scrum, Team Management",
            experience: 7
        };
        
        const randomNames = [
            "Alex Johnson", "Taylor Smith", "Jordan Brown", "Casey Wilson", 
            "Quinn Murphy", "Riley Davis", "Jamie Miller", "Avery Thompson"
        ];
        
        document.getElementById('profile-type').addEventListener('change', function() {
            const profileType = this.value;
            let profile;
            
            switch(profileType) {
                case 'developer':
                    profile = developerProfile;
                    break;
                case 'designer':
                    profile = designerProfile;
                    break;
                case 'manager':
                    profile = managerProfile;
                    break;
                default:
                    return;
            }
            
            document.getElementById('autofill-name').value = profile.name;
            document.getElementById('autofill-job').value = profile.job;
            document.getElementById('autofill-skills').value = profile.skills;
            document.getElementById('autofill-experience').value = profile.experience;
        });
        
        document.getElementById('fill-random').addEventListener('click', function() {
            const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
            const jobs = ["Web Developer", "Designer", "Project Manager", "Content Writer", "QA Tester"];
            const skills = ["HTML", "CSS", "JavaScript", "Python", "Design", "Communication", "Leadership"];
            
            const randomJob = jobs[Math.floor(Math.random() * jobs.length)];
            const randomSkill1 = skills[Math.floor(Math.random() * skills.length)];
            const randomSkill2 = skills[Math.floor(Math.random() * skills.length)];
            const randomExperience = Math.floor(Math.random() * 10) + 1;
            
            document.getElementById('autofill-name').value = randomName;
            document.getElementById('autofill-job').value = randomJob;
            document.getElementById('autofill-skills').value = `${randomSkill1}, ${randomSkill2}`;
            document.getElementById('autofill-experience').value = randomExperience;
            
            showShortcutIndicator('R', 'Random Data Filled!');
        });
        
        // Toggle Switches
        document.querySelectorAll('.toggle-input').forEach(toggle => {
            toggle.addEventListener('change', function() {
                const target = this.dataset.target;
                const state = this.checked ? 'ON' : 'OFF';
                document.getElementById(`${target}-state`).textContent = state;
                
                switch(target) {
                    case 'eyesore':
                        document.body.style.backgroundColor = this.checked ? 'lime' : '';
                        break;
                    case 'marquee':
                        document.querySelectorAll('.marquee-content').forEach(el => {
                            el.style.animationDuration = this.checked ? '5s' : '15s';
                        });
                        break;
                    case 'darkmode':
                        document.body.style.color = this.checked ? 'yellow' : 'black';
                        document.body.style.backgroundColor = this.checked ? '' : 'white';
                        break;
                    case 'rainbow':
                        document.querySelectorAll('p').forEach(p => {
                            p.style.animation = this.checked ? 'rainbow 3s infinite' : '';
                        });
                        break;
                }
            });
        });
        
        // Search Autocomplete
        const searchTerms = [
            "marquee", "blink", "comic sans", "gradient", "animation", 
            "geocities", "clipart", "gif", "counter", "midi background", 
            "under construction", "hit counter", "guestbook", "frames", 
            "flashing text", "scrolling text", "neon colors", "wordart"
        ];
        
        document.getElementById('search-input').addEventListener('input', function() {
            const searchValue = this.value.toLowerCase();
            const resultsContainer = document.getElementById('autocomplete-results');
            
            if (searchValue.length < 2) {
                resultsContainer.style.display = 'none';
                return;
            }
            
            const matchingTerms = searchTerms.filter(term => 
                term.toLowerCase().includes(searchValue)
            );
            
            if (matchingTerms.length > 0) {
                resultsContainer.innerHTML = '';
                matchingTerms.forEach(term => {
                    const item = document.createElement('div');
                    item.className =
```



```HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>💥 ANTI-DESIGN PROMPT COMPONENTS 💥</title>
    <style>
        /* Base Styles */
        body {
            font-family: "Comic Sans MS", cursive, sans-serif;
            background: repeating-radial-gradient(circle, #ff00ff, #00ffff 10%, #ffff00 20%);
            color: lime;
            text-shadow: 2px 2px 0 purple, -2px -2px 0 blue;
            margin: 0;
            padding: 0;
            cursor: url('/api/placeholder/32/32'), auto;
            overflow-x: hidden;
        }

        header {
            background-color: black;
            padding: 20px;
            text-align: center;
            border-bottom: 10px dotted yellow;
            position: relative;
        }

        h1 {
            font-size: 3rem;
            color: #00ff00;
            text-shadow: 3px 3px 0 red, 6px 6px 0 blue;
            transform: rotate(-3deg);
            animation: rainbow 3s infinite;
            margin: 0;
        }

        .subtitle {
            font-size: 1.5rem;
            color: yellow;
            animation: blink 1s infinite;
        }

        .container {
            max-width: 1000px;
            margin: 20px auto;
            padding: 20px;
            background-color: rgba(0, 0, 0, 0.7);
            border: 8px dashed lime;
            position: relative;
        }

        .decoration {
            position: fixed;
            font-size: 5rem;
            z-index: -1;
            animation: spin 10s linear infinite;
            opacity: 0.7;
        }

        .dec1 { top: 10%; left: 5%; }
        .dec2 { top: 30%; right: 8%; }
        .dec3 { bottom: 20%; left: 10%; }
        .dec4 { bottom: 15%; right: 15%; }

        section {
            margin-bottom: 50px;
            padding: 20px;
            background-color: rgba(0, 0, 64, 0.8);
            border: 5px ridge cyan;
            position: relative;
            overflow: hidden;
        }

        h2 {
            color: #ff00ff;
            font-size: 2.5rem;
            margin-top: 10px;
            text-decoration: underline wavy yellow;
            text-align: center;
            transform: skew(-5deg, 2deg);
            text-shadow: 3px 3px 0 blue;
        }

        h2::before, h2::after {
            content: "🚀";
            margin: 0 10px;
        }

        /* CTA Button Styles */
        .cta-container {
            text-align: center;
            margin: 40px 0;
            position: relative;
        }

        .cta-button {
            padding: 20px 40px;
            font-size: 2rem;
            font-weight: bold;
            font-family: "Comic Sans MS", cursive, sans-serif;
            background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet);
            color: white;
            text-shadow: 3px 3px 0 black;
            border: 8px outset gold;
            border-radius: 20px;
            box-shadow: 0 0 30px #ff00ff;
            cursor: pointer;
            animation: pulse 2s infinite, rotate 3s infinite alternate;
            margin: 20px;
            transform: rotate(-5deg);
            position: relative;
            z-index: 1;
            transition: all 0.3s;
        }

        .cta-button:hover {
            transform: scale(1.1) rotate(5deg);
            animation: shake 0.5s infinite, rainbow-bg 1s infinite;
        }

        .cta-stars {
            position: absolute;
            font-size: 2rem;
            animation: star-float 3s infinite;
        }

        .star1 { top: -20px; left: 20%; animation-delay: 0s; }
        .star2 { top: -10px; right: 30%; animation-delay: 0.5s; }
        .star3 { bottom: -20px; left: 40%; animation-delay: 1s; }
        .star4 { bottom: -15px; right: 25%; animation-delay: 1.5s; }

        /* Toast Notification Styles */
        #toast-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            display: flex;
            flex-direction: column-reverse;
            gap: 10px;
        }

        .toast {
            background: linear-gradient(to right, #ff00ff, #00ffff);
            border: 5px dashed yellow;
            color: white;
            text-shadow: 2px 2px 0 black;
            padding: 15px;
            min-width: 250px;
            font-weight: bold;
            font-size: 1.2rem;
            box-shadow: 0 0 20px lime;
            position: relative;
            animation: slide-in 0.5s ease-out;
            overflow: hidden;
        }

        .toast::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.1),
                rgba(255, 255, 255, 0.1) 10px,
                rgba(255, 255, 255, 0.2) 10px,
                rgba(255, 255, 255, 0.2) 20px
            );
        }

        .toast-close {
            position: absolute;
            top: 5px;
            right: 10px;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        }

        .toast-emoji {
            font-size: 2rem;
            margin-right: 10px;
            vertical-align: middle;
            animation: spin 2s linear infinite;
            display: inline-block;
        }

        .toast-progress {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 5px;
            background-color: rgba(0, 0, 0, 0.5);
            width: 100%;
            animation: toast-timer 5s linear;
        }

        /* Modal Dialog Styles */
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 2000;
            backdrop-filter: blur(5px);
        }

        .modal-content {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-3deg);
            background: linear-gradient(135deg, #660066, #000066);
            border: 10px ridge gold;
            padding: 30px;
            max-width: 80%;
            min-width: 300px;
            z-index: 2001;
            box-shadow: 0 0 50px #ff00ff;
            animation: wobble 5s infinite;
        }

        .modal-header {
            background-color: #ff0000;
            margin: -30px -30px 20px -30px;
            padding: 15px;
            color: yellow;
            font-size: 1.8rem;
            text-align: center;
            border-bottom: 5px dashed cyan;
            animation: blink-bg 2s infinite;
        }

        .modal-body {
            color: white;
            font-size: 1.3rem;
            margin-bottom: 20px;
        }

        .modal-buttons {
            display: flex;
            justify-content: center;
            gap: 15px;
        }

        .modal-button {
            padding: 10px 20px;
            font-size: 1.2rem;
            font-family: "Comic Sans MS", cursive, sans-serif;
            background: linear-gradient(to bottom, #ff3300, #ff9900);
            color: white;
            border: 5px outset silver;
            cursor: pointer;
            animation: pulse 2s infinite;
            text-shadow: 2px 2px 0 black;
        }

        .modal-button:hover {
            transform: scale(1.1);
        }

        .modal-button.cancel {
            background: linear-gradient(to bottom, #3300ff, #9900ff);
        }

        /* Tooltip Styles */
        .tooltip-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            margin: 30px 0;
        }

        .tooltip-item {
            position: relative;
            width: 150px;
            height: 150px;
            background-color: #330033;
            border: 5px solid cyan;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            cursor: help;
            overflow: hidden;
            transition: all 0.3s;
        }

        .tooltip-item:hover {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 0 20px lime;
        }

        .tooltip-content {
            position: absolute;
            bottom: 160px;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            background-color: black;
            border: 3px dashed yellow;
            padding: 15px;
            color: lime;
            font-size: 1rem;
            text-align: center;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s, visibility 0.3s;
            z-index: 100;
        }

        .tooltip-content::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -10px;
            border-width: 10px;
            border-style: solid;
            border-color: black transparent transparent transparent;
        }

        .tooltip-item:hover .tooltip-content {
            visibility: visible;
            opacity: 1;
            animation: wiggle 0.5s infinite;
        }

        .tooltip-icon {
            font-size: 4rem;
            animation: float 3s infinite;
        }

        /* Notification Badge Styles */
        .badge-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 40px;
            margin: 30px 0;
        }

        .badge-item {
            position: relative;
            width: 120px;
            height: 120px;
            background-color: #003366;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            box-shadow: 5px 5px 0 black;
            transition: all 0.3s;
            cursor: pointer;
        }

        .badge-item:hover {
            transform: scale(1.1);
            box-shadow: 8px 8px 0 black;
        }

        .notification-badge {
            position: absolute;
            top: -10px;
            right: -10px;
            background-color: red;
            color: white;
            font-size: 1.2rem;
            min-width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 3px solid yellow;
            animation: badge-pulse 1s infinite;
        }

        .badge-item:hover .notification-badge {
            animation: spin 1s infinite, badge-pulse 1s infinite;
        }

        .badge-info {
            position: absolute;
            bottom: -40px;
            left: 0;
            width: 100%;
            text-align: center;
            font-size: 1rem;
            color: cyan;
            text-shadow: 1px 1px 0 black;
        }

        /* Animations */
        @keyframes rainbow {
            0% { color: red; }
            14% { color: orange; }
            28% { color: yellow; }
            42% { color: green; }
            57% { color: blue; }
            71% { color: indigo; }
            85% { color: violet; }
            100% { color: red; }
        }

        @keyframes rainbow-bg {
            0% { background: red; }
            14% { background: orange; }
            28% { background: yellow; }
            42% { background: green; }
            57% { background: blue; }
            71% { background: indigo; }
            85% { background: violet; }
            100% { background: red; }
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }

        @keyframes blink-bg {
            0%, 100% { background-color: #ff0000; }
            50% { background-color: #ff9900; }
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }

        @keyframes star-float {
            0%, 100% { transform: translateY(0) rotate(0deg); opacity: 1; }
            50% { transform: translateY(-15px) rotate(180deg); opacity: 0.5; }
        }

        @keyframes shake {
            0%, 100% { transform: scale(1.1) rotate(5deg); }
            25% { transform: scale(1.1) rotate(10deg); }
            75% { transform: scale(1.1) rotate(0deg); }
        }

        @keyframes rotate {
            0% { transform: rotate(-5deg); }
            100% { transform: rotate(5deg); }
        }

        @keyframes wobble {
            0%, 100% { transform: translate(-50%, -50%) rotate(-3deg); }
            25% { transform: translate(-51%, -49%) rotate(-1deg); }
            50% { transform: translate(-49%, -51%) rotate(1deg); }
            75% { transform: translate(-51%, -51%) rotate(0deg); }
        }

        @keyframes wiggle {
            0%, 100% { transform: translateX(-50%) rotate(-3deg); }
            50% { transform: translateX(-50%) rotate(3deg); }
        }

        @keyframes badge-pulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 0 rgba(255, 0, 0, 0.4); }
            50% { transform: scale(1.1); box-shadow: 0 0 20px rgba(255, 0, 0, 0.8); }
        }

        @keyframes slide-in {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        @keyframes toast-timer {
            from { width: 100%; }
            to { width: 0%; }
        }

        /* Marquee */
        .marquee {
            background-color: black;
            color: yellow;
            white-space: nowrap;
            padding: 10px;
            overflow: hidden;
            border-top: 3px solid red;
            border-bottom: 3px solid red;
        }

        .marquee-content {
            display: inline-block;
            animation: marquee 15s linear infinite;
        }

        @keyframes marquee {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
        }

        /* Utility Classes */
        .blink-text { animation: blink 1s infinite; }
        .spin-text { display: inline-block; animation: spin 2s linear infinite; }
        .rainbow-text { animation: rainbow 3s infinite; }

        /* Footer */
        footer {
            background-color: black;
            padding: 20px;
            text-align: center;
            border-top: 5px dashed lime;
            color: white;
            font-size: 0.9rem;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
            h1 { font-size: 2rem; }
            h2 { font-size: 1.8rem; }
            .cta-button { font-size: 1.5rem; padding: 15px 30px; }
            .tooltip-container, .badge-container {
                gap: 15px;
            }
            .tooltip-item, .badge-item {
                width: 100px;
                height: 100px;
            }
        }
    </style>
</head>
<body>
    <div class="decoration dec1">💫</div>
    <div class="decoration dec2">🌟</div>
    <div class="decoration dec3">✨</div>
    <div class="decoration dec4">💥</div>

    <header>
        <h1>💥 ANTI-DESIGN PROMPT COMPONENTS 💥</h1>
        <p class="subtitle">Grab Your User's Attention with MAXIMUM EFFORT!!!</p>
    </header>

    <div class="marquee">
        <div class="marquee-content">
            🚨 WELCOME TO THE MOST ATTENTION-GRABBING WEB PAGE ON THE ENTIRE INTERNET! 🚨 CLICK ALL THE BUTTONS! 🚨 EXPERIENCE NOTIFICATION OVERLOAD! 🚨 ANTI-DESIGN RULES! 🚨
        </div>
    </div>

    <div class="container">
        <section id="cta-section">
            <h2>Call-to-Action Buttons</h2>
            <p style="text-align: center; font-size: 1.3rem;">Make your buttons <span class="blink-text">IMPOSSIBLE TO IGNORE</span> with these <span class="rainbow-text">eye-searing</span> designs!</p>
            
            <div class="cta-container">
                <div class="cta-stars star1">✨</div>
                <div class="cta-stars star2">💫</div>
                <div class="cta-stars star3">✨</div>
                <div class="cta-stars star4">💫</div>
                
                <button class="cta-button" id="super-cta">CLICK ME NOW!!!</button>
            </div>
            
            <div style="text-align: center;">
                <button style="background: linear-gradient(to right, red, purple); color: yellow; font-size: 1.3rem; padding: 10px 20px; border: 5px dashed green; animation: pulse 1.5s infinite; margin: 10px;" onclick="showToast('You clicked a secondary button!', '👍')">
                    SECOND BEST OPTION
                </button>
                
                <button style="background: blue; color: lime; font-size: 1.3rem; padding: 10px 20px; border: 5px ridge orange; transform: rotate(3deg); display: inline-block; margin: 10px;" onclick="showToast('Third button was clicked', '🎮')">
                    CLICK FOR FUN
                </button>
            </div>
        </section>

        <section id="toast-section">
            <h2>Toast Notifications</h2>
            <p style="text-align: center; font-size: 1.3rem;">Get your user's attention with these <span class="blink-text">UNMISSABLE</span> toast notifications!</p>
            
            <div style="text-align: center; margin: 30px 0;">
                <button style="background: linear-gradient(45deg, purple, blue); color: white; padding: 15px 25px; font-size: 1.2rem; border: 4px solid cyan; margin: 10px;" onclick="showToast('This is an important message!', '🔔')">
                    Show Standard Toast
                </button>
                
                <button style="background: linear-gradient(45deg, red, orange); color: white; padding: 15px 25px; font-size: 1.2rem; border: 4px solid lime; margin: 10px;" onclick="showToast('Super urgent notification!!!', '🚨', true)">
                    Show Urgent Toast
                </button>
                
                <button style="background: linear-gradient(45deg, green, cyan); color: yellow; padding: 15px 25px; font-size: 1.2rem; border: 4px solid magenta; margin: 10px;" onclick="multipleToasts()">
                    Toast Overload!!!
                </button>
            </div>
            
            <div id="toast-container">
                <!-- Toasts will be added here -->
            </div>
        </section>

        <section id="modal-section">
            <h2>Modal Dialogs</h2>
            <p style="text-align: center; font-size: 1.3rem;">Force your users to pay attention with these <span class="spin-text">UNAVOIDABLE</span> modal popups!</p>
            
            <div style="text-align: center; margin: 30px 0;">
                <button style="background: radial-gradient(circle, red, black); color: white; padding: 15px 30px; font-size: 1.3rem; border: 5px groove gold; margin: 10px;" onclick="showModal('standard')">
                    Show Standard Modal
                </button>
                
                <button style="background: radial-gradient(circle, purple, black); color: lime; padding: 15px 30px; font-size: 1.3rem; border: 5px groove silver; margin: 10px;" onclick="showModal('warning')">
                    Show Warning Modal
                </button>
                
                <button style="background: radial-gradient(circle, blue, black); color: yellow; padding: 15px 30px; font-size: 1.3rem; border: 5px groove cyan; margin: 10px;" onclick="showModal('success')">
                    Show Success Modal
                </button>
            </div>
            
            <div class="modal-overlay" id="modal-overlay">
                <div class="modal-content" id="modal-content">
                    <div class="modal-header" id="modal-header">Important Message!!!</div>
                    <div class="modal-body" id="modal-body">
                        This is a very important modal dialog that demands your immediate attention!
                    </div>
                    <div class="modal-buttons">
                        <button class="modal-button" id="modal-confirm">ACCEPT</button>
                        <button class="modal-button cancel" id="modal-cancel">CANCEL</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="tooltip-section">
            <h2>Tooltip Hints</h2>
            <p style="text-align: center; font-size: 1.3rem;">Guide your users with these <span class="rainbow-text">INFORMATIVE</span> tooltip hints!</p>
            
            <div class="tooltip-container">
                <div class="tooltip-item">
                    <span class="tooltip-icon">📱</span>
                    <div class="tooltip-content">
                        This is a mobile phone icon! You can use it to call people, which was the original purpose of phones before they became tiny computers!
                    </div>
                </div>
                
                <div class="tooltip-item">
                    <span class="tooltip-icon">💾</span>
                    <div class="tooltip-content">
                        This is a floppy disk! Kids these days might think it's just the "save" icon, but it was actual physical storage media from ancient times!
                    </div>
                </div>
                
                <div class="tooltip-item">
                    <span class="tooltip-icon">🔔</span>
                    <div class="tooltip-content">
                        This is a notification bell! It will annoy you constantly with updates you don't care about!
                    </div>
                </div>
                
                <div class="tooltip-item">
                    <span class="tooltip-icon">🔍</span>
                    <div class="tooltip-content">
                        This is a search icon! Use it to find things, like your dignity after using this web design!
                    </div>
                </div>
            </div>
        </section>

        <section id="badge-section">
            <h2>Notification Badges</h2>
            <p style="text-align: center; font-size: 1.3rem;">Alert your users to new information with these <span class="blink-text">ATTENTION-GRABBING</span> badges!</p>
            
            <div class="badge-container">
                <div class="badge-item" onclick="updateBadgeCount(this)">
                    📧
                    <span class="notification-badge">9+</span>
                    <div class="badge-info">Email</div>
                </div>
                
                <div class="badge-item" onclick="updateBadgeCount(this)">
                    💬
                    <span class="notification-badge">23</span>
                    <div class="badge-info">Messages</div>
                </div>
                
                <div class="badge-item" onclick="updateBadgeCount(this)">
                    🔔
                    <span class="notification-badge">42</span>
                    <div class="badge-info">Alerts</div>
                </div>
                
                <div class="badge-item" onclick="updateBadgeCount(this)">
                    ❤️
                    <span class="notification-badge">99+</span>
                    <div class="badge-info">Likes</div>
                </div>
            </div>
        </section>
        
        <div style="text-align: center; margin: 40px 0;">
            <button style="background: linear-gradient(to bottom, red, yellow); color: blue; font-size: 1.5rem; padding: 15px 30px; border: 6px ridge cyan; animation: pulse 2s infinite; text-shadow: 2px 2px 0 black;" onclick="promptOverload()">
                CLICK FOR PROMPT OVERLOAD!!!
            </button>
        </div>
    </div>

    <footer>
        <p>© 2025 Anti-Design Prompt Components Tutorial</p>
        <p class="blink-text">Best viewed with eyes closed at 640×480 resolution</p>
        <p>No designers were harmed in the making of this webpage (but several cried)</p>
    </footer>

    <script>
        // Toast notifications functionality
        function showToast(message, emoji = '🔔', urgent = false) {
            const toastContainer = document.getElementById('toast-container');
            
            const toast = document.createElement('div');
            toast.className = 'toast';
            if (urgent) {
                toast.style.animation = 'slide-in 0.5s ease-out, pulse 0.5s infinite';
                toast.style.backgroundColor = '#ff0000';
            }
            
            const closeButton = document.createElement('button');
            closeButton.className = 'toast-close';
            closeButton.textContent = '×';
            closeButton.onclick = function() {
                toastContainer.removeChild(toast);
            };
            
            const progress = document.createElement('div');
            progress.className = 'toast-progress';
            
            const content = document.createElement('div');
            content.innerHTML = `<span class="toast-emoji">${emoji}</span> ${message}`;
            
            toast.appendChild(closeButton);
            toast.appendChild(content);
            toast.appendChild(progress);
            
            toastContainer.appendChild(toast);
            
            setTimeout(() => {
                if (toastContainer.contains(toast)) {
                    toastContainer.removeChild(toast);
                }
            }, 5000);
        }
        
        function multipleToasts() {
            const messages = [
                {msg: "First notification!", emoji: "1️⃣"},
                {msg: "Another important update!", emoji: "2️⃣"},
                {msg: "You can't ignore me!", emoji: "3️⃣"},
                {msg: "Still more notifications!", emoji: "4️⃣"},
                {msg: "Last but not least!", emoji: "5️⃣"}
            ];
            
            let delay = 0;
            messages.forEach(item => {
                setTimeout(() => {
                    showToast(item.msg, item.emoji);
                }, delay);
                delay += 800;
            });
        }
        
        // Modal dialogs functionality
        function showModal(type) {
            const modalOverlay = document.getElementById('modal-overlay');
            const modalHeader = document.getElementById('modal-header');
            const modalBody = document.getElementById('modal-body');
            const modalConfirm = document.getElementById('modal-confirm');
            
            switch(type) {
                case 'warning':
                    modalHeader.textContent = "⚠️ WARNING!!! ⚠️";
                    modalHeader.style.backgroundColor = "#ff9900";
                    modalBody.innerHTML = "You're about to experience the <span class='blink-text'>ULTIMATE</span> in anti-design aesthetics! Are you <span class='rainbow-text'>ABSOLUTELY SURE</span> your eyes can handle it?";
                    modalConfirm.textContent = "I'M BRAVE ENOUGH!";
                    break;
                case 'success':
                    modalHeader.textContent = "🎉 SUCCESS!!! 🎉";
                    modalHeader.style.backgroundColor = "#00cc00";
                    modalBody.innerHTML = "Congratulations! You've successfully clicked a button! This is truly an <span class='rainbow-text'>AMAZING ACHIEVEMENT</span> worthy of celebration!";
                    modalConfirm.textContent = "CLAIM REWARD!";
                    break;
                default:
                    modalHeader.textContent = "IMPORTANT MESSAGE!!!";
                    modalHeader.style.backgroundColor = "#ff0000";
                    modalBody.innerHTML = "This is a very important modal dialog that demands your <span class='blink-text'>IMMEDIATE ATTENTION</span>! Please read carefully!";
                    modalConfirm.textContent = "ACCEPT";
            }
            
            modalOverlay.style.display = 'block';
        }
        
        // Close modal functionality
        document.getElementById('modal-confirm').addEventListener('click', function() {
            document.getElementById('modal-overlay').style.display = 'none';
            showTo

```