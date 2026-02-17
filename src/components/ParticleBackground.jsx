import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 180, links: { opacity: 0.5 } },
            push: { quantity: 3 },
          },
        },
        particles: {
          color: { value: ["#00d4ff", "#7b2ff7", "#a855f7"] },
          links: {
            color: "#00d4ff",
            distance: 150,
            enable: true,
            opacity: 0.12,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 1.2,
            straight: false,
          },
          number: {
            density: { enable: true, area: 900 },
            value: 70,
          },
          opacity: {
            value: { min: 0.15, max: 0.5 },
            animation: { enable: true, speed: 0.8, minimumValue: 0.1 },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 3 },
            animation: { enable: true, speed: 2, minimumValue: 0.5 },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

export default ParticleBackground;
