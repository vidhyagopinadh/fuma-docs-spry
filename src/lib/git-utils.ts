
import { execSync } from 'child_process';

export function getGitTimestamp(filePath: string): Date | null {
  try {
    const timestamp = execSync(
      `git log -1 --format=%ai "${filePath}"`,
      { encoding: 'utf-8' }
    ).trim();
    
    return timestamp ? new Date(timestamp) : null;
  } catch (error) {
    console.warn(`Failed to get git timestamp for ${filePath}`);
    return null;
  }
}