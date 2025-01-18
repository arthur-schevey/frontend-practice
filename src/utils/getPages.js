import { readdirSync, statSync } from 'fs';
import { join } from 'path';

export function getPages(dir) {
  return readdirSync(dir).filter((file) => {
    const filePath = join(dir, file);
    return statSync(filePath).isDirectory();
  });
}