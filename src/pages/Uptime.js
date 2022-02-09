import React from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'

import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import {
  doughnutOptions,
  lineOptions,
  uptimeLegends,
} from '../utils/demo/chartsData'


function Uptime() {
  return (
    <>
      
      <div className='flex space-y-4'>
        <PageTitle>Monitoraggio Uptime</PageTitle>
        <div className='flex flex-col space-y-5'> 
          <SectionTitle>DownTime</SectionTitle>
          
          <div className="flex items-center p-6 bg-gray-50 dark:bg-gray-800">
            <div className='w-full'>
              <ChartCard>
                <Doughnut {...doughnutOptions} />
                <ChartLegend legends={uptimeLegends} />
              </ChartCard>
            </div>
          </div>

          <SectionTitle>UpTime</SectionTitle>
          
          <div className="flex items-center p-6 bg-gray-50 dark:bg-gray-800">
            <div className='w-full'>
            <ChartCard>
              <Line {...lineOptions} />
              <ChartLegend legends={uptimeLegends} />
            </ChartCard>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Uptime
