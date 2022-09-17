vec3 rgb(float r, float g, float b) {
    return vec3(r / 255., g / 255., b / 255.);
}

vec3 rgb(float c) {
    return vec3(c / 255., c / 255., c / 255.);
}
float lighten(float base, float blend) {
	return max(blend,base);
}

vec3 lighten(vec3 base, vec3 blend) {
	return vec3(lighten(base.r,blend.r),lighten(base.g,blend.g),lighten(base.b,blend.b));
}

vec3 lighten(vec3 base, vec3 blend, float opacity) {
	return (lighten(base, blend) * opacity + base * (1.0 - opacity));
}

varying float distortion;
varying float xDistortion;
varying float zDistortion;
varying float color1;
varying float color2;
varying float color3;
varying float color4;

varying vec2 vUv;
varying float mouseX;
varying float mouseY;

uniform sampler2D u_texture;
uniform vec2 u_dimensions;
uniform float u_textureSize;
uniform float u_opacity;

void main() {
    vec3 baseColor = rgb(255., 0., 179.);
    vec3 color = baseColor;

    vec2 st = gl_FragCoord.xy / u_dimensions;
    vec2 test = vec2(
        mod(st.x * (u_dimensions.x / u_textureSize), 1.),
        mod(st.y * (u_dimensions.y / u_textureSize), 1.)
    );

    /* color = lighten(color, texture2D(u_texture, test).rgb, 1.); */
//    inital:
    color = lighten(color, rgb(255., 219., 164.), (xDistortion + 1.) / 2.);
    color = lighten(color, rgb(255., 179., 179.), (zDistortion + 1.) / 2.);
    color = lighten(color, rgb(255., 255., 255.), color2);


    // color = lighten(color, rgb(80., 200., 120.), (xDistortion + 1.) / 2.);
    // color = lighten(color, rgb(80., 94., 57.), (zDistortion + 1.) / 2.);
    // color = lighten(color, rgb(0., 0., 255.), color2);

    gl_FragColor = vec4(color, u_opacity);
}
