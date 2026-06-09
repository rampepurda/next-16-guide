import { LikeProvider } from '@/contexts'
import { Dummy } from '@/components/Dummy/Dummy'

export default function AboutPage() {
  return (
    <LikeProvider>
      <h2>Context Page</h2>
      <Dummy />
    </LikeProvider>
  )
}
