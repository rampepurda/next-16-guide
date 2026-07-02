import { LikeProvider } from '@/contexts'
import { Dummy } from '@/components/Dummy/Dummy'

export default function AboutPage() {
  return (
    <LikeProvider>
      <h3>Context Page</h3>
      <Dummy />
    </LikeProvider>
  )
}
