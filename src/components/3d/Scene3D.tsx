import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(1337);

function ParticleField({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (rand() - 0.5) * 22;
      arr[i * 3 + 1] = (rand() - 0.5) * 14;
      arr[i * 3 + 2] = rand() * -14;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#58a6ff"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function FloatGroup({
  position,
  speed = 1,
  amp = 0.4,
  children,
}: {
  position: [number, number, number];
  speed?: number;
  amp?: number;
  children: ReactNode;
}) {
  const ref = useRef<THREE.Group>(null!);
  const seed = useMemo(() => rand() * Math.PI * 2, []);

  useFrame(({ clock }, delta) => {
    const g = ref.current;
    if (!g) return;
    g.position.y = position[1] + Math.sin(clock.elapsedTime * speed + seed) * amp;
    g.rotation.x += delta * 0.12;
    g.rotation.y += delta * 0.16;
  });

  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  );
}

function Constellation() {
  const ref = useRef<THREE.Group>(null!);

  const { nodePositions, linePositions } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    const nodeCount = 34;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(
        new THREE.Vector3(
          (rand() - 0.5) * 15,
          (rand() - 0.5) * 9,
          rand() * -8 - 1,
        ),
      );
    }
    const lines: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 2.6) {
          lines.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    return {
      nodePositions: new Float32Array(nodes.flatMap((v) => [v.x, v.y, v.z])),
      linePositions: new Float32Array(lines),
    };
  }, []);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.03;
  });

  return (
    <group ref={ref}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.09}
          color="#bc8cff"
          transparent
          opacity={0.7}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#58a6ff" transparent opacity={0.14} depthWrite={false} />
      </lineSegments>
    </group>
  );
}

function RouteGeometries({ route }: { route: string }) {
  switch (route) {
    case "/experience":
      return (
        <>
          <FloatGroup position={[-5.2, 1.2, -3]} speed={0.9}>
            <mesh>
              <octahedronGeometry args={[0.85, 0]} />
              <meshBasicMaterial wireframe color="#58a6ff" transparent opacity={0.28} />
            </mesh>
          </FloatGroup>
          <FloatGroup position={[-4.2, -2.2, -5]} speed={1.3} amp={0.55}>
            <mesh>
              <torusGeometry args={[0.65, 0.18, 12, 32]} />
              <meshBasicMaterial wireframe color="#bc8cff" transparent opacity={0.24} />
            </mesh>
          </FloatGroup>
          <FloatGroup position={[5.4, -1.4, -4]} speed={0.7} amp={0.5}>
            <mesh>
              <octahedronGeometry args={[0.6, 0]} />
              <meshBasicMaterial wireframe color="#3fb950" transparent opacity={0.26} />
            </mesh>
          </FloatGroup>
        </>
      );
    case "/projects":
      return (
        <>
          <FloatGroup position={[5.6, 1.8, -4]} speed={0.5} amp={0.45}>
            <mesh rotation={[0.5, 0.3, 0]}>
              <torusKnotGeometry args={[0.75, 0.22, 90, 12]} />
              <meshBasicMaterial wireframe color="#58a6ff" transparent opacity={0.22} />
            </mesh>
          </FloatGroup>
          <FloatGroup position={[-5.4, -1.8, -4]} speed={1.1}>
            <mesh>
              <boxGeometry args={[0.9, 0.9, 0.9]} />
              <meshBasicMaterial wireframe color="#bc8cff" transparent opacity={0.25} />
            </mesh>
          </FloatGroup>
          <FloatGroup position={[-4.4, 2.2, -6]} speed={0.8}>
            <mesh>
              <octahedronGeometry args={[0.55, 0]} />
              <meshBasicMaterial wireframe color="#3fb950" transparent opacity={0.24} />
            </mesh>
          </FloatGroup>
        </>
      );
    case "/skills":
      return <Constellation />;
    case "/github":
      return (
        <>
          {(
            [
              [-5.2, 1.6, -4, "#58a6ff"],
              [-4, -1.8, -5, "#3fb950"],
              [5.4, 2, -5, "#bc8cff"],
              [4.6, -1.6, -3, "#f78166"],
              [0.5, -3.2, -6, "#58a6ff"],
            ] as const
          ).map(([x, y, z, color], i) => (
            <FloatGroup key={i} position={[x, y, z]} speed={0.6 + i * 0.18} amp={0.5}>
              <mesh>
                <boxGeometry args={[0.62, 0.62, 0.62]} />
                <meshBasicMaterial wireframe color={color} transparent opacity={0.3} />
              </mesh>
            </FloatGroup>
          ))}
        </>
      );
    case "/education":
      return (
        <>
          <FloatGroup position={[-5.6, 0.6, -5]} speed={0.45} amp={0.35}>
            <mesh>
              <icosahedronGeometry args={[1.15, 0]} />
              <meshBasicMaterial wireframe color="#bc8cff" transparent opacity={0.24} />
            </mesh>
          </FloatGroup>
          <FloatGroup position={[5.6, -1.6, -4]} speed={0.9}>
            <mesh>
              <icosahedronGeometry args={[0.6, 0]} />
              <meshBasicMaterial wireframe color="#58a6ff" transparent opacity={0.26} />
            </mesh>
          </FloatGroup>
        </>
      );
    default:
      return null;
  }
}

function SceneContent({ route, mobile }: { route: string; mobile: boolean }) {
  return (
    <>
      <fog attach="fog" args={["#0d1117", 10, 26]} />
      <ParticleField count={mobile ? 110 : 300} />
      <RouteGeometries route={route} />
    </>
  );
}

export default function Scene3D({ route }: { route: string }) {
  const mobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 9], fov: 58 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <SceneContent route={route} mobile={mobile} />
    </Canvas>
  );
}
