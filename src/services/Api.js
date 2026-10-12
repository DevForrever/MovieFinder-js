const TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODU4Y2MwMTk5MTVkMTFhMTZjMDU4NWY0NzMzYTMxYSIsIm5iZiI6MTc2OTYyMTM0MS44OCwic3ViIjoiNjk3YTQ3NWQ4YmQ5YmQzMzZkYTFkNjA1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.7qDpYULTd_xbMi3uYXGroYia543J3g8v5EhLx29n-3M";
const BASEURL = "https://api.themoviedb.org/3/";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
    },
};

const fetchData = async (endPoint) => {
    try {
        const response = await fetch(`${BASEURL}${endPoint}`, options);
        console.log(`${BASEURL}${endPoint}`);

        if (!response.ok) {
            throw new Error(`API Error + ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error.message);
    }
};

export default fetchData