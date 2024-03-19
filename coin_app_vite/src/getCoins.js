

export const getCoins = async(search) => {
    const API_KEY = 'coinrankinge9acd4b1ff110ab74dc6aec453d8e254903410999f5ebae4'
    const URL = `https://api.coinranking.com/v2/coins?search=${search}`

    const options = {
        headers: {
            'x-access-token': API_KEY,
        }
    }

    const res = await fetch(URL,options)
    console.log(res)
} 



//  
