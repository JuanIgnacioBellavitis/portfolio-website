"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; 
import type { Container, Engine } from "tsparticles-engine";

export default function ParticlesComponent() {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {

    }, [])

  return (
    <Particles 
        id="tsparticles"
        className="-z-50"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            fullScreen: {enable: true},
            background: {
                color: {
                    value: ''
                }
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: 'push',
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 90,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    }
                }
            },
            particles: {
                color: {
                    value: '#001a48'
                },
                links: {
                    color: '#29609c',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: {min: 1, max: 5 },
                },
                detectRetina: true,
            }

        }}
    />
  )
}
