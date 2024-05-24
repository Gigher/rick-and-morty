export async function fetchCharacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character/?name=rick&status=alive');

    const result = await Object.values(response);
    
    return result;
}