"use client";
import HeroSection from "@/app/components/HeroSection";
import ArtisanCard from "@/app/components/ArtisanCard";
import { artisans } from "@/app/data/artisans";

import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredArtisans = artisans
    .filter((artisan) => {
      const matchesSearch =
        artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artisan.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !category || artisan.category === category;
      const matchesDuration = !duration || artisan.duration === duration;

      return matchesSearch && matchesCategory && matchesDuration;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "price-low") {
        const priceA = parseInt(
          a.price.replace("From  ₦", "").replace(/,/g, "")
        );
        const priceB = parseInt(
          b.price.replace("From  ₦", "").replace(/,/g, "")
        );
        return priceA - priceB; // Sort from lowest to highest
      }
      if (sortBy === "price-high") {
        const priceA = parseInt(
          a.price.replace("From  ₦", "").replace(/,/g, "")
        );
        const priceB = parseInt(
          b.price.replace("From  ₦", "").replace(/,/g, "")
        );
        return priceB - priceA; // Sort from highest to lowest
      }
      return 0;
    });

  return (
    <main className="flex flex-col gap-10 bg-gray-200">
      <HeroSection />

      <div className="container mx-auto px-4 text-center bg-white py-12">
        <h3 className="text-xl font-bold">
          Skilled <span className="text-orange-300">Artisans</span>
        </h3>
        <p>Book Workshops, Custom Commissions and Learning Experiences</p>
        <div className="mt-6 mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 max-w-5xl mx-auto px-4">
            <input
              type="text"
              placeholder="Search for artisans or services..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="w-full md:w-auto border border-gray-300 rounded-lg px-4 py-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All category</option>
              <option value="workshops">Workshops</option>
              <option value="commissions">Commissions</option>
              <option value="learning">Learning Experiences</option>
            </select>
            <select
              className="w-full md:w-auto border border-gray-300 rounded-lg px-4 py-2"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value="">All duration</option>
              <option value="short">Short (1-2 hours)</option>
              <option value="medium">Medium (3-5 hours)</option>
              <option value="long">Long (5+ hours)</option>
            </select>
            <select
              className="w-full md:w-auto border border-gray-300 rounded-lg px-4 py-2"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="rating">Highest Rating</option>
              <option value="price-low">Lowest Price</option>
              <option value="price-high">Highest Price</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h3 className="text-xl font-bold">Featured Artisans</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredArtisans.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      </div>
    </main>
  );
}
