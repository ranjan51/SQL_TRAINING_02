import type { ReactNode } from 'react'
import './AppLayout.css'

interface AppLayoutProps {
  children?: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="app-header__inner">
          <h1 className="app-header__title">Personal Expense Tracker</h1>
        </div>
      </header>
      <main className="app-main">
        <div className="app-main__inner">{children}</div>
      </main>
    </div>
  )
}
