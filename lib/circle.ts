const communityUrl = (
  process.env.NEXT_PUBLIC_CIRCLE_COMMUNITY_URL || 'https://stormproof.circle.so'
).replace(/\/$/, '')

export function circleUrl(path = '') {
  return `${communityUrl}${path}`
}

export const circleLinks = {
  home: circleUrl(),
  signIn: circleUrl('/sign_in'),
  join: circleUrl('/join'),
  school: circleUrl('/c/school'),
  challenge: circleUrl('/c/7-day-challenge'),
  programs: {
    living: circleUrl('/c/stormproof-living'),
    couples: circleUrl('/c/stormproof-couples'),
    parenting: circleUrl('/c/stormproof-parenting'),
    faith: circleUrl('/c/stormproof-faith'),
  },
  pillars: {
    defaults: circleUrl('/c/school/defaults'),
    differences: circleUrl('/c/school/differences'),
    distress: circleUrl('/c/school/distress'),
    deliberateness: circleUrl('/c/school/deliberateness'),
  },
} as const
