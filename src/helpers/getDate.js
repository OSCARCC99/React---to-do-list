export const getDate = (date) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return date.toLocaleString('en-US', options)
}