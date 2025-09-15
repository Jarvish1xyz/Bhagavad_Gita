import './style.css';
import { useNavigate } from 'react-router-dom';

function Quotes() {
    const navigate = useNavigate();

    // ✅ 1. Array of 10 Bhagavad Gita quotes
    const quotes = [
        "You have the right to work, but never to the fruit of work.",
        "Change is the law of the universe. You can be a millionaire or a pauper in an instant.",
        "The soul is neither born, and nor does it die.",
        "There is nothing lost or wasted in this life.",
        "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
        "A person can rise through the efforts of his own mind; or draw himself down, in the same manner.",
        "Man is made by his belief. As he believes, so he is.",
        "Happiness comes not by making money but by making meaning.",
        "It is better to live your own destiny imperfectly than to live an imitation of somebody else's life with perfection.",
        "Delusion arises from anger. The mind is bewildered by delusion."
    ];

    return (
        <>
            <div className='boxim box1'>
                <div className="boxbar">
                    <img className="thumbnail img-fluid"
                        src="https://bhagavadgita.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquotes-bg.1a3ed553.png&w=1920&q=75"
                        alt="" />

                    <div className="text d-flex flex-wrap" style={{ width: '80vh' }}>
                        <h1 className="fw-bold display-4 text-light">Bhagavad Gita Quotes By Lord Krishnaa</h1>
                    </div>
                </div>
            </div>

            <div className="box1 bodypart">
                <div className="box p-3">

                    {/* ✅ Bootstrap Carousel with Quotes Array */}
                    <div id="quotesCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {quotes.map((quote, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <div className="d-flex justify-content-center align-items-center"
                                        style={{ height: '300px', backgroundColor: '#f8f9fa', padding: '20px' }}>
                                        <h3 className="text-center" style={{ maxWidth: '700px' }}>{quote}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 🔁 Custom SVG Controls */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#quotesCarousel" data-bs-slide="prev">
                            {/* ⬅️ Custom SVG (Previous) */}
                            <svg fill="#000000" height="50px" width="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 
                                    c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256
                                    S373.818,469.333,256,469.333z"/>
                                <path d="M313.752,134.248c-8.331-8.331-21.839-8.331-30.17,0L176.915,240.915c-8.331,8.331-8.331,21.839,0,30.17
                                    l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17L222.17,256l91.582-91.582
                                    C322.083,156.087,322.083,142.58,313.752,134.248z"/>
                            </svg>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#quotesCarousel" data-bs-slide="next">
                            {/* ➡️ Custom SVG (Next) */}
                            <svg fill="#000000" height="50px" width="50px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z 
                                    M256,469.333c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,
                                    469.333,256S373.818,469.333,256,469.333z"/>
                                <path d="M228.418,134.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L289.83,256
                                    l-91.582,91.582c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667
                                    c8.331-8.331,8.331-21.839,0-30.17L228.418,134.248z"/>
                            </svg>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Quotes;
