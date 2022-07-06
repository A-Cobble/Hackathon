const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
console.log(window.innerWidth)

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#8f8f8f")
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const boxGeometry = new THREE.BoxGeometry( 1, 4, 1 );
const boxMaterial = new THREE.MeshNormalMaterial();
const boxCube = new THREE.Mesh( boxGeometry, boxMaterial );

scene.add( boxCube );
boxCube.position.x = 3;
boxCube.position.z = -5;

const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshToonMaterial({color:"rgb(21,50,196)"});
console.log(material)
material.opacity = 0.50;
material.transparent = true;
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.x = 3;
cube.position.z = -5;

// const TorusKnot = new THREE.TorusKnotGeometry(1,0.075,88,11,13,9)
const TorusKnot = new THREE.TorusKnotGeometry(1,0.1,52,6,14,7)
// const TorusKnot = new THREE.TorusKnotGeometry(1.5,0.1,33,14,13,6)
const TorusKnotMaterial = new THREE.MeshNormalMaterial()
const objectTorusKnot = new THREE.Mesh(TorusKnot, TorusKnotMaterial)
scene.add( objectTorusKnot );
objectTorusKnot.position.x = -1.5;
objectTorusKnot.position.z = -5;

const sphere = new THREE.SphereGeometry(2.4, 50, 50)

const sphereMaterial = new THREE.MeshNormalMaterial()
const objectSphere = new THREE.Mesh(sphere, sphereMaterial)
sphereMaterial.wireframe = true;
scene.add( objectSphere )
objectSphere.position.x = -1.5;
objectSphere.position.z = -5;
console.log(objectSphere)

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );
directionalLight.position.z = 5;

camera.position.z = 5;
camera.position.x = -1.5;



let body = document.querySelector('body');
let animation = true;
body.addEventListener('click', ()=> {
    if(animation == true) {
        animation = false
    } else {
        animation = true
    }})

function animate() {

    if (animation == true) {
	    requestAnimationFrame( animate );
	    renderer.render( scene, camera );
        cube.rotation.x -= 0.01;
        cube.rotation.y += 0.01;
        boxCube.rotation.x += 0.02;
        boxCube.rotation.y += 0.02;
        // objectTorusKnot.rotation.x -= 0.01
        objectTorusKnot.rotation.z -= 0.01
        objectSphere.rotation.y += 0.01
        // objectSphere.position.x += 0.02
        if(camera.position.z >= -3.4){
            camera.position.z -= 0.02
        }
       
        if(camera.position.z <= 1){
            camera.rotation.z += 0.01
        }

        
        // let sphereMorph = true;
        // while(sphereMorph === true){
        //     objectSphere.scale.radius += 0.03;
        //     if(objectSphere.scale.radius >= 6){
        //         sphereMorph = false;
        //     }
        // }

        // while(sphereMorph === false){
        //     objectSphere.scale.radius -= 0.03;
        //     if(objectSphere.scale.radius <= 2.4){
        //         sphereMorph = true;
        //     }
        // }
        // if(objectSphere.position.x <= ((window.innerHeight/2)-objectSphere.scale.radius)){
        // objectSphere.position.y += 0.05
        // }
        // objectSphere.position.x += 0.03
    }else{
        requestAnimationFrame( animate );
        renderer.render(scene,camera)
    }
}

animate();

   


// const texture = new THREE.TextureLoader().load('lavatile.jpg')
// map: texture







// const shaderIDs = {
//     MeshDepthMaterial: 'depth',
//     MeshDistanceMaterial: 'distanceRGBA',
//     MeshNormalMaterial: 'normal',
//     MeshBasicMaterial: 'basic',
//     MeshLambertMaterial: 'lambert',
//     MeshPhongMaterial: 'phong',
//     MeshToonMaterial: 'toon',
//     MeshStandardMaterial: 'physical',
//     MeshPhysicalMaterial: 'physical',
//     MeshMatcapMaterial: 'matcap',
//     LineBasicMaterial: 'basic',
//     LineDashedMaterial: 'dashed',
//     PointsMaterial: 'points',
//     ShadowMaterial: 'shadow',
//     SpriteMaterial: 'sprite'
// };

// BoxGeometry: BoxGeometry,
// 		BoxBufferGeometry: BoxGeometry,
// 		CapsuleGeometry: CapsuleGeometry,
// 		CapsuleBufferGeometry: CapsuleGeometry,
// 		CircleGeometry: CircleGeometry,
// 		CircleBufferGeometry: CircleGeometry,
// 		ConeGeometry: ConeGeometry,
// 		ConeBufferGeometry: ConeGeometry,
// 		CylinderGeometry: CylinderGeometry,
// 		CylinderBufferGeometry: CylinderGeometry,
// 		DodecahedronGeometry: DodecahedronGeometry,
// 		DodecahedronBufferGeometry: DodecahedronGeometry,
// 		EdgesGeometry: EdgesGeometry,
// 		ExtrudeGeometry: ExtrudeGeometry,
// 		ExtrudeBufferGeometry: ExtrudeGeometry,
// 		IcosahedronGeometry: IcosahedronGeometry,
// 		IcosahedronBufferGeometry: IcosahedronGeometry,
// 		LatheGeometry: LatheGeometry,
// 		LatheBufferGeometry: LatheGeometry,
// 		OctahedronGeometry: OctahedronGeometry,
// 		OctahedronBufferGeometry: OctahedronGeometry,
// 		PlaneGeometry: PlaneGeometry,
// 		PlaneBufferGeometry: PlaneGeometry,
// 		PolyhedronGeometry: PolyhedronGeometry,
// 		PolyhedronBufferGeometry: PolyhedronGeometry,
// 		RingGeometry: RingGeometry,
// 		RingBufferGeometry: RingGeometry,
// 		ShapeGeometry: ShapeGeometry,
// 		ShapeBufferGeometry: ShapeGeometry,
// 		SphereGeometry: SphereGeometry,
// 		SphereBufferGeometry: SphereGeometry,
// 		TetrahedronGeometry: TetrahedronGeometry,
// 		TetrahedronBufferGeometry: TetrahedronGeometry,
// 		TorusGeometry: TorusGeometry,
// 		TorusBufferGeometry: TorusGeometry,
// 		TorusKnotGeometry: TorusKnotGeometry,
// 		TorusKnotBufferGeometry: TorusKnotGeometry,
// 		TubeGeometry: TubeGeometry,
// 		TubeBufferGeometry: TubeGeometry,
// 		WireframeGeometry: WireframeGeometry