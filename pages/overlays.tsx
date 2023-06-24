import { NavigationRail } from '@/components/NavigationRail'
import { SectionAlert } from '@/components/overlays/SectionAlert'
import { SectionMediaShare } from '@/components/overlays/SectionMediaShare'
import { SectionSubathon } from '@/components/overlays/SectionSubathon'
import { SectionVoting } from '@/components/overlays/SectionVoting'
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
      sections={[
        SectionAlert,
        SectionMediaShare,
        SectionSubathon,
        SectionVoting,
      ]}
    />
  )
}

Overlays.getLayout = AdminLayout
