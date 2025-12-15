uniform float uCurrentTime;
uniform vec3 color;
uniform vec3 uColorStart;
uniform float uTimeOffset;
uniform sampler2D noiseTexture;

varying vec2 vUv;

  void main() {
    vec2 center = vec2(0.5, 0.5);
    float dist = distance(vUv, center);
    vec2 noiseUV = fract(vUv * 1. + vec2(0.0, -(uTimeOffset + uCurrentTime * 1.2) * 0.5 ));
    vec3 n = texture2D(noiseTexture, noiseUV).rgb;
    dist += n.r * 0.2; 
    
    float end = 0.3;
    float start = 0.;
    
    end -= uCurrentTime * 1.25;
    end = clamp(end, 0.0, 0.3);
    float innerFade = smoothstep(start, uCurrentTime, dist);
    float fade = dist < end ? innerFade : 0.0;
    float colorScalar = 10. - uCurrentTime * 20.;
    float o = clamp(uCurrentTime * 20., 0., 1.);
    vec3 finalColor = mix(uColorStart, color, clamp(uCurrentTime * 30., 0., 1.));
    gl_FragColor = vec4(finalColor * 10. * clamp(colorScalar, 0., 10.), clamp(fade * o * pow(dist, 2.4) - uCurrentTime * 0.1, 0., 1.));
  }
