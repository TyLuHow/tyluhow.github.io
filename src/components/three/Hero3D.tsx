import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Grid, Html } from '@react-three/drei'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

type KeyboardState = {
  forward: boolean
  backward: boolean
  left: boolean
  right: boolean
}

function useKeyboard(): KeyboardState {
  const [keys, setKeys] = useState<KeyboardState>({ forward: false, backward: false, left: false, right: false })

  useEffect(() => {
    const handleDown = (e: KeyboardEvent) => {
      if (e.key === 'w' || e.key === 'ArrowUp') setKeys(k => ({ ...k, forward: true }))
      if (e.key === 's' || e.key === 'ArrowDown') setKeys(k => ({ ...k, backward: true }))
      if (e.key === 'a' || e.key === 'ArrowLeft') setKeys(k => ({ ...k, left: true }))
      if (e.key === 'd' || e.key === 'ArrowRight') setKeys(k => ({ ...k, right: true }))
    }
    const handleUp = (e: KeyboardEvent) => {
      if (e.key === 'w' || e.key === 'ArrowUp') setKeys(k => ({ ...k, forward: false }))
      if (e.key === 's' || e.key === 'ArrowDown') setKeys(k => ({ ...k, backward: false }))
      if (e.key === 'a' || e.key === 'ArrowLeft') setKeys(k => ({ ...k, left: false }))
      if (e.key === 'd' || e.key === 'ArrowRight') setKeys(k => ({ ...k, right: false }))
    }
    window.addEventListener('keydown', handleDown)
    window.addEventListener('keyup', handleUp)
    return () => {
      window.removeEventListener('keydown', handleDown)
      window.removeEventListener('keyup', handleUp)
    }
  }, [])

  return keys
}

function Car() {
  const groupRef = useRef<THREE.Group>(null!)
  const wheelRefs = [useRef<THREE.Mesh>(null!), useRef<THREE.Mesh>(null!), useRef<THREE.Mesh>(null!), useRef<THREE.Mesh>(null!)]
  const { camera } = useThree()
  const keys = useKeyboard()

  // Movement state
  const velocity = useRef(0)
  const heading = useRef(0) // radians, yaw around Y

  const tmpVec = useMemo(() => new THREE.Vector3(), [])

  useFrame((_, delta) => {
    const accel = 18
    const maxSpeed = 12
    const friction = 6
    const steerSpeed = 2.2

    // accelerate / brake
    if (keys.forward) velocity.current = Math.min(maxSpeed, velocity.current + accel * delta)
    if (keys.backward) velocity.current = Math.max(-maxSpeed * 0.5, velocity.current - accel * delta)

    // natural friction
    if (!keys.forward && !keys.backward) {
      const sign = Math.sign(velocity.current)
      const mag = Math.max(0, Math.abs(velocity.current) - friction * delta)
      velocity.current = sign * mag
    }

    // steering depends on speed
    const speedFactor = THREE.MathUtils.clamp(Math.abs(velocity.current) / maxSpeed, 0, 1)
    if (keys.left) heading.current += steerSpeed * speedFactor * delta
    if (keys.right) heading.current -= steerSpeed * speedFactor * delta

    // update position based on heading and velocity
    const car = groupRef.current
    if (car) {
      const forward = tmpVec.set(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), heading.current)
      car.position.addScaledVector(forward, velocity.current * delta)
      car.rotation.y = heading.current

      // animate wheels
      const wheelRot = (velocity.current * delta) / 0.35
      wheelRefs.forEach(w => { if (w.current) w.current.rotation.x -= wheelRot })

      // chase camera
      const camOffset = tmpVec.set(0, 2.2, 4.5).applyAxisAngle(new THREE.Vector3(0, 1, 0), heading.current)
      const targetPos = car.position.clone().add(camOffset)
      // simple damp toward target
      camera.position.lerp(targetPos, 1 - Math.exp(-6 * delta))
      camera.lookAt(car.position.x, car.position.y + 0.8, car.position.z)
    }
  })

  // Materials
  const bodyMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: '#5B8AA8', metalness: 0.2, roughness: 0.6 }), [])
  const trimMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: '#0f1214', metalness: 0.5, roughness: 0.4 }), [])
  const wheelMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: '#1a1a1a', metalness: 0.3, roughness: 0.7 }), [])

  return (
    <group ref={groupRef} position={[0, 0.35, 2]}>
      {/* Body */}
      <mesh castShadow receiveShadow material={bodyMaterial}>
        <boxGeometry args={[1.8, 0.5, 0.9]} />
      </mesh>
      {/* Cabin */}
      <mesh castShadow position={[0, 0.45, -0.1]} material={trimMaterial}>
        <boxGeometry args={[1.0, 0.4, 0.6]} />
      </mesh>
      {/* Wheels */}
      <mesh ref={wheelRefs[0]} castShadow position={[-0.75, -0.05, 0.45]} rotation={[0, 0, Math.PI / 2]} material={wheelMaterial}>
        <cylinderGeometry args={[0.18, 0.18, 0.22, 20]} />
      </mesh>
      <mesh ref={wheelRefs[1]} castShadow position={[0.75, -0.05, 0.45]} rotation={[0, 0, Math.PI / 2]} material={wheelMaterial}>
        <cylinderGeometry args={[0.18, 0.18, 0.22, 20]} />
      </mesh>
      <mesh ref={wheelRefs[2]} castShadow position={[-0.75, -0.05, -0.45]} rotation={[0, 0, Math.PI / 2]} material={wheelMaterial}>
        <cylinderGeometry args={[0.18, 0.18, 0.22, 20]} />
      </mesh>
      <mesh ref={wheelRefs[3]} castShadow position={[0.75, -0.05, -0.45]} rotation={[0, 0, Math.PI / 2]} material={wheelMaterial}>
        <cylinderGeometry args={[0.18, 0.18, 0.22, 20]} />
      </mesh>
      {/* Accent stripe */}
      <mesh castShadow position={[0, 0.26, 0]} material={trimMaterial}>
        <boxGeometry args={[1.82, 0.06, 0.2]} />
      </mesh>
    </group>
  )
}

function Scene() {
  const { gl } = useThree()
  useEffect(() => {
    gl.setClearColor('#0a0a0a')
    gl.shadowMap.enabled = true
    gl.shadowMap.type = THREE.PCFSoftShadowMap
  }, [gl])

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <spotLight position={[-6, 6, -4]} angle={0.3} intensity={0.3} penumbra={0.7} />

      {/* Ground with grid */}
      <group position={[0, 0, 0]}>
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[200, 200]} />
          <meshStandardMaterial color={'#0f0f10'} roughness={1} metalness={0} />
        </mesh>
        <Grid
          position={[0, 0.002, 0]}
          args={[40, 40]}
          cellSize={0.6}
          cellThickness={0.6}
          sectionSize={3}
          sectionThickness={1.2}
          cellColor="#232629"
          sectionColor="#5B8AA8"
          fadeDistance={25}
          fadeStrength={0.8}
          infiniteGrid
        />
      </group>

      {/* Car */}
      <Car />

      {/* HUD */}
      <Html center position={[0, 2.2, 0]} style={{ pointerEvents: 'none' }}>
        <div className="text-xs sm:text-sm text-gray-300 bg-black/30 border border-white/10 rounded-md px-3 py-1.5">
          Use WASD or Arrow keys to drive
        </div>
      </Html>
    </>
  )
}

export default function Hero3D() {
  return (
    <div className="relative h-[60vh] sm:h-[70vh] lg:h-[75vh] rounded-xl overflow-hidden">
      <Suspense fallback={<div className="absolute inset-0 grid place-items-center text-gray-400">Loading scene…</div>}>
        <Canvas shadows camera={{ position: [0, 2.2, 6], fov: 55 }}>
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
} 