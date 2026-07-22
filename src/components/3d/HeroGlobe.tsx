import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, type RefObject } from "react";
import * as THREE from "three";

function fibonacciSphere(count: number, radius: number): Float32Array {
  const arr = new Float32Array(count * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    arr[i * 3] = Math.cos(theta) * r * radius;
    arr[i * 3 + 1] = y * radius;
    arr[i * 3 + 2] = Math.sin(theta) * r * radius;
  }
  return arr;
}

function GlobeMesh({ mouse }: { mouse: RefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null!);
  const size = useThree((s) => s.size);
  const compact = size.width < 700;

  const nodePositions = useMemo(() => fibonacciSphere(240, 2.15), []);

  useFrame(({ clock }, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.12;
    const m = mouse.current ?? { x: 0, y: 0 };
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, m.y * 0.22, 0.04);
    g.position.x = THREE.MathUtils.lerp(
      g.position.x,
      (compact ? -0.4 : 1.9) + m.x * 0.25,
      0.03,
    );
    g.position.y = THREE.MathUtils.lerp(g.position.y, compact ? -0.6 : 0, 0.03);
    const pulse = 1 + Math.sin(clock.elapsedTime * 0.8) * 0.02;
    g.scale.setScalar(pulse);
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[2.15, 26, 26]} />
        <meshBasicMaterial wireframe color="#58a6ff" transparent opacity={compact ? 0.1 : 0.15} />
      </mesh>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color="#bc8cff"
          transparent
          opacity={compact ? 0.35 : 0.55}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <mesh rotation={[Math.PI / 2.1, 0.2, 0]}>
        <torusGeometry args={[2.75, 0.008, 8, 90]} />
        <meshBasicMaterial color="#3fb950" transparent opacity={0.4} />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, -0.4, 0.5]}>
        <torusGeometry args={[3.05, 0.006, 8, 90]} />
        <meshBasicMaterial color="#58a6ff" transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

export default function HeroGlobe() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6.5], fov: 52 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        style={{ pointerEvents: "none" }}
      >
        <GlobeMesh mouse={mouse} />
      </Canvas>
    </div>
  );
}
