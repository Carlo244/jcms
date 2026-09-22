# Interview Kit: Full-Stack Developer Evaluation
## Candidate: John Carlo M. Sanchez

---

## COMPETENCY FRAMEWORK

### 1. **Technical Depth & Architecture**
Clear understanding of system design, database normalization, API design, and technology choices.

**Behavioral Indicators:**
- Explains architectural decisions with business context
- Shows awareness of tradeoffs (when to use SQL vs NoSQL, monolith vs microservices)
- Demonstrates knowledge of production concerns (deployment, monitoring, security)

**Strong Performance**: "I chose normalized MySQL schemas because blood donation data has high relational integrity needs. I avoided Firebase because we needed complex queries for donor matching logic."

**Developing Performance**: "We used Laravel because I know it well" (no business justification or tradeoffs considered)

---

### 2. **System Design Thinking**
Ability to scope problems, design end-to-end systems, and make pragmatic architectural choices.

**Behavioral Indicators:**
- Breaks down complex problems into components
- Considers data flow, auth, deployment from day one
- Prioritizes shipping over perfect architecture
- Explains why certain solutions were chosen over alternatives

**Strong Performance**: "For UniF1, I integrated Health Connect to standardize data from different workout apps. I used Jetpack Compose + MVVM so the UI could subscribe to training metrics in real-time without blocking the main thread."

**Developing Performance**: Lists technologies without explaining how they solve specific problems.

---

### 3. **Problem-Solving & Decision-Making**
Demonstrates structured thinking, learns from failure, and makes pragmatic tradeoffs.

**Behavioral Indicators:**
- Shows debugging methodology (not just "it broke, I fixed it")
- Explains reasoning for technology or architecture choices
- Admits constraints and works within them
- Learns from mistakes and applies lessons to next project

**Strong Performance**: "At MBC, I had to troubleshoot broadcast delays. I traced the issue through logging, found the bottleneck was manual playlist updates, and suggested automation."

**Developing Performance**: "I fixed the issue" (no investigation process or learning shared)

---

### 4. **Communication of Complexity**
Explains technical decisions in terms non-technical people understand; documents thinking clearly.

**Behavioral Indicators:**
- Explains architecture in business terms, not just tech terms
- Writes clear commit messages and documentation
- Can justify decisions to stakeholders
- Breaks down complex problems into understandable steps

**Strong Performance**: "I normalized the database to ensure blood donation requests couldn't be duplicated or lost—that's critical for medical workflows."

**Developing Performance**: "I used normalization" (assumes listener understands why)

---

### 5. **Learning Agility & Growth**
Stays current with technology, seeks feedback, and adapts to new tools/frameworks.

**Behavioral Indicators:**
- Learns new languages/frameworks quickly (PHP→Kotlin shows this)
- Asks for code review feedback and implements it
- Follows industry best practices (MVVM, normalized schemas)
- Reflects on what went well and what to improve

**Strong Performance**: "After building InstaDugo in Laravel, I decided to learn mobile with Kotlin + Jetpack Compose because I wanted depth across platforms. I studied official Google docs and open-source Android apps."

**Developing Performance**: "I've only used Laravel" (limited to one stack)

---

### 6. **Shipping & Execution**
Takes projects from idea to production; handles deployment, testing, and operational concerns.

**Behavioral Indicators:**
- Deployed to production or staging environment
- Thought about monitoring, error handling, user feedback loops
- Delivered features on time despite constraints
- Considers DevOps and ops burden, not just features

**Strong Performance**: "InstaDugo is deployed on Laravel Cloud with automated backups. I set up email notifications for verification failures so admins catch issues before donors notice."

**Developing Performance**: "The app is built" (no mention of deployment or monitoring)

---

## INTERVIEW STRUCTURE

### Round 1: Technical Phone Screen (30 minutes)
**Goal**: Assess technical fundamentals, communication clarity, and culture fit.

**Interviewer**: Hiring Manager or Senior Engineer

**Questions**:
1. "Walk me through InstaDugo's architecture. What are the main components and how do they talk to each other?"
2. "Why did you choose Laravel and MySQL for InstaDugo instead of Node.js or Firebase?"
3. "What's the most complex technical problem you've solved in either project? How did you approach it?"
4. "Tell me about your internship at MBC. What technical problems did you help solve?"

**Time Allocation**:
- Intro & rapport (3 min)
- Technical questions (20 min)
- Their questions (5 min)
- Next steps (2 min)

**Scoring**: Below Expectations / Meets / Exceeds on Technical Depth, Communication

---

### Round 2: Deep Dive System Design (60 minutes)
**Goal**: Assess system design thinking, architectural decisions, and technical depth.

**Interviewer**: Senior Backend or Full-Stack Engineer

**Structure**:
1. **Project Deep Dive** (25 min): Ask candidate to walk through one project in detail
2. **Design Questions** (20 min): Ask about tradeoffs and architectural decisions
3. **Problem-Solving** (10 min): Give a real-world constraint and ask how they'd solve it
4. **Their Questions** (5 min)

**Questions**:

**InstaDugo Deep Dive:**
- "Walk me through the database schema for InstaDugo. Why did you structure it that way?"
- "How do you handle donor matching? Walk me through the logic and any edge cases you considered."
- "What happens if two admins try to verify the same donor at the same time? How does your system handle that?"
- "How does the authentication and authorization system work? Who can see what data?"
- "If InstaDugo had to scale to 100,000 daily users, what would break? How would you redesign it?"

**UniF1 Deep Dive:**
- "Explain the MVVM architecture in UniF1. Why is that pattern useful for a fitness app?"
- "How do you handle syncing workout data from Health Connect? What if there are conflicts?"
- "Walk me through how you send workout context to Google Gemini. What constraints did you consider?"
- "How does the app handle network errors or Gemini API failures gracefully?"
- "What's the trade-off between fetching all workout data vs. paginating it?"

**Tradeoff Questions:**
- "You used Tailwind CSS in InstaDugo. Why not Bootstrap (which you've also used)?"
- "Why Kotlin for UniF1 instead of Flutter or React Native?"
- "If you had to rewrite InstaDugo right now, what would you do differently?"

**Real-World Constraint Problem:**
- "Imagine InstaDugo needs to send SMS notifications to donors, but your SMS provider fails 30% of the time. How would you design a reliable notification system?"

**Scoring**: Technical Depth, System Design Thinking, Problem-Solving, Communication of Complexity

---

### Round 3: Behavioral & Growth (45 minutes)
**Goal**: Assess learning agility, collaboration, handling failure, and culture fit.

**Interviewer**: Engineering Lead or Manager

**STAR Questions** (Situation-Task-Action-Result):

1. **Learning Agility**
   - "Tell me about a time you had to learn something completely new for a project. How did you approach learning Kotlin for UniF1? What resources did you use?"
   - "Describe a piece of feedback you received on your code or design. How did you respond?"

2. **Collaboration & Communication**
   - "Tell me about a time you had to explain a complex technical decision to non-technical stakeholders (like at MBC). How did you approach it?"
   - "Have you ever worked with a designer or product person who disagreed with your technical approach? How did you handle it?"

3. **Handling Ambiguity**
   - "Walk me through how you decided what features to build for InstaDugo. How did you prioritize?"
   - "Tell me about a time a plan changed mid-project. How did you adapt?"

4. **Failure & Resilience**
   - "Tell me about a project that didn't go as planned. What went wrong and what did you learn?"
   - "Describe a bug or issue in one of your projects that was hard to track down. How did you debug it?"

5. **Growth Mindset**
   - "What's a skill you want to develop next? Why?"
   - "How do you stay current with technology?"

**Scoring**: Learning Agility, Problem-Solving, Communication, Culture Fit

---

### Round 4: Leadership & Values (30 minutes)
**Goal**: Assess alignment with company values, long-term vision, and team fit.

**Interviewer**: Engineering Manager or Director

**Questions**:

1. **Engineering Philosophy**
   - "What does 'dependable engineering' mean to you? Tell me about a time you chose reliability over speed."
   - "Your portfolio says 'normalized data, and interfaces that make the underlying workflow easier to trust.' What does that mean?"

2. **Long-Term Vision**
   - "Where do you see yourself in 3 years as an engineer?"
   - "What kind of problems excite you most?"

3. **Team & Culture Fit**
   - "Tell me about a time you helped someone on the team grow or improve their work."
   - "How do you handle working with engineers who have different styles or expertise than you?"

4. **Availability & Commitment**
   - "You're graduating in 2026. When would you be available to start full-time?"
   - "Are you open to roles in different parts of the stack (frontend, backend, mobile)?"

5. **Company Fit**
   - "What draws you to this role/company?"
   - "What questions do you have for me?"

**Scoring**: Learning Agility, Communication, Culture Fit, Growth Mindset

---

## EVALUATION SCORECARD

### Interview Evaluation Form

**Candidate**: John Carlo M. Sanchez  
**Position**: Full-Stack Developer / Mobile Engineer  
**Date**: ___________  
**Interviewer**: ___________  
**Round**: [ ] 1: Phone Screen  [ ] 2: System Design  [ ] 3: Behavioral  [ ] 4: Leadership

---

### COMPETENCY ASSESSMENT

#### 1. Technical Depth & Architecture
- [ ] Below Expectations
- [ ] Meets Expectations  
- [ ] Exceeds Expectations

**Evidence from interview**:
_____________________________________

**Notes**:
_____________________________________

---

#### 2. System Design Thinking
- [ ] Below Expectations
- [ ] Meets Expectations  
- [ ] Exceeds Expectations

**Evidence from interview**:
_____________________________________

**Notes**:
_____________________________________

---

#### 3. Problem-Solving & Decision-Making
- [ ] Below Expectations
- [ ] Meets Expectations  
- [ ] Exceeds Expectations

**Evidence from interview**:
_____________________________________

**Notes**:
_____________________________________

---

#### 4. Communication of Complexity
- [ ] Below Expectations
- [ ] Meets Expectations  
- [ ] Exceeds Expectations

**Evidence from interview**:
_____________________________________

**Notes**:
_____________________________________

---

#### 5. Learning Agility & Growth
- [ ] Below Expectations
- [ ] Meets Expectations  
- [ ] Exceeds Expectations

**Evidence from interview**:
_____________________________________

**Notes**:
_____________________________________

---

#### 6. Shipping & Execution
- [ ] Below Expectations
- [ ] Meets Expectations  
- [ ] Exceeds Expectations

**Evidence from interview**:
_____________________________________

**Notes**:
_____________________________________

---

### CULTURE & VALUES FIT

**Values Alignment** (Dependable engineering, structured thinking, clarity):
_____________________________________

**Working Style** (Team feedback):
_____________________________________

**Growth Potential**:
_____________________________________

**Overall Impression**:
_____________________________________

---

### RECOMMENDATION

- [ ] **Strong Hire** — Advance immediately to final round
- [ ] **Hire** — Move forward, but verify specific competencies
- [ ] **Maybe** — Need more data (request additional round)
- [ ] **Pass** — Not the right fit at this time

**Rationale**:
_____________________________________

**Overall Score**: _____ / 6 competencies

**Next Steps**:
_____________________________________

---

## SCORING RUBRIC

### Below Expectations
- Cannot provide specific technical examples
- Explanations lack clarity or depth
- No evidence of system thinking or architectural reasoning
- Unable to justify design decisions
- Limited evidence of shipping or execution
- Shows resistance to feedback or learning

### Meets Expectations
- Provides clear technical examples with good context
- Explains architectural decisions with business reasoning
- Shows competency at expected level for experience
- Demonstrates shipping and execution capability
- Open to feedback and learning
- Communicates technical ideas clearly

### Exceeds Expectations
- Examples demonstrate exceptional technical depth
- Explains complex systems with clarity and business awareness
- Shows mastery of multiple domains (backend, mobile, DevOps)
- Proactively learned new technologies (Kotlin, Jetpack Compose)
- Shipped production systems with operational maturity
- Articulates strong engineering philosophy and values

---

## INTERVIEWER GUIDE

### Pre-Interview (15 minutes before)

**Preparation Checklist:**
- [ ] Read candidate's portfolio and GitHub
- [ ] Review both projects (InstaDugo and UniF1)
- [ ] Identify 2-3 technical questions for this round
- [ ] Note any gaps or red flags to explore (e.g., why only 1 internship?)
- [ ] Review this competency framework
- [ ] Prepare your introduction

**Key Background to Know:**
- CS Graduate (graduating 2026 — currently a student)
- 1 internship: MBC Media Group (240 hours, digital media support)
- 2 projects: Laravel backend + Android mobile
- Stack: PHP, Laravel, Kotlin, Jetpack Compose, MySQL, Health Connect API, Google Gemini

---

### Interview Opening (3-5 minutes)

"Hi John, thanks for taking the time to talk today. I'm [name], [role] at [company]. I've reviewed your portfolio and both projects look interesting. Today I want to understand your technical thinking, how you approach problems, and whether we're a good fit. No trick questions—just want to learn from your experience. Does that sound good?"

**Build Rapport**: Mention something specific about their projects that impressed you.

---

### Asking Effective Questions

**DO:**
- Ask open-ended questions: "Walk me through..." not "Did you...?"
- Wait for full answers before moving to next question
- Take notes on specific examples and direct quotes
- Ask 2-3 follow-ups per story:
  - "Why did you choose that approach?"
  - "What would you do differently now?"
  - "What was the most difficult part?"
- Let silence exist (give them time to think)

**DON'T:**
- Interrupt or finish their sentences
- Ask yes/no questions that kill conversation
- Talk too much (aim for 70% them, 30% you)
- Lead questions ("You must have used caching, right?")
- Judge or show skepticism

---

### Probing Deeper

**If answer is too vague:**
"That's interesting. Can you give me a specific example? Maybe a particular request or workflow you built?"

**If they give team credit but no personal role:**
"That sounds like a great project. What specifically did YOU build or decide?"

**If answer is too surface-level:**
"Walk me through your thought process. What trade-offs were you considering?"

**If they're unsure:**
"That's a fair question. No perfect answer here—what would you do?"

---

### Red Flags to Explore

- **Vague on MBC experience**: "240 hours" but can't describe a specific problem solved
- **No architecture reasoning**: "I used Laravel because I know it" (no business logic)
- **Overconfidence without depth**: Claims expertise but can't explain decisions
- **Blame-shifting**: Always someone else's fault (design is bad, requirements changed, etc.)
- **No learning from failure**: Can't describe mistakes or what they learned
- **Resists feedback**: "I'm always right about tech choices"

---

### Closing (5 minutes)

"Thanks for walking through all that. I appreciated your thinking on [specific insight]. Do you have any questions for me?"

**Share genuine feedback**: "One thing that stood out—the way you thought through the database schema for donor matching showed real systems thinking."

**Explain next steps**: "We'll have the team discuss and get back to you by [date]."

**Give them your contact info**: "Feel free to reach out if you have questions."

---

### Post-Interview (10 minutes)

**Complete scorecard immediately while fresh.**

- Use specific quotes as evidence ("He said: 'I chose MySQL because...'")
- Anchor to competencies, not gut feel
- Don't rate on likability alone
- Document patterns if multiple interviewers

**Questions to ask yourself:**
- Can they design systems end-to-end?
- Do they ship to production?
- Can they communicate technical ideas?
- Do they learn from mistakes?
- Would I trust them with a critical system?

---

## Key Interview Questions Summary

### Must-Ask Questions (All Rounds Should Cover):

1. **"Walk me through InstaDugo's architecture. What are the main pieces and how do they communicate?"**
   - Assesses: System Design, Technical Depth, Communication

2. **"Why Laravel and MySQL instead of [Node.js / Firebase / other]?"**
   - Assesses: Decision-Making, Technical Depth, Problem-Solving

3. **"Tell me about the most complex technical problem you solved in either project."**
   - Assesses: Problem-Solving, Technical Depth, Debugging Methodology

4. **"What would you do differently if you rebuilt InstaDugo today?"**
   - Assesses: Learning Agility, Growth, Reflection

5. **"Tell me about a time you had to learn something new (like Kotlin). How did you approach it?"**
   - Assesses: Learning Agility, Growth Mindset, Initiative

6. **"Walk me through your MBC internship. What technical problems did you solve?"**
   - Assesses: Execution, Real-world Problem-Solving, Communication (also checks for embellishment)

---

## Red Flags vs. Green Flags

### 🚩 Red Flags
- Can't explain architectural decisions ("I just used Laravel")
- No mention of production deployment or operations
- Only one internship, no other work or open-source
- Can't describe specific debugging or problem-solving process
- Vague on what they personally built vs. team work
- Dismisses feedback or disagrees with all tech choices
- No evidence of learning from mistakes
- Unclear on availability/graduation timeline

### 🟢 Green Flags
- Clear architectural reasoning with business context
- Has deployed to production with operational thinking
- Learned Kotlin independently to expand skills
- Specific examples with debugging and problem-solving methodology
- Clear on personal role and impact
- Asks thoughtful questions about the role/company
- Reflects on mistakes and improvements
- Engaged and curious throughout interview

---

## Interview Decision Framework

**Scoring**: Each competency rated as Below / Meets / Exceeds

**Hiring Recommendation**:

| Profile | Action |
|---------|--------|
| **4+ Meets or Exceeds** | Strong Hire — Proceed to offer |
| **2-3 Meets, rest Below** | Maybe — Needs more data or specific depth areas |
| **2+ Exceeds** | Strong Hire + high potential for growth |
| **1+ Exceeds, rest Below** | Pass — Uneven skills; risky hire |
| **Mostly Below** | Pass — Not ready for this level |

**Special Consideration**: Given candidate is graduating 2026 (current student), scale expectations for "exceeds" appropriately. A junior showing meets/exceeds across all competencies is strong signal.

---

## For the Candidate: How to Prepare

### Before Each Interview Round:

1. **Know your projects inside-out**:
   - Database schema (draw it on paper)
   - Key architectural decisions and why
   - Production deployment process
   - What you'd do differently

2. **Prepare specific stories** (with numbers/metrics if possible):
   - Most complex problem solved
   - Time you learned something new
   - Mistake and what you learned
   - MBC work and impact

3. **Prepare questions for interviewers**:
   - "What does a typical day look like for engineers here?"
   - "What's the tech stack like for this role?"
   - "How do you support junior engineers' growth?"

4. **Practice explaining technical concepts** in 2 minutes:
   - Database normalization
   - API design
   - MVVM architecture
   - Health Connect integration

5. **Be ready for**: "What would you do differently?" and "Why didn't you...?"

---

## Company's Use of This Kit

### Before Scheduling Interviews:
- Share this rubric with all interviewers
- Align on what "exceeds" looks like for this level
- Assign which round each person leads

### During Interview Process:
- Each interviewer completes scorecard independently
- Don't share scores until full debrief
- Discuss evidence, not gut feel

### After All Rounds:
- Compare scores across interviewers
- Look for patterns
- Make hiring decision based on overall profile, not one bad interview
- Document reasoning for hiring decision

---

## Success Metrics

- **Time to hire**: Full process in <3 weeks
- **Offer acceptance**: >80% (offer extended to right people)
- **90-day performance**: Meets or exceeds expectations on first project
- **1-year retention**: Still engaged and growing
- **Interview consistency**: Multiple interviewers' scores aligned by round 2

