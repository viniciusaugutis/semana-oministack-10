import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

//Componente
//Estado
//Propriedade

function App() {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000 //timeout de 30s na position
      }
    );
  });

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/18177236?s=460&v=4" />
              <div className="user-info">
                <strong>Vinícius Augutis</strong>
                <span>NodeJS, Java, Angular e SpringBoot</span>
              </div>
            </header>
            <p>Especialista desenvolvedor na Sotran</p>
            <a href="https://github.com/viniciusaugutis">
              Acessar perfil no github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/18177236?s=460&v=4" />
              <div className="user-info">
                <strong>Vinícius Augutis</strong>
                <span>NodeJS, Java, Angular e SpringBoot</span>
              </div>
            </header>
            <p>Especialista desenvolvedor na Sotran</p>
            <a href="https://github.com/viniciusaugutis">
              Acessar perfil no github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/18177236?s=460&v=4" />
              <div className="user-info">
                <strong>Vinícius Augutis</strong>
                <span>NodeJS, Java, Angular e SpringBoot</span>
              </div>
            </header>
            <p>Especialista desenvolvedor na Sotran</p>
            <a href="https://github.com/viniciusaugutis">
              Acessar perfil no github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/18177236?s=460&v=4" />
              <div className="user-info">
                <strong>Vinícius Augutis</strong>
                <span>NodeJS, Java, Angular e SpringBoot</span>
              </div>
            </header>
            <p>Especialista desenvolvedor na Sotran</p>
            <a href="https://github.com/viniciusaugutis">
              Acessar perfil no github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
