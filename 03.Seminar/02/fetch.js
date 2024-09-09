const URL = 'https://jsonplaceholder.typicode.com/users';

const getData2 = async (url) => {
    try {
        const res = await fetch(url);
        const json = await res.json();
        return json;
    } catch (error) {
        console.log(error.message);
    }
};

const data2 = await getData2(URL);
console.log(data2);
