import anime from "animejs";
import GUI from "lil-gui";
import React from "react";
import * as THREE from "three";

import firstVertexShader from "./shaders/firstVertex.vs";
import fragmentShader from "./shaders/fragment.fs";
import secondVertexShader from "./shaders/secondVertex.vs";

import "lil-gui/dist/lil-gui.css";
import styles from "./ThreeHeader.module.css";

/*
 * inspo: https://dailycssdesign.com/67
 *
 * @TODO:
 *  1. Create two different ShaderMaterials for each mesh.
 *  2. Create a normalize mouse position vector (meaning 0.0 is the center of the screen). This needs to be passed a uniform to the shaders.
 *  3. Time also needs to be passed as a unfiform to the shaders.
 *  4. Also need a pattern.
 *  5. The shaders use the SAME fragment shader but different vertex shaders.
 *
 */

export class ThreeHeader extends React.Component {
  scene = new THREE.Scene();
  renderer: THREE.WebGLRenderer | null = null;
  sizes = {
    width: typeof window !== "undefined" ? window.innerWidth : 1920,
    height: 500,
  };
  camera = new THREE.PerspectiveCamera(60, this.sizes.width / this.sizes.height, 0.01, 1500);
  clock = new THREE.Clock();
  gui: GUI | null = null;
  mousePosition = {
    x: 0.5,
    y: 0.5,
  };
  textures: any = {};
  firstMaterial: any = null;
  secondMaterial: any = null;

  // Geometries
  planeGeometry = new THREE.PlaneGeometry(10, 300, 1, 100);

  debugObject = {
    cameraPosition: { x: 0, y: 0, z: 2 },
  };

  timeline = typeof window !== "undefined" ? anime.timeline() : null;

  initScene(texture: any) {
    const colors = [
      "rgb(40,110,240)",
      "rgb(89,227,221)",
      "rgb(241,209,89)",
      "rgb(5,143,219)",
      "rgb(249,80,117)",
      "rgb(35,88,241)",
      "rgb(76,182,253)",
      "rgb(63,255,167)",
      "rgb(6,184,219)",
      "rgb(245,177,99)",
      "rgb(31,133,238)",
      "rgb(66,236,181)",
      "rgb(101,217,209)",
      "rgb(82,134,245)",
      "rgb(53,222,179)",
      "rgb(36,174,251)",
      "rgb(73,218,228)",
      "rgb(29,178,255)",
    ];

    const canvasPattern0 = document.createElement("canvas");
    const canvasPattenSize0 = 1024;
    canvasPattern0.width = this.sizes.width;
    canvasPattern0.height = this.sizes.height;
    const canvasPatternContext1 = canvasPattern0.getContext("2d");
    const circleCount = 100;
    for (let i = 0; i < circleCount; i++) {
      const cx = Math.floor(Math.random() * canvasPattenSize0);
      let cy = Math.floor(Math.random() * canvasPattenSize0);
      const width = 2;
      let height = 10;

      cy = 0;
      height = canvasPattenSize0;

      if (canvasPatternContext1) {
        canvasPatternContext1.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        canvasPatternContext1.fillRect(cx, cy, width, height);
      }
    }
    const geometry = new THREE.PlaneGeometry(10, 300, 1, 100);

    const texture0 = new THREE.Texture(canvasPattern0);
    texture0.needsUpdate = true;

    this.firstMaterial = new THREE.ShaderMaterial({
      transparent: true,
      fragmentShader,
      vertexShader: firstVertexShader,
      side: THREE.DoubleSide,
      uniforms: {
        u_texture: {
          value: texture0,
        },
        u_textureSize: {
          value: canvasPattenSize0,
        },
        u_dimensions: {
          value: new THREE.Vector2(this.sizes.width, this.sizes.height),
        },
        u_mousePosition: {
          value: new THREE.Vector2(0.5, 0.5),
        },
        u_time: {
          value: 0,
        },
        u_opacity: {
          value: 0,
        },
      },
    });

    const mesh = new THREE.Mesh(geometry, this.firstMaterial);

    mesh.position.set(0, -20, 0);
    mesh.rotation.z = Math.PI / 2;

    const geometry2 = new THREE.PlaneGeometry(5, 300, 1, 100);
    this.secondMaterial = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        texture: {
          value: texture0,
        },
        u_textureSize: {
          value: canvasPattenSize0,
        },
        u_dimensions: {
          value: new THREE.Vector2(this.sizes.width, this.sizes.height),
        },
        u_mousePosition: {
          value: new THREE.Vector2(this.mousePosition.x, this.mousePosition.y),
        },
        u_time: {
          value: 0,
        },
        u_opacity: {
          value: 0,
        },
      },
      fragmentShader: fragmentShader,
      vertexShader: secondVertexShader,
    });

    const mesh2 = new THREE.Mesh(geometry2, this.secondMaterial);
    mesh2.position.set(0, -20, 20);
    mesh2.rotation.z = Math.PI / 2;
    this.camera.position.z = 80;

    if (this.renderer) {
      this.renderer.setSize(this.sizes.width, this.sizes.height);
      this.renderer.setClearColor(new THREE.Color("#C1EFFF"));
    }
    this.scene.add(mesh);
    this.scene.add(mesh2);

    // Normal timeline
    this.timeline.add({
      targets: [`.${styles.heading}`],
      opacity: 1,
      duration: 1000,
      easing: "easeInOutQuart",
    });

    this.timeline.add(
      {
        targets: [`.${styles.ctas}`],
        opacity: 1,
        duration: 1000,
        easing: "easeInOutQuart",
      },
      300,
    );

    this.timeline.add(
      {
        targets: [this.firstMaterial.uniforms.u_opacity, this.secondMaterial.uniforms.u_opacity],
        value: 1,
        duration: 1000,
        easing: "easeInOutQuart",
      },
      800,
    );
  }

  initDebug() {
    this.gui = new GUI();

    const cameraFolder = this.gui.addFolder("Camera");
    cameraFolder.add(this.debugObject.cameraPosition, "x").min(-5).max(5).step(0.001);
    cameraFolder.add(this.debugObject.cameraPosition, "y").min(-5).max(5).step(0.001);
    cameraFolder.add(this.debugObject.cameraPosition, "z").min(-5).max(5).step(0.001);

    cameraFolder.onChange(() => {
      const { x, y, z } = this.debugObject.cameraPosition;
      this.camera.position.set(x, y, z);
    });
  }

  componentDidMount() {
    const canvasEl = document.querySelector(`.${styles.canvas}`);
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvasEl ?? undefined,
    });
    const textureLoader = new THREE.TextureLoader();

    textureLoader.load("/images/ulrik_seawiz_uten_bg.png", (texture) => {
      texture.needsUpdate = true;
      this.initScene(texture);
      // this.initDebug();
      this.tick();
    });

    window.addEventListener("resize", this.onResize.bind(this));
    window.addEventListener("mousemove", this.handleMouseMove.bind(this));
    window.addEventListener("touchmove", this.handleTouchMove.bind(this));
  }

  tick() {
    const elapsedTime = this.clock.getElapsedTime();

    this.firstMaterial.uniforms.u_mousePosition.value = new THREE.Vector2(
      this.mousePosition.x,
      this.mousePosition.y,
    );

    this.firstMaterial.uniforms.u_time.value = elapsedTime / 3;

    this.secondMaterial.uniforms.u_mousePosition.value = new THREE.Vector2(
      this.mousePosition.x,
      this.mousePosition.y,
    );

    this.secondMaterial.uniforms.u_time.value = elapsedTime / 3;

    const isMobile = false;

    this.camera.position.x +=
      ((this.mousePosition.x - 0.5) * (isMobile ? 140 : 40) - this.camera.position.x) * 0.01;
    this.camera.position.y +=
      ((this.mousePosition.y - 0.5) * (isMobile ? 80 : 80) - this.camera.position.y) * 0.01;

    this.camera.lookAt(this.scene.position);

    if (this.renderer) this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.tick.bind(this));
  }

  // Handlers
  onResize() {
    // Update sizes
    this.sizes.width = window.innerWidth;
    console.log(`Width: ${this.sizes.width} height: ${this.sizes.height}`);

    // Update camera
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();

    // Update renderer
    if (this.renderer) {
      this.renderer.setSize(this.sizes.width, this.sizes.height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
  }

  handleTouchMove(e: TouchEvent) {
    const touch = e.touches[0];
    this.mousePosition.x = touch.clientX / this.sizes.width;
    this.mousePosition.y = touch.clientY / this.sizes.height;
  }

  handleMouseMove(e: MouseEvent) {
    this.mousePosition.x = e.clientX / this.sizes.width;
    this.mousePosition.y = e.clientY / this.sizes.height;
  }

  render() {
    return (
      <div>
        <div className={styles.reference}></div>
        <div className={styles.header}>
          <div className={styles.content}></div>
          <div className={styles.ctas}></div>
          <canvas className={styles.canvas} />
        </div>
      </div>
    );
  }
}
