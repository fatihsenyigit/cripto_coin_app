
import displayCoinCard from "./displayCoins"

export const getCoins = async(search) => {
    
    const URL = `https://api.coinranking.com/v2/coins?search=${search}`

    const options = {
        headers: {
            'x-access-token': import.meta.env.VITE_API_KEY,
        }
    }

    try {
        const res = await fetch(URL, options);
        const data = await res.json();
        if(!data.data.coins[0]) {
            alert('coin can not be found')
        } else {
            displayCoinCard(data.data.coins[0]);
        }
    } catch (error) {
        console.log(error)
    }

} 


