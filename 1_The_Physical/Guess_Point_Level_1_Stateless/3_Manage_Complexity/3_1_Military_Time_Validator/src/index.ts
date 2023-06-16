export function ValidateTimeRange(timeRange: string) {
    const times = timeRange.replaceAll(':', '.').split(' - ')

    if (parseFloat(times[0]) > 23.59) {
        return false
    }

    return true
}