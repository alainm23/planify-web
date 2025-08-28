---
title: "Planify 4.13.4 – New Features & Improvements"
date: 2025-08-27
description: "Planify 4.13.4 comes with new features like font size selector, weekday/weekend recurring tasks, and markdown support, along with key bug fixes and UI improvements."
---

We’re excited to announce the release of **Planify 4.13.4**, packed with new features, UI refinements, and important bug fixes that make your task management experience smoother than ever.

## ✨ Highlights

- **Font Size Selector** – Adjust the font size inside the app for better accessibility and reading comfort.
- **New Recurring Options** – Added support for **weekday/weekend recurring tasks**, giving you more flexibility when scheduling.
- **“Today” in Scheduled View** – A new **Today section** helps you quickly see what’s due today alongside upcoming tasks, improving weekly planning at a glance.

<div class="max-w-2xl mx-auto">
  <figure class="w-full">
    <video 
      class="w-full rounded-lg shadow-md"
      controls 
      src="/blog/4.13.4/font-size.mp4">
    </video>
    <figcaption class="mt-2 text-center text-sm text-gray-600">
      Redesigned appearance page and new font size selector
    </figcaption>
  </figure>
</div>

- **Smarter Quick Add** – Planify now remembers the **last used project** in Quick Add, speeding up task creation.
- **Markdown Support in Task Titles** – With the new **MarkdownProcessor**, task titles now render inline code and markdown styling for clearer task descriptions.

<figure style="text-align: center;">
  <img src="/blog/4.13.4/markdown-processor.png" alt="Markdown processor" class="mx-auto rounded-lg max-w-2xl w-full" />
  <figcaption style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
    New Markdown processor in task titles ✨
  </figcaption>
</figure>

- **Keyboard Shortcuts Help** – Added a handy popover in the task dialog to discover shortcuts for priorities, labels, projects, and reminders.
- **Adaptive Windows (Partial Support)** – Initial improvements for small screens make Planify more comfortable to use across different window sizes.

<figure style="text-align: center;">
  <img src="/blog/4.13.4/adaptive-windows.png" alt="Adaptive Windows" class="mx-auto rounded-lg max-w-2xl w-full" />
  <figcaption style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
    New Markdown processor in task titles ✨
  </figcaption>
</figure>

## 🐛 Bug Fixes & Polishing

- Fixed **duplicate sync at startup**, avoiding unnecessary background processes.
- Improved **drag-and-drop** animations and fixed the issue where items couldn’t be reordered at the end of a list.

<div class="max-w-md mx-auto">
  <figure class="w-full">
    <video 
      class="w-full rounded-lg shadow-md"
      controls 
      src="/blog/4.13.4/drag-d-drop.mp4">
    </video>
    <figcaption class="mt-2 text-center text-sm text-gray-600">
      Quick Add now feels faster
    </figcaption>
  </figure>
</div>

- Fixed **attachment opening failures** with stronger validation and error handling.
- Improved **shortcut handling** so characters like `@`, `!`, and `p1–p4` can be typed literally in task titles.

<div class="max-w-2xl mx-auto">
  <figure class="w-full">
    <video 
      class="w-full rounded-lg shadow-md"
      controls 
      src="/blog/4.13.4/target-label.mp4">
    </video>
    <figcaption class="mt-2 text-center text-sm text-gray-600">
      Quick Add now feels faster
    </figcaption>
  </figure>
</div>

- Back button in the right sidebar now only appears when a parent task exists (removing duplicate “close” behavior).
- Day change detection is now more reliable, even after suspending or closing the laptop.

---

⚡️ With these updates, Planify becomes faster, smarter, and easier to use — whether you’re planning your week, writing detailed markdown notes, or simply managing daily reminders.
