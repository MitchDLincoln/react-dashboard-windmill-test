import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'

function InfoCard({ title, children: icon }) {
  return (
    <Card>
      <CardBody className="flex items-center">
        {icon}
        <div>
          <p className="mb-2 text-sm font-medium uppercase text-gray-600 dark:text-gray-400">{title}</p>
        </div>
      </CardBody>
    </Card>
  )
}

export default InfoCard
