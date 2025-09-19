---
title: "Planify 4.14 is here"
date: 2025-09-19
description: "Planify 4.14 brings CalDAV support, improved synchronization with Nextcloud and Todoist, memory leak fixes, new sidebar filters, better task design, and performance improvements. Available now on Flathub"
---

The new version of Planify comes with some of the most requested features, important bug fixes, and performance improvements to make your experience smoother than ever.  


### 📅 CalDAV Support  
Thanks to the great work of [@byquanton](https://github.com/byquanton), we’ve completely rewritten the CalDAV backend.  
Planify now works seamlessly with **Radicale, Baïkal, and other servers that follow the CalDAV standard**.  
This was one of the most requested features ([issue #1149](https://github.com/alainm23/planify/issues/1149)) and it’s finally here.  
- Faster and more robust backend.  
- Stable connections even with invalid TLS certificates (optional).  

### 🧹 Reduced Memory Usage  
With the help of [@markochk](https://github.com/markochk), we were able to identify and fix several memory leaks:  
- Memory was not properly released when completing or deleting tasks.  
- A leak was fixed during CalDAV synchronization.  
- We introduced a **new cache system for views**: unused views are released after some time and rebuilt when needed, automatically freeing memory.  

### 🗂️ New Sidebar Filters  
Quickly access new task views such as:  
- **Tomorrow**  
- **Anytime**  
- **Repeating**  
- **Unlabeled**  
- **All Tasks**  

You can customize which views to show, and switch between a **compact list view** or a more detailed one.  

<figure style="text-align: center;">
  <img src="/blog/4.14.0/sidebar.png" alt="Sidebar" class="mx-auto rounded-lg max-w-2xl w-full" />
  <figcaption style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
    New sidebar filters
  </figcaption>
</figure>

### 🔄 Improved Synchronization  
Another highly requested feature: Planify now **respects task order** when syncing with Nextcloud or Todoist.  
We also added a new algorithm that allows **task reordering without affecting performance**, ensuring consistency across platforms.  

### 🖥️ Moving Closer to Other Platforms  
Thanks again to [@byquanton](https://github.com/byquanton), work is in progress to make WebKit and Evolution dependencies optional.  
This will pave the way for **Planify to run on Windows and macOS** in the future.

<figure style="text-align: center;">
  <img src="/blog/4.14.0/windows.png" alt="Planify Windows" class="mx-auto rounded-lg max-w-2xl w-full" />
  <figcaption style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
    Planify running on Windows
  </figcaption>
</figure>

<figure style="text-align: center;">
  <img src="/blog/4.14.0/macOS.png" alt="Planify macOS" class="mx-auto rounded-lg max-w-2xl w-full" />
  <figcaption style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
    Planify running on macOS
  </figcaption>
</figure>

## 🌟 Other Improvements  
- Spell checker support in task descriptions.  
- Fixed a bug when moving tasks with subtasks in Nextcloud/CalDAV projects.  
- Updated themes (light, dark, dark blue) and overall design improvements.  
- Labels and indicators for notes, reminders, and subtasks are now aligned to the right of each task for better readability.  
- New quick-add button in every task list.  
- Beautiful new animation when completing tasks.  
- New sound and a notification when completing tasks (to avoid confusion when tasks "disappear").  

<div class="max-w-2xl mx-auto">
  <figure class="w-full">
    <video 
      class="w-full rounded-lg shadow-md"
      controls 
      src="/blog/4.14.0/complete-animation.mp4">
    </video>
    <figcaption class="mt-2 text-center text-sm text-gray-600">
      Redesigned appearance page and new font size selector
    </figcaption>
  </figure>
</div>

## 📥 Download  
Planify 4.14 is now available on **[Flathub](https://flathub.org/apps/io.github.alainm23.planify)**.  

---

## 🔮 Looking ahead to Planify 4.15  

With the new CalDAV backend ready, we’ve started exploring some ideas for upcoming releases:  

- **Google Tasks integration** to expand synchronization options.  
- **Natural language date recognition**, making it easier to set due dates as you type.  
- **An improved Markdown editor** for a smoother writing experience.  

These are not fixed goals yet, but areas we’d love to explore with the help of the community and new technologies. Stay tuned! 🚀  


