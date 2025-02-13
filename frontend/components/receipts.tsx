"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for receipts
const mockReceipts = [
  { id: 1, date: "2023-06-01", total: 129.99, items: ["StrideX Pro"] },
  { id: 2, date: "2023-06-15", total: 249.98, items: ["AeroGlide", "UltraBoost Lite"] },
  { id: 3, date: "2023-07-02", total: 89.99, items: ["ComfortWalk"] },
]

export default function Receipts() {
  const [receipts] = useState(mockReceipts)

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Your Receipts</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Items</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {receipts.map((receipt) => (
            <TableRow key={receipt.id}>
              <TableCell>{receipt.date}</TableCell>
              <TableCell>{receipt.items.join(", ")}</TableCell>
              <TableCell className="text-right">${receipt.total.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

