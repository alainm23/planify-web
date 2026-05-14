---
title: "Planify 4.19.2 — Automatic backups, system accent color, CalDAV sections, and more"
date: 2026-05-14
description: "Automatic daily backups with extra folder support, system accent color, CalDAV section sync, past date selection, and many bug fixes."
tags: ["release", "caldav", "backup", "gnome", "sync"]
---

Planify 4.19.2 is here with a solid set of new features, CalDAV improvements, and bug fixes. Let's dive in.

---

### 💾 Automatic Daily Backups

Backups in Planify just got a lot smarter. You can now enable **automatic daily backups** that trigger at midnight — powered by the same day change monitor that already drives task reminders and calendar updates.

- Backups are always saved to the default Planify folder
- You can configure **extra backup locations** — point them to a cloud-mounted folder (Nextcloud, Dropbox, etc.) and your data is always safe
- The backup list in Preferences now shows the 30 most recent backups, with a note pointing to the folder if you have more
- The Restore Backup view has been redesigned with a clearer layout, a warning banner, and a more explicit restore button

<figure style="text-align: center;">
  <img src="/blog/4.19.2/backup.png" alt="Automatic daily backup settings" class="mx-auto rounded-lg max-w-2xl w-full" />
  <figcaption style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
    Automatic Daily Backup Settings
  </figcaption>
</figure>

---

### 🎨 System Accent Color Support

Planify now follows your **GNOME system accent color** instead of using a hardcoded blue. Set your accent color in GNOME Settings and Planify will match it automatically. Falls back to the default blue on systems that don't support it.

---

### 📂 CalDAV Section Support

Sections are now fully supported in CalDAV projects. Sections are represented as VTODOs with a `List: ` prefix in the summary — the same convention used by Nextcloud Deck — making them compatible with other CalDAV clients.

- Create, rename, and delete sections in CalDAV projects
- Sections sync bidirectionally — changes made in Nextcloud Tasks, Thunderbird, or any other CalDAV client are reflected in Planify after sync
- Tasks moved between sections sync correctly in both directions
- Deleting a section also deletes all its tasks on the server

This fixes long-standing issues [#1356](https://github.com/alainm23/planify/issues/1356), [#1700](https://github.com/alainm23/planify/issues/1700), and [#1355](https://github.com/alainm23/planify/issues/1355).

<figure style="text-align: center;">
  <img src="/blog/4.19.2/caldav-board.png" alt="CalDAV section support in Board view" class="mx-auto rounded-lg max-w-2xl w-full" />
  <figcaption style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
    CalDAV Section Support in Board View
  </figcaption>
</figure>

---

### 📅 Past Date Selection in Date Picker

The date picker now lets you select **past dates** — useful for logging overdue tasks or backdating entries. Past days are shown with a dimmed style, today is highlighted as usual, and a floating **Today** pill button appears when you scroll away from the current month so you can jump back instantly.

---

### 📤 Export as .ics for CalDAV Tasks

CalDAV tasks now have an **Export as .ics** option in their context menu. It exports the original `.ics` data received from the server — handy for debugging sync issues or sharing tasks with other apps.

---

### 📋 Change History Improvements

The per-task change history got several improvements:

- **DEADLINE** and **PARENT** changes are now tracked
- Replaced the "Load more" button with **infinite scroll** — history loads automatically as you scroll down
- Short values (due date, priority, pinned, deadline, parent) now show as **chips** with old → new arrows
- Long values (content, description, labels) are **expandable** with a "See more" button

---

### 🔧 CalDAV Fixes

**Horde server compatibility:**
Horde returns HTTP 200 OK instead of 201 Created when creating or updating tasks via PUT. Planify was treating this as an error — now both status codes are accepted. Additionally, Horde sometimes sends multiple VTODOs in a single `.ics` file (parent + subtask). Planify now handles this correctly so subtasks no longer appear as main tasks.

---

### 🐛 Bug Fixes

- **Calendar events not updating after midnight** — when Planify was kept open past midnight, the Today view would still show the previous day's events. Fixed.
- **Labels not removed in multi-select** — deselecting a label in the multi-select toolbar had no effect. Also fixed a case where closing the label picker without changes would incorrectly assign labels to tasks that didn't have them.
- **Inaccurate section counts in Board view** — task counters were showing wrong numbers after drag and drop. Fixed.
- **Board view inbox section** — the inbox column now auto-hides when it has no uncompleted tasks, matching Todoist behavior.
- **Moving tasks between sources** — tasks can now be moved between projects from different sources (e.g. CalDAV → Local).
- **Double sync on new source** — adding a new source was triggering two syncs instead of one. Fixed.

---

## 🔭 What's Next

Here's a glimpse of what we're actively working on:

- **Nextcloud Deck full compatibility** — deeper integration with Nextcloud Deck boards, including better sync and UI support. Follow the progress in [PR #2426](https://github.com/alainm23/planify/pull/2426).
- **Google Tasks support** — native Google Tasks integration is on the roadmap, bringing another cloud option for users who live in the Google ecosystem.
- **Local AI integration via Ollama** — AI-assisted features like subtask suggestions, project summaries, and smart task descriptions, running entirely on your machine with no API key required. Join the discussion in [issue #2467](https://github.com/alainm23/planify/issues/2467).

Exciting times ahead — stay tuned! 🚀

---

## 💬 Get Involved

Planify thrives thanks to community feedback and contributions. You can help by:

- **🌍 Translate**: Help bring Planify to your language via [Weblate](https://hosted.weblate.org/engage/planner/)
- **🐛 Report bugs**: Found an issue? [Open an issue on GitHub](https://github.com/alainm23/planify/issues)
- **💡 Suggest features**: Share your ideas for making Planify even better
- **📢 Spread the word**: Follow [@planifyapp](https://mastodon.social/@planifyapp) on Mastodon
- **☕ Support development**: [Support Planify's development](/donate)

---

**Download Planify 4.19.2 now on [Flathub](https://flathub.org/en/apps/io.github.alainm23.planify)**

Stay organized, stay inspired ✨
