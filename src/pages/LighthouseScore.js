import React from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'

import InfoCard from '../components/Cards/InfoCard'
import RoundIcon from '../components/RoundIcon'


function LighthouseScore() {
  return (
    <>
      <PageTitle>Zio Billy!</PageTitle>
      {/*
      * Riassunto 
      */}
      <div className="grid grid-flow-col auto-cols-max gap-4">
        <InfoCard title="Prestazioni">
          <RoundIcon
            icon={'91'}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Accesibilità">
          <RoundIcon
            icon={'96'}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Best Practice">
          <RoundIcon
            icon={'95'}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="SEO">
          <RoundIcon
            icon={'87'}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="PWA">
          <RoundIcon
            icon={'100'}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
       {/*
       * Sezione Prestazioni
       */}
      <SectionTitle>Prestazioni</SectionTitle>
        <div className='flex flex-col items-center'>
          <RoundIcon
            icon={'100'}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
          <ul>
            <li>Metrica</li>
            <li>Metrica</li>
            <li>Metrica</li>
          </ul>
        </div>
       {/*
       * Sezione Accesibilità
       */}
      <SectionTitle>Accesibilità</SectionTitle>
        <div className='flex flex-col items-center'>
          <RoundIcon
            icon={'100'}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
          <ul>
            <li>Metrica</li>
            <li>Metrica</li>
            <li>Metrica</li>
          </ul>
        </div>
       {/*
       * Sezione Best Practice
       */}
      <SectionTitle>Best Practice</SectionTitle>
        <div className='flex flex-col items-center'>
          <RoundIcon
            icon={'100'}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
          <ul>
            <li>Metrica</li>
            <li>Metrica</li>
            <li>Metrica</li>
          </ul>
        </div>
       {/*
       * Sezione SEO
       */}
      <SectionTitle>SEO</SectionTitle>
        <div className='flex flex-col items-center'>
          <RoundIcon
            icon={'100'}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
          <ul>
            <li>Metrica</li>
            <li>Metrica</li>
            <li>Metrica</li>
          </ul>
        </div>
       {/*
       * Sezione PWA -- Progressive Web App
       */}
      <SectionTitle>PWA -- Progressive Web App</SectionTitle>
        <div className='flex flex-col items-center'>
          <RoundIcon
            icon={'100'}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
          <ul>
            <li>Metrica</li>
            <li>Metrica</li>
            <li>Metrica</li>
          </ul>
        </div>
    </>
  )
}

export default LighthouseScore
