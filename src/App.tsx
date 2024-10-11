import { JSX } from 'react'
import CustomizedTable from './components/customs/customized-table'

export default function App(): JSX.Element {
  return (
    <main className='flex flex-col gap-4 items-center'>
      <header>
        <h1>Hallo</h1>
      </header>

      <section>
        <div className='container p-4'>
          <CustomizedTable />
        </div>
      </section>
    </main>
  )
}
