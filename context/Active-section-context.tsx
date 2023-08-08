"use client";
import React, { useState, ReactNode, createContext, Dispatch, useContext } from 'react';
import type { SectionName } from '@/lib/types';

type ActivesectionContextProviderProps = {
    children: ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActivesectionContextProvider({children}: ActivesectionContextProviderProps) {

    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick
        }}>
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSection() {
    const context = useContext(ActiveSectionContext);

    if (context === null){
        throw new Error (
            "Error"
        );
    }

    return context;
}