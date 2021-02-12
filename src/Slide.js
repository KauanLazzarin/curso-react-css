import React from 'react';
import styles from './css/modules/Slide.module.css';


export default function Slide ( {slides} ) {
    const [activeSlide, setActiveSlide] = React.useState(0);
    const [position, setPosition] = React.useState(0);
    const contentRef = React.useRef();

    React.useEffect(() => {
        const {width} = contentRef.current.getBoundingClientRect();
        setPosition(-(activeSlide * width));

    }, [activeSlide]);

    function slidePrev () {
        if (activeSlide > 0) {
            setActiveSlide(activeSlide - 1);
        } else {
            setActiveSlide(0)
        }
    };

    function slideNext (){
        if (activeSlide < 2) {
            setActiveSlide(activeSlide + 1);
        } else {
            setActiveSlide(2)
        }
    };

    return (
        <section className={styles.container}>
            <div ref={contentRef} className={styles.content} style={{ transform: `translateX(${position}px)` }}>             
                {
                    slides.map((slide) => {
                        return <div key={slide.id} className={styles.item}>{slide.text}</div>
                    })
                }
            </div>

            <nav className={styles.nav}>
                <button onClick={slidePrev}>Anterior</button>
                <button onClick={slideNext}>Próximo</button>
            </nav>
        </section>
    )
}