import * as path from 'node:path'
import { glob } from 'glob'
import { uniq } from './util'

/**
 * Globber interface.
 */
export interface IGlobber {
  /**
   * Globs for a filename.
   *
   * @param root
   */
  glob(root: string, filename: string): Promise<Array<string>>
}

/**
 * Creates a globber.
 */
export function createGlobber(): IGlobber {
  return {
    async glob(root: string, filename): Promise<Array<string>> {
      const source = await glob(path.join(root, filename), {
        ignore: '**/node_modules/**',
      })

      return uniq(source)
    },
  }
}
