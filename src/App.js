import { Route, Routes } from "react-router-dom";
import { Details } from "./pages/Details.jsx";
import { Home } from "./pages/Home.jsx";
import { Actors } from "./components/Actors/Actors.jsx";
import { Reviews } from "./components/Reviews/Reviews.jsx";
import { Movies } from "./pages/Movies.jsx";
import { TVShows } from "./pages/TVShows.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/tvshows" element={<TVShows />} />
                    <Route path="/:mediatype/:id" element={<Details />}>
                        <Route element={<Actors />} path="cast" />
                        <Route element={<Reviews />} path="reviews" />
                    </Route>
                    <Route path="*" element={<h1>Page not found</h1>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
