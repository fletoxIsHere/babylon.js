import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder } from "@babylonjs/core";
import { BasicScene } from "./BabylonExamples/BasicScene";
import { StandardMaterials } from "./BabylonExamples/StandardMaterials";



const canvas = document.querySelector("canvas")!;
new BasicScene(canvas);

class App {
    

}
