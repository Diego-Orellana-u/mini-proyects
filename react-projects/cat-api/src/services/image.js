

export const getRandomImage = ({ firstThreeWords }) => {
    return fetch(`https://cataas.com/cat/says/${firstThreeWords}?json=true`)
        .then(res => res.json())
        .then(response => {
            const { _id } = response
            const imgUrl = `${_id}/says/${firstThreeWords}`
            return imgUrl
        })
}