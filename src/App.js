import { Header } from "./components/Header/Header";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { Hero } from "./components/Hero/Hero";
import {Newsletter} from "./components/Newsletter/Newsletter";
import React, { useEffect, useState} from 'react';

const queryApi = (path) => {
    const url = 'https://adchitects-cms.herokuapp.com' + path;
    const username = 'adchitects';
    const password = 'jsrulezzz';
    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(username + ":" + password))
    return fetch(url, { method: 'GET', headers }).then(response => {
        if (response.ok) {
            return response.json()
        }
        throw new Error('Response not ok')
    })
}

function App() {
    const [pages, setPages] = useState([]);
    const [sections, setSections] = useState([]);
    useEffect(() => {
        queryApi('/pages').then(setPages);

    }, []);

    useEffect(() => {
        const homepage = pages.find(page => page.url === '/');
        if (homepage !== undefined) {
            queryApi('/page/' + homepage.id).then(data => setSections(data.sections))
        }
    }, [pages])

    const getSection = (section) => {
        switch(section.type) {
            case 'hero':
                return <Hero text={section.text} imgUrl={section.img} />
            case 'testimonial':
                return <Testimonial text={section.text} author={section.author} />
            case 'newsletter':
                return <Newsletter/>
            default:
                return null;
        }
    }

  return (
    <div className="App">
        <Header pages={pages}/>
        {sections.map((section, index) => {
            return <React.Fragment key={index}>{getSection(section)}</React.Fragment>
        })}
    </div>
  );
}

export default App;
