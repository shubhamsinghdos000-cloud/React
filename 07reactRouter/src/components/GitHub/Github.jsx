import React ,{ useEffect,useState }from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {

    //Way 1: Using useEffect inside the component

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=>response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     });
    // }, []);

    //Way 2: Using loader function and useLoaderData hook
    const data = useLoaderData();
  return (
    <>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Avatar" width={300}/>
        </div>
    </>
  )
}

export default Github

export async function githubInfoLoader(){
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    const data = await response.json();
    return data;
}
