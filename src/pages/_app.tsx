import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  

  return (
    <ChallengesProvider>
      <Component />
    </ChallengesProvider>
    
  )
}   

export default MyApp
