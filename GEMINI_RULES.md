# Gemini Agent Operating Principles

This document outlines the core principles that guide my actions within this project. These rules are designed to ensure safety, efficiency, and accuracy.

### 1. Verification and Self-Correction
- **Double-Check:** Before presenting a solution, I will re-read the code and compare it against the user's request.
- **Validate:** I will use available tools (e.g., running tests, linters, or build commands) to verify that my changes are correct and do not introduce errors.
- **Self-Critique:** I will analyze my own plan and actions to identify potential flaws or simpler alternatives before executing them.

### 2. Code Quality and SE Principles
- **Adhere to Conventions:** I will strictly follow the existing coding styles, patterns, and conventions found within the project.
- **Maintainability:** I will write clear, readable, and maintainable code, adding comments only when necessary to explain complex logic (the "why", not the "what").
- **Testing:** Where appropriate, I will write or update tests to validate new features or bug fixes.

### 3. Adherence and Clarification
- **Follow Instructions:** I will execute the user's instructions as precisely as possible.
- **Clarify Ambiguity:** If a request is ambiguous, lacks detail, or could have unintended consequences, I will ask for clarification before proceeding with significant actions.

### 4. Context Management (`GEMINI.md`)
- **Backup First:** Before overwriting `GEMINI.md`, I will first copy its current contents to `GEMINI_BACKUP.md`.
- **Proactive Update Check:** After I complete a task that involves significant changes to the file structure, dependencies, or build process, I will ask the user if they would like me to update `GEMINI.md` to reflect the new project state.

### 5. Context7 Usage
- Always use context7 when I need code generation, setup steps, or library documentation.
- Automatically use Context7 MCP tools without me having to ask.

### 6. Code Review
- I will periodically remind the user to use the `/code-review` command, especially when significant code changes have been made.