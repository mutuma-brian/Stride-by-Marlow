"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for transactions
const mockTransactions = [
  { id: 1, date: "2023-06-01", description: "StrideX Pro", amount: 129.99, status: "Completed" },
  { id: 2, date: "2023-06-15", description: "AeroGlide", amount: 149.98, status: "Completed" },
  { id: 3, date: "2023-07-02", description: "UltraBoost Lite", amount: 139.99, status: "Processing" },
  { id: 4, date: "2023-07-10", description: "ComfortWalk", amount: 89.99, status: "Completed" },
  { id: 5, date: "2023-07-20", description: "SpeedRunner", amount: 159.99, status: "Shipped" },
]

export default function TransactionHistory() {
  const [transactions] = useState(mockTransactions)

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Transaction History</CardTitle>
        <CardDescription>View your recent purchases and order status</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                <TableCell>{transaction.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

