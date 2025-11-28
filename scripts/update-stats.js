#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STATS_FILE = path.join(__dirname, '../src/data/stats.json');
const GITHUB_API_URL = 'https://api.github.com/repos/alainm23/planify';

async function fetchGitHubStars() {
  try {
    console.log('[INFO] Fetching GitHub repository statistics from API...');
    const response = await fetch(GITHUB_API_URL);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.stargazers_count;
  } catch (error) {
    console.error('[ERROR] Failed to fetch GitHub stars:', error.message);
    return null;
  }
}

async function updateStats() {
  try {
    // Read current stats
    const statsData = JSON.parse(fs.readFileSync(STATS_FILE, 'utf8'));
    console.log('[INFO] Current statistics loaded from file');
    
    // Fetch new GitHub stars
    const newStars = await fetchGitHubStars();
    
    if (newStars !== null) {
      const oldStars = statsData.githubStars;
      statsData.githubStars = newStars;
      
      // Write updated stats
      fs.writeFileSync(STATS_FILE, JSON.stringify(statsData, null, 2) + '\n');
      
      console.log('[SUCCESS] Statistics updated successfully');
      console.log(`[INFO] GitHub Stars: ${oldStars} → ${newStars} (${newStars > oldStars ? '+' : ''}${newStars - oldStars})`);
    } else {
      console.log('[WARNING] Failed to fetch GitHub stars, statistics not updated');
    }
  } catch (error) {
    console.error('[ERROR] Failed to update statistics:', error.message);
    process.exit(1);
  }
}

updateStats();