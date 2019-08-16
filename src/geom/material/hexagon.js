import Material from './material';
import { getModule, wrapUniforms } from '../../util/shaderModule';
import merge from '@antv/util/lib/deep-mix';
export default class hexagonMaterial extends Material {
  getDefaultParameters() {
    return {
      uniforms: {
        u_opacity: { value: 1.0 },
        u_time: { value: 0 },
        u_radius: { value: 0.01 },
        u_angle: { value: 0.01 },
        u_coverage: { value: 0.8 },
        u_activeId: { value: 0 },
        u_activeColor: { value: [ 1.0, 0, 0, 1.0 ] }
      },
      defines: {

      }
    };
  }
  constructor(_uniforms, _defines, parameters) {
    super(parameters);
    const { defines } = this.getDefaultParameters();
    const { vs, fs, uniforms } = getModule('hexagon');
    this.uniforms = wrapUniforms(merge(uniforms, _uniforms));
    this.type = 'hexagonMaterial';
    this.defines = Object.assign(defines, _defines);
    this.vertexShader = vs;
    this.fragmentShader = fs;
    this.transparent = true;
  }
}
