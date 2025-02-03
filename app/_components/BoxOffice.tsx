import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
export default function BoxOffice(){
    return (
        <section className="container col-span-1 mx-auto px-4 py-12 lg:h-fit h-[30vh] overflow-hidden">
            <h2 className="text-2xl font-bold mb-6">박스오피스 순위</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>순위</TableHead>
                    <TableHead>제목</TableHead>
                    <TableHead>관객수</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell className="font-medium text-left">1</TableCell>
                    <TableCell className="text-left">Paid</TableCell>
                    <TableCell className="text-left">Credit Card</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
        </section>
    )
}