import { execSync } from 'child_process';
import path from 'path';

export interface GitTimestampResult {
  timestamp: Date | null;
  author?: string;
  commit?: string;
}

/**
 * Get the last Git commit timestamp for a file
 */
export function getGitTimestamp(filePath: string): Date | null {
  try {
    const absolutePath = path.isAbsolute(filePath) 
      ? filePath 
      : path.join(process.cwd(), filePath);

    const timestamp = execSync(
      `git log -1 --format=%ai "${absolutePath}"`,
      { encoding: 'utf-8' }
    ).trim();
    
    return timestamp ? new Date(timestamp) : null;
  } catch (error) {
    console.warn(`Failed to get git timestamp for ${filePath}:`, error);
    return null;
  }
}

/**
 * Get detailed Git information for a file
 */
export function getGitInfo(filePath: string): GitTimestampResult {
  try {
    const absolutePath = path.isAbsolute(filePath) 
      ? filePath 
      : path.join(process.cwd(), filePath);

    // Get timestamp
    const timestamp = execSync(
      `git log -1 --format=%ai "${absolutePath}"`,
      { encoding: 'utf-8' }
    ).trim();

    // Get author
    const author = execSync(
      `git log -1 --format=%an "${absolutePath}"`,
      { encoding: 'utf-8' }
    ).trim();

    // Get commit hash
    const commit = execSync(
      `git log -1 --format=%h "${absolutePath}"`,
      { encoding: 'utf-8' }
    ).trim();

    return {
      timestamp: timestamp ? new Date(timestamp) : null,
      author: author || undefined,
      commit: commit || undefined,
    };
  } catch (error) {
    console.warn(`Failed to get git info for ${filePath}:`, error);
    return { timestamp: null };
  }
}

/**
 * Get all contributors for a file
 */
export function getGitContributors(filePath: string): string[] {
  try {
    const absolutePath = path.isAbsolute(filePath) 
      ? filePath 
      : path.join(process.cwd(), filePath);

    const contributors = execSync(
      `git log --format=%an "${absolutePath}" | sort -u`,
      { encoding: 'utf-8' }
    )
      .trim()
      .split('\n')
      .filter(Boolean);

    return contributors;
  } catch (error) {
    console.warn(`Failed to get git contributors for ${filePath}:`, error);
    return [];
  }
}