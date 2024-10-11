'use client'

import { JSX, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronRight } from 'lucide-react'

// Sample data
const data = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Developer',
    details: 'Specializes in React and Node.js',
  },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', details: 'Expert in UI/UX and Figma' },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Manager',
    details: '5 years of project management experience',
  },
]

// Row component
const Row = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <TableRow>
        <TableCell>
          <Button variant='ghost' size='sm' onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ChevronDown className='h-4 w-4' /> : <ChevronRight className='h-4 w-4' />}
          </Button>
        </TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.email}</TableCell>
        <TableCell>{item.role}</TableCell>
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell colSpan={4}>
            <div className='p-4 bg-muted'>
              <h4 className='text-sm font-medium'>Additional Details:</h4>
              <p className='text-sm'>{item.details}</p>
            </div>
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

// Main component
export default function ExpandableTable(): JSX.Element {
  return (
    <div className='container mx-auto py-10'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[50px]'></TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <Row key={item.id} item={item} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
