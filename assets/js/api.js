
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/LucasLCDS/js-developer-portfolio/main/data/profile.json'
    const fetching = fetch(url);
    return await (await fetching).json();
}







