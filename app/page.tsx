import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Star, Calendar, Newspaper } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import MainBanner from "./_components/MainBanner";
import NewsEventTab from "./_components/NewsEventTab";
import NewMovie from "./_components/NewMovie";
import GenreMovie from "./_components/GenreMovie";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <MainBanner />
      <NewsEventTab />
      <NewMovie />
      <GenreMovie />
    </div>
  )
}

