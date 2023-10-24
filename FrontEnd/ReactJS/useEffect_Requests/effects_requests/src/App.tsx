import style from "./style.module.css";
import { api } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [musicList, setMusicList] = useState([]) as Array<any>;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getMusic = async () => {
      try {
        const responseJson = await api.get("/tracks");
        setMusicList(responseJson.data);
      } catch (error) {
        console.log("ERRO NA REQUEST" + error);
      } finally {
        setIsLoading(false);
      }
    };
    getMusic();
  }, []);

  return (
    <>
      <header className={style.header}>Music Genre</header>
      <main className={style.main}>
        <ul>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            musicList.map((elem: any) => <li key={elem.id}>{elem.name} </li>)
          )}
        </ul>
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
