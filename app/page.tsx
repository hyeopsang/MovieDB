import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Star, Calendar, Newspaper, Box } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import MainBanner from "./_components/main-banner";
import NewsEventTab from "./_components/news-event";
import BoxOffice from "./_components/boxoffice";
import NewMovie from "./_components/new-movie";
import GenreMovie from "./_components/genre-movie";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MainBanner />
      <div className="container grid lg:grid-cols-4 md:grid-cols-1 lg:grid-rows-1 md:grid-rows-2 grid-cols-1 grid-rows-2 mx-auto px-4 py-12 h-fit overflow-hidden">
        <NewsEventTab />
        <BoxOffice />
      </div>
      
      <NewMovie />
      <GenreMovie />
    </div>
  )
}

