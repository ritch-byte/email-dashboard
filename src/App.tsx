import { useState } from 'react'
import IntroEmailSection from './components/IntroEmailSection'
import FollowUpCadence from './components/FollowUpCadence'

const TZ_OPTIONS = ['PHT', 'SGT', 'IST', 'AEST', 'GMT', 'EST', 'CST', 'MST', 'PST']

export default function App() {
  const [leadName, setLeadName]   = useState('')
  const [yourName, setYourName]   = useState('')
  const [sharedTz, setSharedTz]   = useState('PHT')

  const [sharedSp,    setSharedSp]    = useState('')
  const [sharedDate,  setSharedDate]  = useState('')
  const [sharedTime,  setSharedTime]  = useState('')
  const [sharedLink,  setSharedLink]  = useState('')
  const [sharedSp2,   setSharedSp2]   = useState('')
  const [sharedDate2, setSharedDate2] = useState('')
  const [sharedTime2, setSharedTime2] = useState('')
  const [sharedLink2, setSharedLink2] = useState('')

  const extractLink = (text: string) =>
    text.match(/https?:\/\/[^\s]+/)?.[0]?.replace(/[.,;!?]$/, '') ?? ''
  const extractTime = (text: string) =>
    text.match(/\b\d{1,2}:\d{2}\s*(?:am|pm)(?:\s+[A-Z]{2,5})?\b/i)?.[0]?.trim() ?? ''
  const extractDate = (text: string) =>
    text.match(/\b(?:(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)\w*[,\s]+)?(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\w*[\s.]+\d{1,2}(?:[,\s]+\d{4})?\b/i)?.[0]?.trim() ?? ''

  const syncBooking = (
    name: string, bookingText: string,
    setName: (v: string) => void, setLk: (v: string) => void,
    setT:  (v: string) => void,  setD:  (v: string) => void,
  ) => {
    if (name) setName(name)
    const lk = extractLink(bookingText); if (lk) setLk(lk)
    const t  = extractTime(bookingText);  if (t)  setT(t)
    const d  = extractDate(bookingText);  if (d)  setD(d)
  }

  const handleSp1Sync = (name: string, bt: string) =>
    syncBooking(name, bt, setSharedSp, setSharedLink, setSharedTime, setSharedDate)
  const handleSp2Sync = (name: string, bt: string) =>
    syncBooking(name, bt, setSharedSp2, setSharedLink2, setSharedTime2, setSharedDate2)

  const mkPrefill = (d: string, t: string, lk: string) =>
    [[d, t, sharedTz].filter(Boolean).join(' '), lk ? `Meeting Link: ${lk}` : '']
      .filter(Boolean).join('\n')

  const sp1Prefill = mkPrefill(sharedDate, sharedTime, sharedLink)
  const sp2Prefill = mkPrefill(sharedDate2 || sharedDate, sharedTime2 || sharedTime, sharedLink2)

  return (
    <div className="app">
      {/* Header */}
      <div className="call-header">
        <div className="header-brand">
          <span className="brand-mark">OA</span>
        </div>
        <div className="call-info">
          <input
            className="lead-name-input"
            type="text"
            placeholder="BDR name..."
            value={yourName}
            onChange={e => setYourName(e.target.value)}
          />
          <input
            className="lead-name-input"
            type="text"
            placeholder="Lead's name..."
            value={leadName}
            onChange={e => setLeadName(e.target.value)}
          />
          <select
            className="lead-name-input"
            style={{ width: 90, cursor: 'pointer' }}
            value={sharedTz}
            onChange={e => setSharedTz(e.target.value)}
          >
            {TZ_OPTIONS.map(tz => <option key={tz} value={tz}>{tz}</option>)}
          </select>
        </div>
      </div>

      {/* Body */}
      <div className="dashboard-body">

        {/* Intro Email */}
        <div className="email-section-hd">
          <span className="email-section-title">Intro Email</span>
          <span className="email-section-sub">Paste the conversation once — generate for up to 2 Source Partners</span>
        </div>
        <IntroEmailSection
          leadName={leadName}
          rawInput=""
          geminiResearch=""
          sp1BookingPrefill={sp1Prefill}
          sp2BookingPrefill={sp2Prefill}
          onSp1SyncBack={handleSp1Sync}
          onSp2SyncBack={handleSp2Sync}
        />

        {/* Follow Up Cadence */}
        <div className="email-section-divider">
          <span className="email-section-divider-label">Follow Up Cadence</span>
          <span className="email-section-sub">Templates auto-fill from Booking Details above</span>
        </div>
        <FollowUpCadence
          leadName={leadName}
          yourName={yourName}
          sp={sharedSp}
          date={sharedDate}
          time={sharedTime}
          tz={sharedTz}
          link={sharedLink}
          sp2={sharedSp2}
          date2={sharedDate2}
          time2={sharedTime2}
          link2={sharedLink2}
        />

      </div>
    </div>
  )
}
