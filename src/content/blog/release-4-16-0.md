---
title: "Planify 4.16.0 — Natural dates, smoother flows, and smarter task handling"
date: 2025-11-21
description: "Natural language date parsing, better task movement between backends, UI refinements, and powerful new shortcuts."
tags: ["release", "dates", "shortcuts", "labels", "calendar"]
---

This release focuses on making Planify smarter, more intuitive, and more predictable — especially when working across multiple backends, scheduling tasks, and using keyboard shortcuts. Version 4.16.0 introduces natural language date parsing, backend consistency fixes, UI refinements, and several highly requested improvements that make everyday task management smoother.

---

### 📅 Natural language date parsing

Planify now understands dates the way you naturally think about them. Whether you're typing a specific timestamp or something casual, the new date processor effortlessly turns your text into structured scheduling — and it's enabled by default in Quick Add.

If you prefer not to use natural language parsing, you can turn it off anytime from Preferences.

**What’s new:**
- **ISO 8601 support** (`2024-12-25`, `2024-01-15T14:30`)
- **Slash and dot dates** (`25/12/2024`, `31.12.2024`)
- **Time detection** (`14:30`, `2:30pm`, `3pm`)
- **Casual expressions**: `today`, `tomorrow`, `yesterday`, `now`
- **Full month names and variations**: `March 15`, `15 March`, `January`

<div class="max-w-2xl mx-auto">
  <figure class="w-full">
    <video 
      class="w-full rounded-lg shadow-md"
      controls 
      src="/blog/4.16.0/natural-date.mp4">
    </video>
    <figcaption class="mt-2 text-center text-sm text-gray-600">
      Natural language date parsing
    </figcaption>
  </figure>
</div>

This new engine is designed to be extensible, powering future language support and smarter interpretations across all parts of Planify.

---

### 🇪🇸 Spanish date parsing support

Spanish-speaking users now get full natural language support — not just for basic dates, but for nuanced expressions used every day.

**Supported expressions include:**
- **Casual**: *hoy*, *mañana*, *ayer*, *pasado mañana*
- **Relative**: *próxima semana*, *mes pasado*, *este año*
- **Time of day**: *por la mañana*, *en la tarde*, *por la noche*
- **Month names**: both accented and unaccented forms

This makes scheduling tasks in Spanish faster, smoother, and far more intuitive.

---

### ⌨️ Smarter keyboard control

We've refined keyboard interactions throughout Planify to make navigation faster and more intuitive for power users — and added new shortcuts to speed up task scheduling.

**Highlights:**
- **Ctrl+D** now instantly opens the date picker, making it much faster to schedule or reschedule tasks without moving your hands from the keyboard
- **Ctrl+K**: New shortcut to toggle **Keep adding**
- Ctrl shortcuts (Ctrl+C, Ctrl+V, Ctrl+A) **no longer** toggle Keep adding unintentionally
- Shortcuts help popover updated with the new keybindings

These changes make Planify more predictable and keyboard-friendly for fast task entry.

---

### 🏷️ Labels in the task context menu

Managing labels is now even faster. A new **Labels** option has been added directly to the right-click context menu.

This gives you quick access to add, remove, or change labels without opening the full task editor.

---

### 📅 Event details popover + meeting integration

Clicking an event now opens a clean, helpful popover with additional details.  
For meeting events, Planify also detects:

- **Google Meet links**
- **Microsoft Teams links**

This makes joining calls from your tasks and events frictionless and obvious.

<figure style="text-align: center;">
  <img src="/blog/4.16.0/event-detail.png" alt="Event details popover" class="mx-auto rounded-lg max-w-2xl w-full" />
  <figcaption style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
    Event details popover
  </figcaption>
</figure>

---

## 💬 Get involved

Planify thrives thanks to community feedback and contributions. You can help by:

- **🌍 Translate**: Help bring Planify to your language via [Weblate](https://hosted.weblate.org/engage/planner/)
- **🐛 Report bugs**: Found an issue? [Open an issue on GitHub](https://github.com/alainm23/planify/issues)
- **💡 Suggest features**: Share your ideas for making Planify even better
- **📢 Spread the word**: Follow [@planifyapp](https://mastodon.social/@planifyapp) on Mastodon and share with friends
- **☕ Support development**: [Support Planify's development](/support)

---

**Download Planify 4.16.0 now on [Flathub](https://flathub.org/en/apps/io.github.alainm23.planify)**

Stay organized, stay inspired ✨
