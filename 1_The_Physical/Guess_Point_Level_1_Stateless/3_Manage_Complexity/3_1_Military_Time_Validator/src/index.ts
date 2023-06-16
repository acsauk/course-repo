export function ValidateTimeRange(timeRange: string) {
    const times = timeRange.replaceAll(':', '.').split(' - ')

    if (parseFloat(times[0]) > 23.59 || parseFloat(times[0]) < 0) {
        return false
    }

    if (parseFloat(times[1]) > 23.59 || parseFloat(times[1]) < 0) {
        return false
    }

    if (parseFloat(times[1]) < parseFloat(times[0])) {
        return false
    }

    return true
}