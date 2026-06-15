export function getRelationshipStats(startDate) {
  const start = new Date(startDate)
  const now = new Date()
  const diffMs = Math.max(0, now - start)
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const hours = Math.floor(diffMs / (1000 * 60 * 60))
  const minutes = Math.floor(diffMs / (1000 * 60))

  let years = now.getFullYear() - start.getFullYear()
  let months = now.getMonth() - start.getMonth()
  if (now.getDate() < start.getDate()) months -= 1
  if (months < 0) {
    years -= 1
    months += 12
  }

  return {
    years,
    months,
    days,
    hours,
    minutes
  }
}

export function plural(value, singular, pluralWord) {
  return value === 1 ? singular : pluralWord
}
