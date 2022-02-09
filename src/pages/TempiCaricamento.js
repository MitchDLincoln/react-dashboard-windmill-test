import React from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'

import ChartCard from '../components/Chart/ChartCard'
import { Bar } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import {
  barOptions,
  barLegends,
} from '../utils/demo/chartsData'

import { Button } from '@windmill/react-ui'
import { TrashIcon, EditIcon } from '../icons'





function TempiCaricamento() {
  return (
    <>
      <PageTitle>Tempi di Caricamento</PageTitle>

      <SectionTitle>HomePage</SectionTitle>
      
      <div className="flex items-center p-6 bg-gray-50 dark:bg-gray-900">
        <div className='w-full'>
          <ChartCard>
            <Bar {...barOptions} />
            <ChartLegend legends={barLegends} />
          </ChartCard>
        </div>
      </div>

      <SectionTitle>Pagina -- No Idea</SectionTitle>

      <div className="flex items-center p-6 bg-gray-50 dark:bg-gray-900">

        <div className="w-full space-y-4">

          <ChartCard className="flex-1">
            <Bar {...barOptions} />
            <ChartLegend legends={barLegends} />
          </ChartCard>

          <div className="flex justify-center space-x-4">

            <Button icon={EditIcon} aria-label="Edit" />

            <Button icon={TrashIcon} aria-label="Delete" />
          </div>

        </div>

      </div>

      <SectionTitle>Pagina -- Add</SectionTitle>

      <div className="flex items-center p-6 bg-gray-50 dark:bg-gray-900">
      <div>
          <Button size="larger">+ Aggiungi Pagina</Button>
        </div>
      </div>
    </>
  )
}

export default TempiCaricamento
