export const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)

export const timeSince = (date: Date): string => {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
  const intervals = [
    { label: 'year', secs: 31536000 },
    { label: 'month', secs: 2592000 },
    { label: 'week', secs: 604800 },
    { label: 'day', secs: 86400 },
    { label: 'hour', secs: 3600 },
    { label: 'minute', secs: 60 },
  ]
  for (const { label, secs } of intervals) {
    const n = Math.floor(seconds / secs)
    if (n >= 1) return `${n} ${label}${n > 1 ? 's' : ''} ago`
  }
  return 'Just now'
}

export const slugify = (str: string): string =>
  str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')

export const clsx = (...classes: (string | undefined | false | null)[]): string =>
  classes.filter(Boolean).join(' ')
