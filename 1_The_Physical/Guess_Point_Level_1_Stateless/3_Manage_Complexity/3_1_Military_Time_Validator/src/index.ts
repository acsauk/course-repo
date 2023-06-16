export function ValidateTimeRange(timeRange: string) {
    const times = timeRange.replaceAll(':', '.').split(' - ')
    const firstTime = parseFloat(times[0])
    const secondTime = parseFloat(times[1])
    const lowerBoundaryTime = 0
    const upperBoundaryTime = 23.59

    if (firstTime > upperBoundaryTime || firstTime < lowerBoundaryTime) {
        return false
    }

    if (secondTime > upperBoundaryTime || secondTime < lowerBoundaryTime) {
        return false
    }

    if (secondTime < firstTime) {
        return false
    }

    return true
}