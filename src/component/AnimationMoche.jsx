import { useEffect, useRef, useState } from "react";
import { useData } from "./DataContext";
import '/src/style/AnimationMoche.css'

function AnimationMoche() {
    const { allDataAAfficher, divListUnitRef } = useData();
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        setHasScrolled(false);
  if (!divListUnitRef.current) {
    console.log("divListUnitRef.current n'est pas encore disponible");
    return; // Sort du useEffect si la ref n'est pas prête
  }
        if (divListUnitRef.current && !hasScrolled) {
            const pageWidth = divListUnitRef.current.scrollHeight;
            console.log(pageWidth);
            const imageElement = document.querySelector('.divAnimationMoche');
            if (pageWidth > 3000) {
                const handleScroll = () => {
                    imageElement.classList.add('visible');
                    setHasScrolled(true);
                    window.removeEventListener("scroll", handleScroll);
                };
                window.addEventListener("scroll", handleScroll);
            }
        }
    }, [allDataAAfficher]);

    useEffect(() => {
        const imageElement = document.querySelector('.divAnimationMoche');
        imageElement.classList.remove('visible');
    }, [allDataAAfficher]);
    return (
    <div className='divAnimationMoche'>
        <img src="/image/Element/moche.png" alt="Soldat de Catachan" aria-hidden='true' />
    </div>
    )
}

export default AnimationMoche;
