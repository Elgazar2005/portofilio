import React from 'react'
import { Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-secondary dark:bg-gray-900 text-secondary-foreground py-8 px-5 md:px-15">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-['Poppins'] font-semibold text-lg mb-1">
              Omar Ahmed Fathy Elgazar
            </p>
            <p className="text-secondary-foreground/70 text-sm">
              Computer Science Student & Web Developer
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-secondary-foreground/70">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Omar Elgazar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer