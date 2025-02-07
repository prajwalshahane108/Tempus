// import { Inter } from 'next/font/google'
// import './styles/globals.css'

// // Add IBM Plex Sans
// const ibmPlexSans = localFont({
//   src: [
//     {
//       path: '../public/fonts/IBMPlexSans-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/IBMPlexSans-Medium.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/IBMPlexSans-SemiBold.woff2',
//       weight: '600',
//       style: 'normal',
//     },
//   ],
// })




import { IBM_Plex_Sans } from 'next/font/google'
import './styles/globals.css'
import Navbar from './components/layout/Navbar/Navbar'
import SearchComponent from './components/search/SearchComponent'
import AIPowerSection from './components/AICapsLanding/AIPowerSection'
import TechnologySection from './components/landing/TechnologySection'


const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibmPlexSans.className}>
      <body>
        <div className="pt-[72px]"> {/* Add padding-top equal to navbar height */}
          {/* Your content */}
          <Navbar />
        </div>

        <SearchComponent />
        < AIPowerSection />
        <TechnologySection />
        {/* {children} */}
      </body>
    </html>
  )
}