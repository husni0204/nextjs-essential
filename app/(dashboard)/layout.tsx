import React from 'react'

const DashboardLayout = ({children}: {
    children: React.ReactNode
}) => {
  return (
    <main>
        <header className='border-b border-green-200'>
            Dashboard Layout
        </header>
        {children}
    </main>
  )
}

export default DashboardLayout