import { useState } from 'react'
import { Button } from './ui/button'

type NavigationRailProps = {
  names: string[]
  sections: (() => JSX.Element)[]
}

export const NavigationRail = (props: NavigationRailProps) => {
  const [curSection, setCurSection] = useState(0)
  const handleSectionChange = (idx: number) => setCurSection(idx)
  return (
    <div className='flex-1 grid grid-cols-[180px_auto] gap-10'>
      <div className='flex flex-col gap-4'>
        {props.names.map((name, idx) => (
          <Button
            disabled={curSection === idx}
            onClick={() => handleSectionChange(idx)}
            key={name}
            variant='secondary'
          >
            {name}
          </Button>
        ))}
      </div>
      <div className='pr-2.5 flex flex-col gap-6'>
        {props.sections[curSection]()}
      </div>
    </div>
  )
}
