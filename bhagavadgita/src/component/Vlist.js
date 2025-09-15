import './style.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Vlist() {
    const { idv } = useParams();
    const [Verses, setVerses] = useState([]);


    useEffect(() => {
        const urlv = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${ChapterNumber}/verses/${vid}/`;
        console.log(urlv);
        const options2 = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'bcba844d26msh2d333e852898b44p124f13jsn0e520c9be445',
                'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
            }
        };

        try {
            let v = fetch(urlv, options2);
            v.then((response) => {
                return response.json();
            }).then((Verse) => {
                setVerses(Verse);
            });
        } catch (error) {
            console.error(error);
        }
    }, [idv]);

    return (
        <>
            <div className='col row row-cols-1 g-2 m-3 pqr p-3'>
                <a className="d-flex flex-wrap w-100" onClick={() => handleChapterClick(chapter.id)} data-bs-toggle="collapse" href="#${collapse}" role="button" aria-expanded="false" aria-controls="${collapse}">
                    <div className="col-12 col-lg-2">
                        <span className="card-title card-ch">Verse ${Verses.verse_number}</span>
                    </div>
                    <div className="col-12 col-lg-10">
                        ${description}
                    </div>
                </a>
                <div className="collapse" id="${collapse}" data-bs-parent="#accordionGita">
                    <div className="card card-body" id="${colPartId}" style="width: 100%;">

                    </div>
                </div>
            </div>
        </>
    );
}

export default Vlist;