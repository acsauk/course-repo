export function ValidateTimeRange(timeRange: string) {
    const times = timeRange.replaceAll(':', '.').split(' - ')
    const firstTime = parseFloat(times[0])
    const secondTime = parseFloat(times[1])

    if (firstTime > 23.59 || firstTime < 0) {
        return false
    }

    if (secondTime > 23.59 || secondTime < 0) {
        return false
    }

    if (secondTime < firstTime) {
        return false
    }

    return true
}