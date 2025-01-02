import React, { useEffect, useRef } from "react";
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useDarkMode } from "../context/DarkModeContext";

import htmlIcon from '../assets/html.svg';
import cppIcon from '../assets/cpp.svg';
import cssIcon from '../assets/css.svg';
import emacsIcon from '../assets/emacs.svg';
import gitIcon from '../assets/git.svg';
import jsIcon from '../assets/js.svg';
import mongodbIcon from '../assets/mongodb.svg';
import nodejsIcon from '../assets/nodejs.svg';
import pythonIcon from '../assets/python.svg';
import reactIcon from '../assets/react.svg';
import tailwindcssIcon from '../assets/tailwindcss.svg';
import threejsIcon from '../assets/threejs.svg';

const Tech = () => {
    const dodecahedronRef = useRef(null);
    const { darkMode } = useDarkMode()

    useEffect(() => {
        

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({alpha: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        scene.background=null;
        const container = document.getElementById('skills-container');

        if (container) {
            container.appendChild(renderer.domElement);
        }

        const ambientLight = new THREE.AmbientLight(0xE0E0E0, 2);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xE0E0E0, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);
        
        if(!dodecahedronRef.current){
        const dodecaheronGeometry = new THREE.DodecahedronGeometry(2);
        const dodecahedronMaterial = new THREE.MeshPhongMaterial({
            color: 0x9E9E9E,
            wireframe: false,
            transparent:false,
            
        });
        dodecahedronRef.current = new THREE.Mesh(dodecaheronGeometry, dodecahedronMaterial);
        scene.add(dodecahedronRef.current);

        const edgesGeometry = new THREE.EdgesGeometry(dodecaheronGeometry);
        const edgesMaterial = new THREE.LineBasicMaterial({
            color: 0x000000,
            linewidth: 2,  
        });

        const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
        scene.add(edges);
    
        }

        const loader = new THREE.TextureLoader();
        const iconPaths = [
            htmlIcon, cppIcon, emacsIcon, gitIcon, jsIcon, mongodbIcon, nodejsIcon, pythonIcon, reactIcon, tailwindcssIcon, threejsIcon, cssIcon
        ];

        iconPaths.forEach((iconPath, index) => {
            const texture = loader.load(iconPath);
            const material = new THREE.SpriteMaterial({ map: texture });
            const sprite = new THREE.Sprite(material);

            const angle = (index / iconPaths.length) * Math.PI * 2;
            const x = Math.sin(angle) * 2;
            const y = Math.cos(angle) * 2;
            sprite.position.set(x, y, 0);

            dodecahedronRef.current.add(sprite);
        });

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.enableZoom = false;

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        animate();
    }, []);

    return (
        <div className=""id="skills-container" style={{ width: '100', height: '1' }}>
            <h1 className="text-center text-3xl font-bold font-helvetica">Ekills</h1>
        </div>
    );
};

export default Tech;
