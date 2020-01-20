import React, { useState } from "react";
import Header from "./Header";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";


//Componente
//Estado
//Propriedade

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
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
