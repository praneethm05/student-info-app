# Student Information App

A simple Student Information Web App built as part of a lab exercise on
**Collaborative Git Workflows**.

The goal of this project is *not* to build a sophisticated web application.
The goal is to practise branching, pull requests, code review, and merge
conflict resolution using Git and GitHub.

---

## Team Members

| Name | Register Number | Role | Responsibility |
|------|-----------------|------|----------------|
| Praneeth M | 2547142 | Team Lead / UI Developer | Repository setup, base application, HTML/CSS, integration, PR review |
| Sam | 2547149 | JavaScript Developer | JavaScript functionality, merge conflict resolution |

---

## Project Description

The application displays basic student information on a single page:

- Student name
- Register number
- Programme

A **Show Details** button reveals additional details using plain JavaScript
(semester, CGPA, email, phone, date of birth and mentor). Clicking it again
hides them.

There is no database, no backend, and no framework. Everything runs directly
in the browser.

---

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- Git
- GitHub

---

## Project Structure

```
student-info-app/
│
├── index.html      # Page structure and student information
├── style.css       # Styling: card layout, spacing, button styles
├── script.js       # Show Details button functionality
└── README.md       # Project documentation
```

---

## Git Branching Strategy

`main` is the stable, integration branch. Nobody commits to `main` directly.
Every change is made on a feature branch and merged into `main` through a
pull request that another team member reviews.

| Branch | Author | Purpose |
|--------|--------|---------|
| `main` | — | Stable integration branch |
| `feature/ui` | Praneeth M | Card layout, spacing, headings, button styling |
| `feature/javascript` | Sam | Show Details button functionality, dark mode |
| `feature/student-name` | Praneeth M | Change heading to "Student Management System" |
| `feature/app-title` | Sam | Change heading to "MCA Student Information Portal" |
| `docs/readme-sync` | Sam | Keep this README in step with the repository |

---

## Pull Requests Created

| # | Pull Request | Author | Reviewed By | Status |
|---|--------------|--------|-------------|--------|
| 1 | `feature/ui` → `main` | Praneeth M | Sam | Merged |
| 2 | `feature/javascript` → `main` | Sam | Praneeth M | Merged |
| 3 | `feature/student-name` → `main` | Praneeth M | Sam | Merged |
| 4 | `feature/app-title` → `main` | Sam | Praneeth M | Merged after conflict resolution |

---

## Merge Conflict

### What caused the conflict?

Two branches were created from the same commit on `main` and both edited the
**same line** of `index.html` — the main page heading.

- `feature/student-name` changed
  `<h1>Student Information System</h1>` to
  `<h1>Student Management System</h1>`
- `feature/app-title` changed the same line to
  `<h1>MCA Student Information Portal</h1>`

`feature/student-name` was reviewed and merged into `main` first. When the
pull request for `feature/app-title` was opened, GitHub reported that the
branch could not be merged automatically, because Git had no way to decide
which of the two competing versions of that line was correct.

### How was it resolved?

The conflict was resolved locally on the `feature/app-title` branch:

```bash
git checkout main
git pull origin main
git checkout feature/app-title
git merge main
```

Git stopped and marked the conflicting region in `index.html`:

```
<<<<<<< HEAD
<h1>MCA Student Information Portal</h1>
=======
<h1>Student Management System</h1>
>>>>>>> main
```

The team agreed on a combined heading that kept the intent of both changes,
the conflict markers were removed, and the file was left as:

```html
<h1>Student Management System – MCA</h1>
```

The resolution was then staged, committed, and pushed:

```bash
git add index.html
git commit -m "Resolve merge conflict in application title"
git push origin feature/app-title
```

The pull request became mergeable, was reviewed, and was merged into `main`.

---

## How to Run the Application

No build step and no server are required.

1. Clone the repository:
   ```bash
   git clone https://github.com/praneethm05/student-info-app.git
   cd student-info-app
   ```
2. Open `index.html` in any web browser — double-click the file, or:
   ```bash
   open index.html        # macOS
   xdg-open index.html    # Linux
   start index.html       # Windows
   ```
3. Click **Show Details** to display the additional student details.

---

## Viewing the Commit History

To see the full collaborative history, including the branches and the merge
conflict resolution:

```bash
git log --oneline --graph --all
```

At the end of the exercise the history looked like this:

```
*   Merge pull request #4 from praneethm05/feature/app-title
|\
| *   Resolve merge conflict in application title
| |\
| |/
|/|
* |   Merge pull request #3 from praneethm05/feature/student-name
|\ \
| * | Update application heading
|/ /
| * Update application title
|/
*   Merge pull request #2 from praneethm05/feature/javascript
|\
| * Add register number for Sam in README
| * Add student details functionality
|/
*   Merge pull request #1 from praneethm05/feature/ui
|\
| * Change button background color to #2467c1
| * Improve student information UI
|/
* Initial student information app
```

The `Resolve merge conflict in application title` commit has **two parents** —
`Update application title` (from `feature/app-title`) and the tip of `main`
after `feature/student-name` was merged. That two-parent commit is the record
of the conflict being resolved.
