import { Keyboard } from "@/components/Keyboards";
import { Stage, useTexture } from "@react-three/drei";
import { group } from "console";
import { KEYCAP_TEXTURES } from ".";
import { useMemo } from "react";
import * as THREE from "three";
import { array, texture } from "three/tsl";

type SceneProps = {
    selectedTextureId: string;
    onAnimationComplete : () => void;
     
}



const Scene = ( {selectedTextureId , onAnimationComplete}:SceneProps) =>{

    const texturePath = KEYCAP_TEXTURES.map((t) => t.path);
    const textures = useTexture(texturePath);

    const materials = useMemo(()=>{
        const materialMap: {[key:string]: THREE.MeshStandardMaterial} = {};
        KEYCAP_TEXTURES.forEach((textureConfig, index)=>{
            const texture = Array.isArray(textures) ? textures[index] : textures;
            if(texture){
                texture.flipY = false;
                texture.colorSpace = THREE.SRGBColorSpace;
                materialMap[textureConfig.id ] = new THREE.MeshStandardMaterial({
                    map: texture,
                    roughness: 0.7
                })
            }
        })

        return materialMap;
    }, [textures])



    const currentKnobColor = KEYCAP_TEXTURES.find((t)=> t.id === selectedTextureId)?.knobColor;

    return(
        <Stage environment={'city'} intensity={0} >
        <group>
            <Keyboard  keycapMaterial={materials[selectedTextureId]} knobColor={currentKnobColor}/>
        </group>
        </Stage>
    )
}


export default Scene