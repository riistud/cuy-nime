import React from "react";

export default function Footer() {
  return (
    <section className="w-full py-5 bg-secondary font-sans">
      <footer className="container mx-auto px-5 flex flex-col">
        <h1 className="w-full text-center text-foreground text-xl md:text-2xl font-extrabold mb-2">
          KUYNIME
        </h1>
        <p className="w-full text-center text-foreground/50 text-xs md:text-sm">
          Copyright © 2025 KuyNime. All Rights Reserved
        </p>
        <p className="w-full text-center text-foreground/50 text-xs md:text-sm">
          Notice: This website is an unofficial and illegal website. Official
          website gojonime.com
        </p>
      </footer>
    </section>
  );
}
