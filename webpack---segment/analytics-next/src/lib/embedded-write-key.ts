declare global {
  interface Window {
    analyticsWriteKey?: string
  }
}

// This variable is used as an optional fallback for when customers
// host or proxy their own analytics.js.
try {
  window.analyticsWriteKey = 'i2f7CeYQjBUE6JdnmIrwf0z0182y3u9L'
} catch (_) {
  // @ eslint-disable-next-line
}

export function embeddedWriteKey(): string | undefined {
  if (window.analyticsWriteKey === undefined) {
    return undefined
  }

  // this is done so that we don't accidentally override every reference to __write_key__
  return window.analyticsWriteKey !== ['__', 'WRITE', '_', 'KEY', '__'].join('')
    ? window.analyticsWriteKey
    : undefined
}
