import 'dotenv/config';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const API_KEY = process.env.SUPADATA_API_KEY;

const videos = [
  {
    expert: 'jack-reamer',
    url: 'https://www.youtube.com/watch?v=x2VMwF_pTE0',
    title: 'I Had to Reply to This Brilliant InMail',
    date: '2024-09-11'
  }
];

async function fetchTranscript(videoUrl) {
  const response = await fetch(`https://api.supadata.ai/v1/youtube/transcript?url=${encodeURIComponent(videoUrl)}`, {
    headers: { 'x-api-key': API_KEY }
  });
  if (!response.ok) {
    throw new Error(`Supadata API error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function saveTranscript(expert, title, date, transcriptText) {
  const dir = path.join('research', 'youtube-transcripts', expert);
  fs.mkdirSync(dir, { recursive: true });
  const filename = `${title}-${date}.md`.replace(/\s+/g, '-').toLowerCase();
  const filepath = path.join(dir, filename);
  const content = `# ${title}\n\n**Date:** ${date}\n**Expert:** ${expert}\n\n---\n\n${transcriptText}\n`;
  fs.writeFileSync(filepath, content);
  console.log(`Saved: ${filepath}`);
}

async function main() {
  for (const video of videos) {
    try {
      console.log(`Fetching transcript for: ${video.url}`);
      const data = await fetchTranscript(video.url);
      let transcriptText;
      if (Array.isArray(data.content)) {
        transcriptText = data.content.map(segment => segment.text).join(' ');
      } else if (typeof data.content === 'string') {
        transcriptText = data.content;
      } else {
        transcriptText = JSON.stringify(data, null, 2);
      }
      await saveTranscript(video.expert, video.title, video.date, transcriptText);
    } catch (err) {
      console.error(`Failed for ${video.url}:`, err.message);
    }
  }
}

main();
