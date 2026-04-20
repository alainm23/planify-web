---
title: "Planify 4.19.0 — CalDAV overhaul, GNOME Search, and productivity features"
date: 2026-04-20
description: "Major CalDAV improvements, GNOME Shell search integration, ETag conflict detection, productivity stats, PDF export, and many bug fixes."
tags: ["release", "caldav", "gnome", "productivity", "sync"]
---

Planify 4.19.0 is our biggest CalDAV release yet. We've been listening to your reports and working hard to make sync more reliable across all servers — Nextcloud, Radicale, Vikunja, Posteo, Mailbox.org, and more. On top of that, we're introducing GNOME Shell search integration, a new productivity dialog, PDF export, and a long list of improvements and bug fixes.

---

### 🔍 GNOME Shell Search Integration

Planify now integrates with GNOME Shell search. Press **Super** and start typing — your tasks and projects appear instantly without opening the app.

- Search tasks by content and description
- Search projects by name
- Tasks show the project they belong to
- Projects show the number of pending tasks
- Clicking a result opens Planify and navigates directly to the item

This is one of the most requested features and it works beautifully with the GNOME desktop experience.

---

### 📊 Summary & Productivity Dialog

A new **Summary & Productivity** option in the main menu gives you a quick overview of your work:

- **Summary**: total, pending, completed, and overdue task counts with an overall progress bar
- **Productivity**: daily and weekly completed tasks tracked against your personal goals
- Configurable daily and weekly task goals
- Animated count-up effects for all stats
- Motivational messages based on your progress

This is Phase 1 of the feature — future releases will bring charts, streaks, and more advanced statistics.

---

### 📄 PDF Export for Projects

You can now export any project as a PDF from the project context menu (**Export as PDF**).

The generated PDF includes:
- Project name, description, and deadline
- Tasks with status, due date, priority (color-coded), and deadline
- Sections ordered by position
- Subtasks with indentation
- Automatic page breaks

No extra dependencies — uses Cairo directly.

---

### 🔄 Major CalDAV Improvements

This release includes the most comprehensive CalDAV improvements in Planify's history.

**Conflict Detection with ETag / If-Match**

Planify now tracks ETags for CalDAV tasks. When you update a task, it sends an `If-Match` header to the server. If another client modified the same task in the meantime, the server returns HTTP 412 and Planify shows a friendly toast: *"Task was modified on another device"* with a **Sync Now** button — instead of silently overwriting changes.

**Sync-Collection Fallback**

Some CalDAV servers (Posteo, Mailbox.org, Horde, KolabNow, Vikunja) don't support `sync-collection` REPORT. Previously this caused incoming sync to silently fail. Now Planify automatically falls back to a full fetch, ensuring two-way sync works on all these servers.

**Other CalDAV fixes:**
- Fixed due date not clearing when removed from an external client (Nextcloud web, Tasks.org)
- Fixed completed subtasks showing as incomplete after sync
- Fixed duplicate projects when re-adding a CalDAV account
- Fixed automatic sync not starting after adding a new account
- Fixed disabled accounts still being contacted during sync
- Fixed project creation failing on Vikunja (HTTP 200 vs 201)
- Added PUT+DELETE fallback when MOVE is not supported (Radicale with reverse proxy)
- Skipped archived projects during sync for better performance
- User-friendly messages for HTTP 401 (auth expired) and HTTP 429 (rate limiting)

---

### ✨ Other New Features

**Per-project Markdown Rendering**

You can now control markdown rendering per project — override the global setting with *Global Default*, *Enabled*, or *Disabled* from the project edit dialog.

**Copy to Clipboard in Multi-Select**

The multi-select toolbar now includes a *Copy to Clipboard* option that copies all selected tasks with full details: priority, due date, deadline, labels, and description.

**Asterisk Prefix for Notes**

Tasks starting with `* ` (asterisk + space) are automatically treated as notes, hiding the checkbox. Works in real-time while editing and syncs with Todoist.

---

### 🐛 Bug Fixes

- Fixed date picker not visible on small screens (1366×768)
- Fixed day change not detected after system suspend/resume — now uses precise midnight scheduling and listens to system resume events
- Fixed date reset when using *Keep Adding* from Today View
- Fixed invalid Todoist API token being silently accepted
- Fixed calendar day alignment and improved CalendarMonth to show 3 weeks ahead
- Fixed inbox project radio button allowing deselection

---

### 🎨 UI Improvements

- Redesigned CalDAV, Nextcloud, and Todoist token setup pages with consistent header layout
- Replaced WebKitGTK with external browser for Todoist OAuth — removes WebKitGTK as a dependency
- Clarified Due Date vs Deadline labels with improved tooltips
- Filtered labels from archived projects in Labels view and Label Picker

---

## 💬 Get Involved

Planify thrives thanks to community feedback and contributions. You can help by:

- **🌍 Translate**: Help bring Planify to your language via [Weblate](https://hosted.weblate.org/engage/planner/)
- **🐛 Report bugs**: Found an issue? [Open an issue on GitHub](https://github.com/alainm23/planify/issues)
- **💡 Suggest features**: Share your ideas for making Planify even better
- **📢 Spread the word**: Follow [@planifyapp](https://mastodon.social/@planifyapp) on Mastodon
- **☕ Support development**: [Support Planify's development](/donate)

---

**Download Planify 4.19.0 now on [Flathub](https://flathub.org/en/apps/io.github.alainm23.planify)**

Stay organized, stay inspired ✨
