# 03 — Git Basics: Your Workflow, Step by Step

You don't need to be a Git expert for this project — you need to know **one
workflow**, repeated the same way every time. This doc walks through it
command by command. Copy, paste, swap in your own member number, done.

> 🛑 **The golden rule: only touch your own two files.**
> One backend route file and one frontend card file — that's it. If you only
> ever edit those two files, you can never cause a "merge conflict" with
> anyone else, because nobody else is editing them. This single habit is what
> makes 11 people working at once *not* a disaster.

## The workflow

Here's the exact sequence. Replace `member-3` with **your** member number
everywhere you see it, and replace the file names with **your** two files
(see [05-assignments.md](05-assignments.md) for which ones are yours).

```bash
git clone <repo-url>          # get the project
```
Downloads a full copy of the project (and its whole history) onto your
computer. You only do this once, at the very start.

```bash
cd minidash
```
Moves your terminal into the project folder so the rest of the commands run
in the right place.

```bash
git checkout -b member-3      # YOUR branch (use your member number)
```
Creates a new "branch" — your own private line of work — and switches to it.
Branches let you make changes without touching the shared `main` version
until you're ready. `-b` means "create it, then switch to it."

```bash
# ...edit ONLY your two files: routes/stats.routes.js and components/StatsCard.js...
```
This is where the actual work happens! Open your stub files, follow the
guide comments at the top of each one, and build your card + endpoint.
**Don't edit anything else.**

```bash
git add backend/routes/stats.routes.js frontend/components/StatsCard.js
```
"Stages" your two changed files — tells Git "these are the changes I want to
save in my next commit." Naming them explicitly (instead of using `git add .`)
is a safety habit: it guarantees you only ever commit your own files.

```bash
git commit -m "Member #3: implement stats endpoint and card"
```
Saves a snapshot of your staged changes, with a short message describing what
you did. Good commit messages are short, present-tense, and say *what*
changed.

```bash
git push origin member-3      # push your branch
```
Uploads your branch (and its commits) to the shared remote repository (e.g.
GitHub), so others — and you, from another computer — can see it.

```bash
# then open a Pull Request on GitHub: base = main, compare = member-3
```
A **Pull Request (PR)** is a request to merge your branch into `main`. On
GitHub, you'll pick "base: `main`" (where you want your changes to go) and
"compare: `member-3`" (your branch with the changes). This is also where a
teammate can review your code before it joins the shared project — completely
normal, and a great way to learn from each other.

```bash
git pull origin main          # later, get everyone else's merged work
```
Downloads and merges the latest `main` into your current branch. Run this
whenever you want to catch up with everyone else's finished, merged work —
for example, before you start your *next* task, or just to see the dashboard
fill up with other people's finished cards.

## Quick troubleshooting

- **"I'm not sure what branch I'm on"** → run `git status`. It tells you your
  current branch and which files you've changed.
- **"I think I edited the wrong file"** → run `git status` to see everything
  that changed, and double-check against your two assigned files before you
  `add`/`commit`.
- **"Should I `git pull` before I start?"** → Yes — start every session with
  `git checkout main && git pull origin main` before branching off again, so
  you're building on the latest version of the project.

## Why this all matters

Because every member only ever edits two files that nobody else touches, your
Pull Request will almost never have a "merge conflict" — Git's term for "two
people changed the same lines and it doesn't know which one to keep." Stick
to your two files, and Git basics are honestly... pretty boring. Which is
exactly what you want from your tools. 🙂
