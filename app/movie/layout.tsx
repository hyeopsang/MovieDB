import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container max-w-custom mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">영화</h1>
        <Tabs defaultValue="now" className="w-[400px]">
                <TabsList>
                <TabsTrigger value="now"><Link href={'/now'}>현재 상영중</Link></TabsTrigger>
                <TabsTrigger value="comming"><Link href={'/comming'}>개봉 예정</Link></TabsTrigger>
                </TabsList>
                <TabsContent value="now">{children}</TabsContent>
                <TabsContent value="comming">{children}</TabsContent>
        </Tabs>
    </div>
  );
}