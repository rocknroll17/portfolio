import cs from 'classnames'
import * as React from 'react'

import { MoonIcon } from '@/lib/icons/moon'
import { SunIcon } from '@/lib/icons/sun'
import { useDarkMode } from '@/lib/use-dark-mode'

// Matches the top-right controls of cv.rocknroll17.com
export function NotionPageHeader() {
  const { hasMounted, isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className='top-controls'>
      <a className='pdf-btn' href='https://cv.rocknroll17.com' title='CV'>
        CV
      </a>
      <button
        className='pdf-btn'
        type='button'
        aria-label='Save as PDF'
        title='Save as PDF'
        onClick={() => window.print()}
      >
        <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
          <path d='M12 4v11' />
          <path d='M7 10l5 5 5-5' />
          <path d='M5 20h14' />
        </svg>
        PDF
      </button>
      <button
        className={cs('theme-toggle', !hasMounted && 'theme-toggle-hidden')}
        type='button'
        aria-label='Toggle dark mode'
        title='Toggle dark mode'
        onClick={toggleDarkMode}
      >
        {hasMounted && isDarkMode ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  )
}
