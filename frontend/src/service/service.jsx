const BaseUrl = import.meta.env.VITE_API_URL;



export async function shortenLink(link,userid) {
    console.log(BaseUrl)
    const response = await fetch(`${BaseUrl}/api`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ link,userid }),
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const json=await response.json();

    return json;
}

export async function getLinks(userid) {
    const response = await fetch(`${BaseUrl}/api/${userid}`);
    const json = await response.json();
    return json;
}