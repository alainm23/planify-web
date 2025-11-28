#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STATS_FILE = path.join(__dirname, '../src/data/stats.json');
const FLATHUB_API_URL = 'https://flathub.org/api/v2/stats/io.github.alainm23.planify';

async function fetchFlathubDownloads() {
  try {
    console.log('[INFO] Fetching Flathub download statistics from API...');
    const response = await fetch(FLATHUB_API_URL);
    
    if (!response.ok) {
      throw new Error(`Flathub API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.installs_total;
  } catch (error) {
    console.error('[ERROR] Failed to fetch Flathub downloads:', error.message);
    return null;
  }
}

async function updateStats() {
  try {
    // Read current stats
    const statsData = JSON.parse(fs.readFileSync(STATS_FILE, 'utf8'));
    console.log('[INFO] Current statistics loaded from file');
    
    // Fetch new Flathub downloads
    const newDownloads = await fetchFlathubDownloads();
    
    if (newDownloads !== null) {
      const oldDownloads = statsData.flathubDownloads;
      statsData.flathubDownloads = newDownloads;
      
      // Write updated stats
      fs.writeFileSync(STATS_FILE, JSON.stringify(statsData, null, 2) + '\n');
      
      console.log('[SUCCESS] Statistics updated successfully');
      console.log(`[INFO] Flathub Downloads: ${oldDownloads.toLocaleString()} → ${newDownloads.toLocaleString()} (${newDownloads > oldDownloads ? '+' : ''}${(newDownloads - oldDownloads).toLocaleString()})`);
    } else {
      console.log('[WARNING] Failed to fetch Flathub downloads, statistics not updated');
    }
  } catch (error) {
    console.error('[ERROR] Failed to update statistics:', error.message);
    process.exit(1);
  }
}

updateStats();