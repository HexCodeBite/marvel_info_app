

class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    _apiKey = 'apikey=f3622952f3aca7b2b1005f5b290d48c3'

    getResource = async (url) => {
        let res = await fetch(url)
        if(!res.ok){
            throw new  Error(`Could not getch ${url}, status: ${res.status}`)

        }
        return await res.json()
    }
    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`)
    }
    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`)
    }
}
export default MarvelService