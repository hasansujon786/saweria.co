import { NavigationRail } from '@/components/NavigationRail'
import { SectionAlert } from '@/components/overlays/SectionAlert'
import { SectionLeaderBoard } from '@/components/overlays/SectionLeaderBoard'
import { SectionMediaShare } from '@/components/overlays/SectionMediaShare'
import { SectionMilestone } from '@/components/overlays/SectionMilestone'
import { SectionQrCode } from '@/components/overlays/SectionQrCode'
import { SectionRunningText } from '@/components/overlays/SectionRunningText'
import { SectionSubathon } from '@/components/overlays/SectionSubathon'
import { SectionVoting } from '@/components/overlays/SectionVoting'
import { SectionWheel } from '@/components/overlays/SectionWheel'
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
        SectionQrCode,
        SectionMilestone,
        SectionLeaderBoard,
        SectionRunningText,
        SectionWheel,
      ]}
    />
  )
}

Overlays.getLayout = AdminLayout
