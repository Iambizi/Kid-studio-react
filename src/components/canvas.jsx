import React, { Component } from "react";
import * as THREE from "three";

class Canvas extends Component {
  state = {};
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    //ADD SCENE
    this.scene = new THREE.Scene();

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 4;

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#f0f0f0");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    //ADD CUBE
    const geometry = new THREE.PlaneGeometry(8, 4, 22);
    // const texture = new THREE.TextureLoader().load(
    //   // "http://kidstudio.co/content/2-home/1-reel.gif"
    //   "/Users/amir/Desktop/repos/kid-react/src/img/1-reel.png"
    // );

    // const loader = new THREE.TextureLoader();
    // loader.load(
    //   "http://kidstudio.co/content/2-home/1-reel.gif",

    //   function(texture) {
    //     const material = new THREE.MeshBasicMaterial({
    //       map: texture
    //     });
    //     return material;
    //   },

    //   undefined,

    //   function(err) {
    //     console.error("An error happened.");
    //   }
    // )

    

    const material = new THREE.MeshBasicMaterial({
      color: "orange"
    });

    this.plane = new THREE.Mesh(geometry, material);
    this.scene.add(this.plane);

    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    this.plane.rotation.x = 0.001;
    this.plane.rotation.y = 0.001;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div>
        <div
          style={{
            width: "100vw",
            height: "100vh"
          }}
          ref={mount => {
            this.mount = mount;
          }}
        ></div>
      </div>
    );
  }
}

export default Canvas;
