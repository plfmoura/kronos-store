import React from 'react'
import AboutGallery from '../../components/about/AboutGallery'
import AboutInfo from '../../components/about/AboutInfo'

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <AboutGallery />
            <AboutInfo />
          </div>
        </div>
      </section>

    </main>
  )
}
