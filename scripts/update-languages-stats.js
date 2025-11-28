#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STATS_FILE = path.join(__dirname, '../src/data/stats.json');
const WEBLATE_API_URL = 'https://hosted.weblate.org/api/projects/planner/languages/';

async function fetchWeblateLanguages() {
  try {
    console.log('[INFO] Fetching language statistics from Weblate API...');
    const response = await fetch(WEBLATE_API_URL);
    
    if (!response.ok) {
      throw new Error(`Weblate API error: ${response.status}`);
    }
    
    const data = await response.json();
    // Only count languages with more than 0% translation
    const activeLanguages = data.filter(lang => lang.translated_percent > 0);
    return activeLanguages.length;
  } catch (error) {
    console.error('[ERROR] Failed to fetch Weblate languages:', error.message);
    return null;
  }
}

async function updateStats() {
  try {
    // Read current stats
    const statsData = JSON.parse(fs.readFileSync(STATS_FILE, 'utf8'));
    console.log('[INFO] Current statistics loaded from file');
    
    // Fetch new language count
    const newLanguages = await fetchWeblateLanguages();
    
    if (newLanguages !== null) {
      const oldLanguages = statsData.languages;
      statsData.languages = newLanguages;
      
      // Write updated stats
      fs.writeFileSync(STATS_FILE, JSON.stringify(statsData, null, 2) + '\n');
      
      console.log('[SUCCESS] Statistics updated successfully');
      console.log(`[INFO] Active Languages: ${oldLanguages} → ${newLanguages} (${newLanguages > oldLanguages ? '+' : ''}${newLanguages - oldLanguages})`);
    } else {
      console.log('[WARNING] Failed to fetch Weblate languages, statistics not updated');
    }
  } catch (error) {
    console.error('[ERROR] Failed to update statistics:', error.message);
    process.exit(1);
  }
}

updateStats();