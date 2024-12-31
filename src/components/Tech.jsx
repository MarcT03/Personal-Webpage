import React, { useEffect } from "react";
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { render } from "@react-three/fiber";





const Tech = () => {

    useEffect(()=>{
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        const containter = document.getElementById('skills-containter')

        if(containter){
            containter.appendChild(renderer.domElement);
        }

        const ambientLight = new THREE.AmbientLight(0xffffff,2);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff,1);
        pointLight.position.set(5,5,5);
        scene.add(pointLight);

        const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
        const sphereMaterial = new THREE.MeshStandardMaterial({
            color:0xffffff,
            wireframe: true,
        })
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);

        const loader = new THREE.TextureLoader();
        const iconPaths = [
            '../assets/html.svg',
            '../assets/cpp.svg',
            '../assets/emacs.svg',
            '../assets/git.svg',
            '../assets/js.svg',
            '../assets/mongodb.svg',
            '../assets/nodejs.svg',
            '../assets/python.svg',
            '../assets/react.svg',
            '../assets/tailwindcss.svg',
            '../assets/threejs.svg'
        ];

        iconPaths.forEach((iconPath, index) => {
            const texture = loader.load(iconPath);
            const material = new THREE.SpriteMaterial({map:texture});
            const sprite = new THREE.Sprite(material);

            const angle = (index / iconPaths.length) * Math.PI * 2;
            const x = Math.sin(angle) * 2;
            const y = Math.cos(angle) * 2;
            sprite.position.set(x,y,0);

            sphere.add(sprite);
        });

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;

        camera.position.z=5;


        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.y += 0.01;
            controls.update()
            renderer.render(scene, camera);
        };

        
        animate();
    }, []);
    return (
        <div id="skills-container" style={{ width: '100%', height: '100vh' }}>
            <h1 className="text-center text-3xl font-bold font-sf">Skills</h1>
        </div>
    );
};

export default Tech