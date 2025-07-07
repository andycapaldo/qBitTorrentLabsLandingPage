'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pages = [
  { id: 1, src: '/page_1.png', alt: 'PDF Page 1' },
  { id: 2, src: '/page_2.png', alt: 'PDF Page 2' },
  { id: 3, src: '/page_3.png', alt: 'PDF Page 3' },
  { id: 4, src: '/page_4.png', alt: 'PDF Page 4' },
];

export default function PDFCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [focusedPage, setFocusedPage] = useState<number | null>(null);

  const currentPage = pages[currentIndex];

  const nextPage = () =>
    setCurrentIndex((prev) => (prev + 1) % pages.length);
  const prevPage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? pages.length - 1 : prev - 1
    );

    useEffect(() => {
      pages.forEach((page) => {
        const img = new Image();
        img.src = page.src;
    });
    }, []);


  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:py-2 text-white">
      <div className="relative flex items-center justify-center">
        <button
          onClick={prevPage}
          className="absolute left-0 z-10 px-3 py-1 text-white bg-secondary/40 rounded"
        >
          ◀
        </button>

        <motion.div
          key={currentPage.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg border-none border-white/10 rounded-lg overflow-hidden h-[600px] flex items-center justify-center"
          onClick={() =>
            setFocusedPage(
              focusedPage === currentPage.id ? null : currentPage.id
            )
          }
        >
          <img
            src={currentPage.src}
            alt={currentPage.alt}
            className="w-full h-auto object-contain hover:scale-105 transition-transform"
          />
        </motion.div>

        <button
          onClick={nextPage}
          className="absolute right-0 z-10 px-3 py-1 text-white bg-secondary/40 rounded"
        >
          ▶
        </button>
      </div>

      <p className="text-center mt-4 text-sm text-white">
        Page {currentIndex + 1} of {pages.length}
      </p>
    <div className="flex justify-center items-center mt-6">
        <a
          href="/PeakerCircuitsTecDes.pdf"
          download
          className="bg-secondary transition-all duration-300 ease-in-out 
          hover:bg-dark-blue hover:scale-[1.02] active:scale-[0.98] hover:text-white
          focus:bg-dark-blue focus:text-white
          active:bg-dark-blue active:text-white text-black px-4 py-2 rounded-full text-sm font-medium transition"
        >
          Download PDF
        </a>
      </div>

      <AnimatePresence>
        {focusedPage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFocusedPage(null)}
          >
            <motion.img
              src={pages.find((p) => p.id === focusedPage)?.src}
              alt="Focused Page"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
