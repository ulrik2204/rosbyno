import anime from "animejs";
import GUI from "lil-gui";
import React from "react";
import * as THREE from "three";

import firstVertexShader from "./shaders/firstVertex.vs";
import fragmentShader from "./shaders/fragment.fs";
import secondVertexShader from "./shaders/secondVertex.vs";

import "lil-gui/dist/lil-gui.css";
import styles from "./WaveAnimation.module.css";

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

export default class WaveAnimation extends React.Component<
  Record<string, never>,
  { isCursorOverCanvas: boolean }
> {
  constructor(props = {}) {
    super(props);
    this.state = {
      isCursorOverCanvas: false,
    };
  }
  scene = new THREE.Scene();
  renderer: THREE.WebGLRenderer | null = null;
  sizes = {
    width: typeof window !== "undefined" ? window.innerWidth : 1920,
    height: 900,
  };
  camera = new THREE.PerspectiveCamera(60, this.sizes.width / this.sizes.height, 0.01, 1500);
  clock = new THREE.Clock();
  gui: GUI | null = null;
  mousePosition = {
    x: 0.5,
    y: 0.5,
  };
  firstMaterial: THREE.ShaderMaterial | null = null;
  secondMaterial: THREE.ShaderMaterial | null = null;

  // Geometries
  planeGeometry = new THREE.PlaneGeometry(10, 300, 1, 100);

  timeline = typeof window !== "undefined" ? anime.timeline() : null;

  initScene() {
    const geometry = new THREE.PlaneGeometry(10, 300, 1, 100);
    this.firstMaterial = new THREE.ShaderMaterial({
      transparent: true,
      fragmentShader,
      vertexShader: firstVertexShader,
      side: THREE.DoubleSide,
      uniforms: {
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

  componentDidMount() {
    const canvasEl = document.querySelector(`.${styles.canvas}`);
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvasEl ?? undefined,
    });
    this.initScene();
    this.tick();
    window.addEventListener("resize", this.onResize.bind(this));
    window.addEventListener("mousemove", this.handleMouseMove.bind(this));
    window.addEventListener("touchmove", this.handleTouchMove.bind(this));
  }

  tick() {
    const elapsedTime = this.clock.getElapsedTime();

    if (this.firstMaterial) {
      this.firstMaterial.uniforms.u_mousePosition.value = new THREE.Vector2(
        this.mousePosition.x,
        this.mousePosition.y,
      );

      this.firstMaterial.uniforms.u_time.value = elapsedTime / 3;
    }
    if (this.secondMaterial) {
      this.secondMaterial.uniforms.u_mousePosition.value = new THREE.Vector2(
        this.mousePosition.x,
        this.mousePosition.y,
      );

      this.secondMaterial.uniforms.u_time.value = elapsedTime / 3;
    }

    const isMobile = false; // window.innerWidth < 750;
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
    // Update sizes, only care about updating width
    this.sizes.width = window.innerWidth;

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
    if (!this.state.isCursorOverCanvas) return;
    const touch = e.touches[0];
    this.mousePosition.x = touch.clientX / this.sizes.width;
    this.mousePosition.y = touch.clientY / this.sizes.height;
  }

  handleMouseMove(e: MouseEvent) {
    if (!this.state.isCursorOverCanvas) return;
    this.mousePosition.x = e.clientX / (window.innerWidth + 1);
    this.mousePosition.y = e.clientY / (window.innerHeight + 1);
  }

  render() {
    return (
      <div
        onMouseEnter={() => this.setState({ isCursorOverCanvas: true })}
        onMouseLeave={() => this.setState({ isCursorOverCanvas: false })}
        onTouchStart={() => this.setState({ isCursorOverCanvas: true })}
        onTouchEnd={() => this.setState({ isCursorOverCanvas: false })}
        className={styles.wrapper}
      >
        <div className={styles.canvasDiv}>
          <canvas className={styles.canvas} />
        </div>
      </div>
    );
  }
}
