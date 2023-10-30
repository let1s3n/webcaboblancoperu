import React, { useState, useEffect } from 'react'

export default function DefaultLayout({ children }) {

  return (
    <>
      <main className="main-container">{children}</main>
    </>
  )
}