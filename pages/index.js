import Link from 'next/link'
import { FullPage, Slide } from 'react-full-page';
import SlideContent from '../components/SlideContent';
import './base.css';

export default function Index() {
  return (
    <FullPage>
      <Slide >
        <SlideContent title="Nightcore is life">
          <span>Your favorite songs in nightcore</span>
        </SlideContent>
      </Slide>
      <Slide>
        <SlideContent  title="Daycore is love">
          <span>Your favorite songs in nightcore</span>
        </SlideContent>
      </Slide>
    </FullPage>
  )
}
