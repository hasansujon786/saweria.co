import { NavigationRail } from '@/components/NavigationRail'
import { SectionAlert } from '@/components/overlays/SectionAlert'
import AdminLayout from '@/layouts/admin'

export default function Overlays() {
  return (
    <NavigationRail
      names={[
        'Alert',
        'MediaShare',
        'Subathon',
        'Voting',
        'QR Code',
        'Milestone',
        'Leaderboard',
        'Running Text',
        'Wheel',
      ]}
      sections={[SectionAlert]}
    />
  )
}

Overlays.getLayout = AdminLayout
