import { onMount, onCleanup } from "solid-js";
import { A, useMatch } from "@solidjs/router";
import * as THREE from "three";

const particles = (canvas) => {
  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      6,
      canvas.offsetWidth / canvas.offsetHeight,
      0.01,
      1000
    );
    camera.zoom = 1;
    camera.position.set(2.5, 5, 64);
    camera.lookAt(5, -5, 0);
    camera.updateProjectionMatrix();

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas,
    });
    renderer.setPixelRatio(3);

    const geometry = new THREE.BufferGeometry();
    const clock = new THREE.Clock(true);
    const material = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: {
        time: {
          type: "f",
          value: clock.getElapsedTime(),
        },
      },
      vertexShader: `
      uniform float time;
      varying vec3 vPosition;

      void main() {
        float height = sin(
          (time * 0.5) +
          ((position.x + position.z) * 0.3)
        ) * 0.4;

        gl_PointSize = 70.0;

        gl_Position =
          projectionMatrix
          * modelViewMatrix
          * vec4(position.x, height, position.z, 1.0);

        vPosition = vec3(position.x, height, position.z);
      }`,
      fragmentShader: `
      varying vec3 vPosition;

      void main() {
        vec2 xy = gl_PointCoord.xy - vec2(0.5);
        float absDist = 0.5 - length(xy);

        float focusPointDist = abs(vPosition.z - 27.0);
        float sizeFactor = focusPointDist / 50.0 + 0.1;
        float opacityFactor = 1.0 / (sizeFactor * 5.5);
        opacityFactor = opacityFactor * opacityFactor;

        float circleMask = 1.0 - step(absDist, mix(0.5, 0.0, sizeFactor));
        gl_FragColor = vec4(0.0, 0.0, 0.0, clamp(0.0, 1.0, opacityFactor) * circleMask);
      }`,
    });

    const length = 55;
    const width = 50;
    const vertices = new Float32Array(length * width * 3);

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < width; j++) {
        vertices[i * width * 3 + j * 3 + 0] = i; // x
        vertices[i * width * 3 + j * 3 + 1] = 0; // y
        vertices[i * width * 3 + j * 3 + 2] = j; // z
      }
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let animating = true;

    function animate() {
      if (animating) window.requestAnimationFrame(animate);

      points.material.uniforms.time.value = clock.getElapsedTime();

      camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(
        canvas.parentElement.offsetWidth,
        canvas.parentElement.offsetHeight
      );

      renderer.render(scene, camera);
    }

    animate();

    onCleanup(() => {
      animating = false;
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    });
  });
};

export default function Nav(props) {
  const isHome = useMatch(() => "/");

  return (
    <div
      class="flex flex-col justify-center items-stretch transition-all ease-out duration-700"
      classList={{
        "flex-auto": Boolean(isHome()),
        "flex-none": !Boolean(isHome()),
      }}
    >
      <nav class="relative pt-4 pb-3 min-h-fit text-gray-700 px-4 flex flex-col justify-between items-start overflow-hidden">
        <div
          class="absolute inset-0 pointer-events-none -z-10"
          style="background: linear-gradient(115deg, rgba(210,210,255,1) 13rem, rgba(164,185,255,1) 100%)"
        ></div>

        <canvas
          use:particles
          class="absolute inset-0 pointer-events-none -z-10"
        />

        <div
          class="absolute inset-0 pointer-events-none -z-10"
          style="background: linear-gradient(115deg, rgba(210,210,255,1) 13rem, rgba(164,185,255,0) 100%)"
        ></div>

        <div
          class="absolute inset-0 pointer-events-none -z-10"
          style="background-size: 50px; background-image: url(/noise.png); background-repeat: repeat"
        ></div>

        <A
          class="pb-4 text-4xl no-underline hover:underline"
          activeClass="underline"
          href="/"
        >
          Olivia Sculley
        </A>

        <div class="flex flex-col">
          <a
            href="mailto:olivia@sculley.dev"
            onclick="return confirm('Are you sure you want to send me an email?')"
            class="no-underline hover:underline"
          >
            olivia@sculley.dev
          </a>

          <ul class="flex flex-row items-center space-x-2">
            <li>
              <A
                inactiveClass="no-underline hover:underline"
                activeClass="underline"
                href="/about"
                end="true"
              >
                About
              </A>
            </li>

            <li>
              <A
                inactiveClass="no-underline hover:underline"
                activeClass="underline"
                href="/projects"
                end="true"
              >
                Projects
              </A>
            </li>

            <li>
              <A
                inactiveClass="no-underline hover:underline"
                activeClass="underline"
                href="/posts"
                end="true"
              >
                Posts
              </A>
            </li>
          </ul>
        </div>
      </nav>

      <div class="h-0 min-h-fit">
        <div class="mt-8">{props.children}</div>
      </div>
    </div>
  );
}
