"use client"
import * as THREE from "three"
import { Skateboard } from "@/components/Skateboard"
import {
	ContactShadows,
	Environment,
	Html,
	OrbitControls
} from "@react-three/drei"
import { Canvas, ThreeEvent, useThree } from "@react-three/fiber"
import { Suspense, useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { Hotspot } from "./Hotspot"
import { WavyPaths } from "./WavyPaths"

const INITIAL_CAMERA_POSITION = [1.5, 1, 1.4] as const

type Props = {
	deckTextureURL: string
	wheelTextureURL: string
	truckColor: string
	boltColor: string
}

export function InteractiveSkateboard({
	deckTextureURL,
	wheelTextureURL,
	truckColor,
	boltColor
}: Props) {
	return (
		<div className="absolute inset-0 z-10 flex items-center justify-center">
			<Canvas
				className="min-h-[60rem] w-full"
				camera={{ position: [1.5, 1, 1.4], fov: 55 }}>
				<Suspense>
					<Scene
						deckTextureURL={deckTextureURL}
						wheelTextureURL={wheelTextureURL}
						truckColor={truckColor}
						boltColor={boltColor}
					/>
				</Suspense>
			</Canvas>
		</div>
	)
}

function Scene({
	deckTextureURL,
	wheelTextureURL,
	truckColor,
	boltColor
}: Props) {
	return (
		<group>
			<OrbitControls />
			<Environment files="/hdr/warehouse-256.hdr" />
			<Skateboard
				wheelTextureURLs={[wheelTextureURL]}
				wheelTextureURL={wheelTextureURL}
				deckTextureURLs={[deckTextureURL]}
				deckTextureURL={deckTextureURL}
				truckColor={truckColor}
				boltColor={boltColor}
				constantWheelSpin
			/>
			<ContactShadows opacity={0.6} position={[0, -0.08, 0]} />
		</group>
	)
}
