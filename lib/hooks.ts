import { useActiveSection } from '@/context/Active-section-context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './types';

export function useSectionInView(sectionName : SectionName) {
    const {ref, inView} = useInView({
        threshold: 0.75
    });
    
    const { setActiveSection, timeOfLastClick } = useActiveSection();
    
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    }
}

